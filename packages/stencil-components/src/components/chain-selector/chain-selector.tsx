import { Component, Prop, Host, h } from '@stencil/core';
import * as chains from 'viem/chains';

@Component({
  tag: 'chain-selector',
  styleUrl: 'chain-selector.css',
  shadow: true,
})
export class ChainSelector {
  /**
   * chain name to render
   */
  @Prop() chain: string;

  /**
   * Size of the icon above text
   */
  @Prop() iconSize = '4rem';

  render() {
    const chain = this.getChain();
    return (
      <Host>
        <div>
          <chain-icon chain={this.chain} class='chain-icon'
            style={{ height: this.iconSize, width: this.iconSize }} />
        </div>
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