import { Component, Event, EventEmitter, Host, Method, Prop, h } from '@stencil/core';
import { MetaMaskInpageProvider } from '@metamask/providers';
import * as chains from 'viem/chains';
import {
  Address,
  TransactionReceipt,
  createPublicClient,
  createWalletClient,
  custom,
  publicActions
} from 'viem';
import { getProcessor, setupOrder, submitOrder } from '@pactstech/pacts-viem';
import { TransactionError } from '../../types/types';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider
  }
}

@Component({
  tag: 'pacts-button',
  styleUrl: 'pacts-button.css',
  shadow: true,
})
export class PactsButton {
  /**
   * The token of the currency for the order processor
   */
  @Prop() token: string;
  /**
   * The name of the chain for the order processor
   */
  @Prop() chain: string;

  /**
   * The address of the order processor
   */
  @Prop() address: Address;

  /**
   * The order id to use
   */
  @Prop() orderId?: string;

  /**
   * Price of the order in token units
   */
  @Prop() price: string;

  /**
   * Shipping cost of the order in token units
   */
  @Prop() shipping: string;

  /**
   * Public metadata to associate with the order
   */
  @Prop() metadata: string = '{}';

  /**
   * Size for the chain icon
   */
  @Prop() chainIconSize = '2rem';

  /**
   * Event emitted when order submission starts
   */
  @Event({ eventName: 'submissionStarted' }) submissionStarted: EventEmitter;

  /**
   * Event emitted when order submission succeeds
   */
  @Event({ eventName: 'submissionSucceeded' }) submissionSucceeded: EventEmitter<TransactionReceipt>;

  /**
   * Event emitted when order submission errors
   */
  @Event({ eventName: 'submissionErrored' }) submissionErrored: EventEmitter<Error>;

  /**
   * Called to submit orders when button is clicked
   */
  @Method()
  async submitOrder() {
    this.submissionStarted.emit();
    if (!window.ethereum) {
      const error = new Error('Browser has no wallet available');
      this.submissionErrored.emit(error);
      return;
    }
    try {
      const chain = this.getChain();
      const transport = custom(window.ethereum);
      const publicClient = createPublicClient({ chain, transport });
      const walletClient = createWalletClient({ chain, transport }).extend(publicActions);
      const chainId = await publicClient.getChainId();
      if (chainId !== chain.id) {
        await walletClient.switchChain({ id: chain.id });
      }
      const processor = getProcessor({ address: this.address, client: walletClient });
      const price = BigInt(this.price);
      const shipping = BigInt(this.shipping);
      const metadata = JSON.parse(this.metadata);
      const args = await setupOrder({
        publicClient,
        walletClient,
        processor,
        orderId: this.orderId,
        price,
        shipping,
        metadata
      });
      const hash = await submitOrder({ processor, ...args });
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      if (receipt.status !== 'success') {
        throw new TransactionError({ message: 'transaction failed', receipt });
      }
      this.submissionSucceeded.emit(receipt);
    } catch (error) {
      this.submissionErrored.emit(error as Error);
    }
  }

  render() {
    return (
      <Host onClick={() => this.submitOrder()}>
        <div class='container'>
          <token-icon token={this.token} />
          <chain-icon class='chain-icon'
            chain={this.chain}
            style={{ height: this.chainIconSize, width: this.chainIconSize }}
          />
        </div>
      </Host>
    );
  }

  private getChain() {
    switch (this.chain) {
      case 'arbitrum': return chains.arbitrum;
      case 'arbitrumSepolia': return chains.arbitrumSepolia;
      default: return chains.mainnet;
    }
  }
}
