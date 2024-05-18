import { Component, Prop, Host, h } from '@stencil/core';
import * as chains from 'viem/chains';

@Component({
  tag: 'chain-selector',
  shadow: true,
})
export class ChainSelector {
  /**
   * chain name to render
   */
  @Prop() chain: string;

  render() {
    const chain = this.getChain();
    return (
      <Host>
        <chain-icon chain={this.chain} />
        <span>{chain.name}</span>
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