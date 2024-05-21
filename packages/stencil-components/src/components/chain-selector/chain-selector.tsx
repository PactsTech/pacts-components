import { Component, Prop, h } from '@stencil/core';
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

  render() {
    const chains = this.chains.split(',');
    return (
      <div class='row center-xs'>
        {chains.map((chainName) => {
          const chain = this.getChain(chainName);
          return (
            <div class='col-xs'>
              <icon-container icon={chainName} style={{ margin: 'auto' }} />
              <div class='row center-xs'>
                <div class='col-xs'>
                  <span>{chain.name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
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