// inspired from https://github.com/fullhdpixel/react-leaflet-locate-control
// @flow
import L from 'leaflet';
import 'leaflet.locatecontrol';
import { withLeaflet, MapControl } from 'react-leaflet';
import type { MapControlProps } from 'react-leaflet';
import type { Node } from 'react';
import ReactDOMServer from 'react-dom/server';

type Props = MapControlProps & {
  +leaflet: {
    +map: {},
  },
  +children?: Node,
  createButtonCallback?: (HTMLElement, MapControlProps) => { link: HTMLElement, icon: {} },
};

class LocateControl extends MapControl<{}, Props> {
  createLeafletElement(props: Props) {
    let {
      leaflet: { map },
      children,
      createButtonCallback,
      ...options
    } = props;

    if (children !== undefined && createButtonCallback === undefined) {
      createButtonCallback = (container, options) => {
        let link = L.DomUtil.create('a', 'leaflet-bar-part leaflet-bar-part-single', container);
        link.role = 'button';
        link.href = '#';
        link.title = options.strings.title;
        link.innerHTML = ReactDOMServer.renderToString(children);
        return { link, icon: link.firstChild };
      };
    }

    options = { createButtonCallback, ...options };
    const lc = L.control.locate(options).addTo(map);
    return lc;
  }
}

export default withLeaflet(LocateControl);
