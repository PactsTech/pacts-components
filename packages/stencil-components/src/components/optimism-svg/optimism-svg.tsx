import { Component, h } from '@stencil/core';

@Component({
  tag: 'optimism-svg',
  shadow: true,
})
export class OptimismSvg {
  render() {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        id='prefix__Layer_1'
        x={0}
        y={0}
        viewBox='0 0 500 500'
      >
        <style>{'.prefix__st1{fill:#fff}'}</style>
        <circle
          cx={250}
          cy={250}
          r={250}
          style={{ fill: '#ff0420' }}
        />
        <path
          d='M177.1 316.4q-22.35 0-36.6-10.5c-9.4-7.1-14.1-17.3-14.1-30.4 0-2.8.3-6.1.9-10.1 1.6-9 3.9-19.8 6.9-32.5 8.5-34.4 30.5-51.6 65.9-51.6 9.6 0 18.3 1.6 25.9 4.9 7.6 3.1 13.6 7.9 18 14.3q6.6 9.45 6.6 22.5 0 3.9-.9 9.9c-1.9 11.1-4.1 22-6.8 32.5-4.4 17.1-11.9 30-22.7 38.5-10.7 8.4-25.1 12.5-43.1 12.5m2.7-27c7 0 12.9-2.1 17.8-6.2 5-4.1 8.6-10.4 10.7-19 2.9-11.8 5.1-22 6.6-30.8.5-2.6.8-5.3.8-8.1 0-11.4-5.9-17.1-17.8-17.1-7 0-13 2.1-18 6.2-4.9 4.1-8.4 10.4-10.5 19-2.3 8.4-4.5 18.6-6.8 30.8-.5 2.5-.8 5.1-.8 7.9-.1 11.6 6 17.3 18 17.3M259.3 314.6c-1.4 0-2.4-.4-3.2-1.3-.6-1-.8-2.1-.6-3.4l25.9-122c.2-1.4.9-2.5 2.1-3.4 1.1-.9 2.3-1.3 3.6-1.3H337c13.9 0 25 2.9 33.4 8.6 8.5 5.8 12.8 14.1 12.8 25 0 3.1-.4 6.4-1.1 9.8-3.1 14.4-9.4 25-19 31.9-9.4 6.9-22.3 10.3-38.7 10.3h-25.3l-8.6 41.1c-.3 1.4-.9 2.5-2.1 3.4-1.1.9-2.3 1.3-3.6 1.3zm66.4-71.7c5.3 0 9.8-1.4 13.7-4.3 4-2.9 6.6-7 7.9-12.4.4-2.1.6-4 .6-5.6 0-3.6-1.1-6.4-3.2-8.3-2.1-2-5.8-3-10.9-3h-22.5l-7.1 33.6z'
          class='prefix__st1'
        />
      </svg>
    );
  }
}