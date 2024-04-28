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

  @Prop() height = '2rem';

  @Prop() width = '2rem';

  render() {
    const style = { height: this.height, width: this.width };
    switch (this.chain) {
      case 'arbitrum':
        return <arbitrum-svg key='arbitrum' style={style} />;
      default:
        return <ethereum-svg key='ethereum' style={style} />;
    }
  }
}
