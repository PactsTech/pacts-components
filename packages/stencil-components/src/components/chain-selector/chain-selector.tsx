import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { Chain } from 'viem/chains';
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
   * The current active chain
   */
  @Prop() activeChain?: string

  /**
   * Size of chain icons
   */
  @Prop() iconSize = '4rem';

  /**
   * Event emitted when chain is selected
   */
  @Event() chainSelected: EventEmitter<number>;

  render() {
    const chains = this.chains.split(',');
    return (
      <div class='chain-selector'>
        {chains.map((chainName) => {
          const chain = this.getChain(chainName);
          return (
            <div
              class={`chain${chainName === this.activeChain ? ' active-chain' : ''}`}
              onClick={() => this.chainSelected.emit(chain.id)}
            >
              <icon-container icon={chainName} size={this.iconSize} class='chain-icon' />
              <span>{chain.name}</span>
            </div>
          );
        })}
      </div>
    );
  }

  private getChain(chainName: string): Chain {
    return (chains as any)[chainName] as Chain;
  }
}