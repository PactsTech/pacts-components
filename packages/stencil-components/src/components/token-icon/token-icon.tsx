import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'token-icon',
  shadow: true,
})
export class TokenIcon {
  /**
   * The name of the token used in the order processor
   */
  @Prop() token: string;

  render() {
    switch (this.token) {
      case 'usdc':
        return <usdc-svg key='usdc' />;
      case 'usdt':
        return <usdt-svg key='usdt' />;
      case 'wbtc':
        return <wbtc-svg key='wbtc' />;
    }
  }
}
