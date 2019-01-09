// inspired from https://github.com/fullhdpixel/react-leaflet-locate-control

import L from 'leaflet';
import 'leaflet.locatecontrol';
import { withLeaflet, MapControl } from 'react-leaflet';
import ReactDOMServer from 'react-dom/server';

class LocateControl extends MapControl {
  createLeafletElement(props) {
    const {
      leaflet: { map },
      children,
      ...options
    } = props;

    if (children !== undefined && options.createButtonCallback === undefined) {
      options.createButtonCallback = (container, options) => {
        let link = L.DomUtil.create('a', 'leaflet-bar-part leaflet-bar-part-single', container);
        link.role = 'button';
        link.href = '#';
        link.title = options.strings.title;
        link.innerHTML = ReactDOMServer.renderToString(children);
        return { link, icon: link.firstChild };
      };
    }

    const lc = L.control.locate(options).addTo(map);
    return lc;
  }
}

export default withLeaflet(LocateControl);
