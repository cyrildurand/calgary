// @flow
import L from 'leaflet';
import 'leaflet-fullscreen';
import { withLeaflet, MapControl } from 'react-leaflet';
import type { MapControlProps } from 'react-leaflet';
import '../../../node_modules/leaflet-fullscreen/dist/leaflet.fullscreen.css';

type Props = MapControlProps & {
  +leaflet: {
    +map: {},
  },
  +options?: {},
};

class FullScreenControl extends MapControl<{}, Props> {
  createLeafletElement(props: Props) {
    const {
      leaflet: { map },
      ...options
    } = props;

    const lc = L.control.fullscreen(options).addTo(map);
    return lc;
  }
}

export default withLeaflet(FullScreenControl);
