import { Component, h } from '@stencil/core';

@Component({
  tag: 'pacts-svg',
  shadow: true,
})
export class PactsSvg {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={0.75}
        class="prefix__lucide prefix__lucide-scroll-text"
        viewBox="0 0 24 24"
      >
        <path d="M15 12h-5M15 8h-5M19 17V5a2 2 0 0 0-2-2H4" />
        <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
      </svg>
    );
  }
}