import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'pacts-row',
  styleUrl: 'pacts-row.css',
  shadow: true,
})
export class PactsRow {

  /**
   * Token name to display
   */
  @Prop() token: string;

  /**
   * Size for the pacts icon
   */
  @Prop() iconSize = '2.5rem';

  render() {
    return (
      <div class='container'>
        <div class='token-icon'>
          <icon-container icon={this.token} size={this.iconSize} />
          &nbsp;
          <span class='token-name'>{this.token}</span>
        </div>
        <div class='link-wrapper'>
          <pacts-link />
        </div>
      </div >
    );
  }
}