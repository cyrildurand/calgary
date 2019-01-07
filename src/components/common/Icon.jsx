import PropTypes from 'prop-types';
import React from 'react';

/**
 * To use it :
 * import Icon, { ICONS } from '../common/Icon';
 * // ...
 * <Icon icon={ICONS.CLOSE} />
 */

export default class Icon extends React.Component {
  static propTypes = {
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        viewBox: PropTypes.string,
        paths: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    ]).isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
  };

  static defaultProps = {
    width: 24,
    height: 24,
    color: '#FFF',
  };

  render() {
    const { width, height, icon, color } = this.props;

    let config =
      typeof icon == 'string'
        ? { viewBox: '0 0 24 24', paths: [icon] }
        : { viewBox: icon.viewBox || '0 0 24 24', paths: icon.paths };

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${width}px`}
        height={`${height}px`}
        viewBox={config.viewBox}
      >
        {config.paths.map((path, i) => {
          // eslint-disable-next-line react/no-array-index-key
          return <path key={i} style={{ fill: color }} d={path} />;
        })}
      </svg>
    );
  }
}

// prettier-ignore
export const ICONS = {
  // tool for SVG optimization : https://jakearchibald.github.io/svgomg/
  // default viewbox is 0 0 24 24

  // https://materialdesignicons.com/icon/chevron-down
  CHEVRON_DOWN: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',

  // https://materialdesignicons.com/icon/chevron-up
  CHEVRON_UP: 'M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z',

  // https://materialdesignicons.com/icon/close
  CLOSE: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',

  // https://thenounproject.com/term/via-ferrata/378350/
  LOGO: {
    viewBox: '0 0 96 96',
    paths: [
      'M38.7 13.6v.4l.1 1.4a15.2 15.2 0 0 0 .5 3.3 5.9 5.9 0 0 0 3.5 4 8.5 8.5 0 0 0 6.5-.1 7.6 7.6 0 0 0 4-4.3 2.7 2.7 0 0 1 1.5-1.8 4 4 0 0 0 2.3-3.8 6.7 6.7 0 0 0-2-5c-2.3-2.7-5.6-3.2-8.4-3.4h-.2c-2.5.3-5.3.8-7.3 3.5l-.2.3c-1.6 2-1.6 2.4-.4 4.9a2 2 0 0 1 .1.6zm2.8 1.5l1.1.3a10.5 10.5 0 0 1 1.9.7 11 11 0 0 0 4.3 1l1.8.1h.3l-.2.2a6.4 6.4 0 0 1-5 2.7 3.8 3.8 0 0 1-2.9-1 5.4 5.4 0 0 1-1.3-4zM43.8 64.9a3 3 0 0 0 .7.3 1.4 1.4 0 0 0 1.3-.8 1.5 1.5 0 0 0 0-1.2 50.4 50.4 0 0 0-3.7-5.8l-2-3a2 2 0 0 1-.2-1l4.3-24.2c0-.2 5 4.7 6.2 5.9a4.7 4.7 0 0 0 4 1.5l8.6-.9a4.3 4.3 0 0 0 1.9-.5 1.5 1.5 0 0 0 0-1.6 9.8 9.8 0 0 0-2.7-.5 18.4 18.4 0 0 0-6.4 0 4.4 4.4 0 0 1-4-1.4l-6.4-6.4a2.5 2.5 0 0 0-2.7-.7c-2 .5-9.9 2.2-10 2.1a3.4 3.4 0 0 1-1-1 20.4 20.4 0 0 0-4.3-4.8L26 19.6a3 3 0 0 0-1.8-.6 1.4 1.4 0 0 0-.7 1.5 3.6 3.6 0 0 0 .6 1l2 2.1a27.1 27.1 0 0 1 4.3 5 3 3 0 0 0 3.3 1.3l7.4-1.6-3 15-7.2-3.6c-1.2-.6-3.8-.4-4.6.7l-5.5 7.4a3.9 3.9 0 0 0-.7 1.8 1.3 1.3 0 0 0 .6 1.4 1.3 1.3 0 0 0 1.5-.3c.6-.4 6.8-8 6.9-8l7.7 4c1 .5 1 .5.9 1.2a76 76 0 0 1-.9 5.7 2.8 2.8 0 0 0 .5 2.2c1.4 1.8 6.3 9 6.6 9.1z',
      'M35.3 59.8a24.6 24.6 0 0 0-3.5 0c-3.5.6-11-.3-11-.3a1.7 1.7 0 0 0-2.3 1.3 1.8 1.8 0 0 0 .2 1.3 2.2 2.2 0 0 0 1.5 1l5.2.4h.8s6.4-.5 8.4-.8A14.3 14.3 0 0 0 37 61a6 6 0 0 0-1.7-1.2zM70.5 73.6a12.3 12.3 0 0 0-2.8 0c-3.4.6-11-.3-11-.3a1.7 1.7 0 0 0-2.2 1.2 1.8 1.8 0 0 0 .2 1.4 2.2 2.2 0 0 0 1.5.9l5.2.4s7.2-.4 9.2-.7a14.3 14.3 0 0 0 2.4-1.7l-.8-.7a5.5 5.5 0 0 0-1.7-.5zM55.3 66.1s-11.8 1.1-15 .7a2.2 2.2 0 0 0-1.7.3 1.6 1.6 0 0 0-.6 1.1c0 1.4 4.8 2.2 6 2.2 1.9 0 3.8-.2 5.8-.4 2.2-.2 5.7-2.3 5.7-2.3zM27 54l-.3-1.6s-11.7 1-15 .6a2.2 2.2 0 0 0-1.7.3 1.6 1.6 0 0 0-.5 1.2 1.7 1.7 0 0 0 1.5 1.8l4.4.3 6-.3c2-.2 5.5-2.4 5.5-2.4zM20.1 19.2C12 13.2 3.1 0 3.1 0S.1-.6 0 1.9s14.7 18 14.7 18 13.7 5.3 5.4-.7zM94.5 38.3s-16.8 1.1-25.8-1.2 1 4 1 4 21.3 1.6 24 .2.8-3 .8-3z',
    ],
  },

  // https://materialdesignicons.com/icon/menu
  MENU: 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z',

  // https://materialdesignicons.com/icon/magnify-plus-outline
  MAGNIFY: 'M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z',

  // https://materialdesignicons.com/icon/map-marker
  MAP_MARKER: 'M12 11.5A2.5 2.5 0 0 1 9.5 9 2.5 2.5 0 0 1 12 6.5 2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z',

  // https://materialdesignicons.com/icon/page-first
  FIRST: 'M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z',

  // https://materialdesignicons.com/icon/chevron-left
  PREVIOUS: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z',

  // https://materialdesignicons.com/icon/chevron-right
  NEXT: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',

  // https://materialdesignicons.com/icon/page-last
  LAST: 'M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z',

  // https://materialdesignicons.com/icon/map-marker-radius
  LOCATE_ME: 'M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z',
};
