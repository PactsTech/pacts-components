import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'pacts-link',
  styleUrl: 'pacts-link.css',
  shadow: true,
})
export class PactsLink {
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
      <a class='icon-link' href='https://pacts.tech' target='_blank'>
        <icon-container icon='pacts' size={this.iconSize} />
        &nbsp;
        <span style={{ fontSize: this.fontSize }}>Pacts</span>
      </a>
    );
  }
}