import { Component, Event, EventEmitter, Host, Method, Prop, h } from '@stencil/core';
// import { MetaMaskInpageProvider } from '@metamask/providers';
// import * as chains from 'viem/chains';
// import { Address, createPublicClient, createWalletClient, custom } from 'viem';

// declare global {
//   interface Window {
//     ethereum?: MetaMaskInpageProvider
//   }
// }

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
  @Prop() address: string;

  /**
   * The order id to use
   */
  @Prop() orderId?: string;

  /**
   * Price of the order in token units
   */
  @Prop() price: Number;

  /**
   * Shipping cost of the order in token units
   */
  @Prop() shipping: Number;

  /**
   * Public metadata to associate with the order
   */
  @Prop() metadata?: string;

  /**
   * Size for the chain icon
   */
  @Prop() chainIconSize = '2rem';

  /**
   * Event emitted when order submission starts
   */
  @Event() submissionStarted: EventEmitter;

  /**
   * Event emitted when order submission succeeds
   */
  @Event() submissionSucceeded: EventEmitter;

  /**
   * Event emitted when order submission errors
   */
  @Event() submissionErrored: EventEmitter<Error>;

  /**
   * Called to submit orders when button is clicked
   */
  @Method()
  async submitOrder() {
    this.submissionStarted.emit();
    // if (!window.ethereum) {
    //   const error = new Error('Browser has no wallet available');
    //   this.submissionErrored.emit(error);
    //   return;
    // }
    try {
      // const chain = chains[this.chain];
      // const transport = custom(window.ethereum);
      // const publicClient = createPublicClient({ chain, transport });
      // const walletClient = createWalletClient({ chain, transport }).extend(((client) => ({
      //   async getEncryptionKey(address) {
      //     return client.request({ method: 'eth_getEncryptionPublicKey', params: [address] });
      //   }
      // })));
      // const processor = getProcessor({ address: this.address, publicClient });
    } catch (error) {
      this.submissionErrored.emit(error);
    }
  }

  render() {
    return (
      <Host onClick={(event) => console.log({ event })}>
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
}
