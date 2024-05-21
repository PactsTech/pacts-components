import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'icon-container',
  styleUrl: 'icon-container.css',
  shadow: true,
})
export class IconContainer {
  /**
   * The name of the icon to display
   */
  @Prop() icon: string;

  /**
   * size of the icon
   */
  @Prop() size = '3rem';

  render() {
    return (
      <Host style={{ height: this.size, width: this.size }}>
        {(() => {
          switch (this.icon) {
            case 'pacts':
              return <pacts-svg key='pacts' />;
            case 'arbitrum':
            case 'arbitrumSepolia':
              return <arbitrum-svg key='arbitrum' />;
            case 'ethereum':
              return <ethereum-svg key='ethereum' />;
            case 'usdc':
              return <usdc-svg key='usdc' />;
            case 'usdt':
              return <usdt-svg key='usdt' />;
            case 'wbtc':
              return <wbtc-svg key='wbtc' />;
          }
        })()}
      </Host>
    );
  }
}
