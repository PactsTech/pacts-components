import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'pacts-icon',
  styleUrl: 'pacts-icon.css',
  shadow: true,
})
export class PactsIcon {
  /**
   * Size for the pacts icon
   */
  @Prop() iconSize = '1.5rem';

  /**
   * Size of the pacts font
   */
  @Prop() fontSize = '1rem';

  render() {
    return (
      <a class="icon-link" href='https://pacts.tech' target='_blank'>
        <pacts-svg style={{ height: this.iconSize, width: this.iconSize }} />
        &nbsp;
        <span style={{ fontSize: this.fontSize }}>Pacts</span>
      </a>
    );
  }
}