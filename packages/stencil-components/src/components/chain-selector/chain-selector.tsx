import { Component, Prop, Host, h } from '@stencil/core';
import * as chains from 'viem/chains';

@Component({
  tag: 'chain-selector',
  styleUrl: 'chain-selector.css',
  shadow: true,
})
export class ChainSelector {
  /**
   * Chain names to render
   */
  @Prop() chains: string;

  /**
   * Size of the icon above text
   */
  @Prop() iconSize = '5rem';

  render() {
    const chains = this.chains.split(',');
    return (
      <Host>
        <div class='row center-xs'>
          {chains.map((chainName) => {
            const chain = this.getChain(chainName);
            return (
              <div class='col-xs'>
                <chain-icon chain={chainName} style={{
                  display: 'block',
                  margin: 'auto',
                  height: this.iconSize,
                  width: this.iconSize
                }} />
                <div class='row center-xs'>
                  <div class='col-xs'>
                    <span>{chain.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Host>
    );
  }

  private getChain(chainName: string) {
    switch (chainName) {
      case 'arbitrum': return chains.arbitrum;
      case 'arbitrumSepolia': return chains.arbitrumSepolia;
      default: return chains.mainnet;
    }
  }
}