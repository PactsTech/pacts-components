import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chain-icon',
  shadow: true,
})
export class ChainIcon {
  /**
   * The name of the chain for the order processor
   */
  @Prop() chain: string;

  render() {
    switch (this.chain) {
      case 'arbitrum':
      case 'arbitrumSepolia':
        return <arbitrum-svg key='arbitrum' />;
      default:
        return <ethereum-svg key='ethereum' />;
    }
  }
}
