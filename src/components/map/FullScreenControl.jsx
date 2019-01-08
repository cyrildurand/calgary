import L from 'leaflet';
import 'leaflet-fullscreen';
import { withLeaflet, MapControl } from 'react-leaflet';
import '../../../node_modules/leaflet-fullscreen/dist/leaflet.fullscreen.css';

class FullScreenControl extends MapControl {
  createLeafletElement(props) {
    const {
      leaflet: { map },
      ...options
    } = props;

    const lc = L.control.fullscreen(options).addTo(map);
    return lc;
  }
}

export default withLeaflet(FullScreenControl);
