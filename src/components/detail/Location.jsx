import '../../../node_modules/leaflet/dist/leaflet.css';
import 'react-leaflet-fullscreen-control';
import * as L from 'leaflet';
import { LayersControl, Map, Marker, TileLayer } from 'react-leaflet';
import Icon, { ICONS } from '../common/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default class Location extends React.Component {
  static propTypes = {
    address: PropTypes.shape({
      street: PropTypes.string,
      postalCode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
    accessDescription: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  };

  render() {
    const { address, accessDescription, latitude, longitude } = this.props;

    const position = [latitude, longitude];
    return (
      <>
        <div>
          <h4>Addresse</h4>
          <div className="container">
            <address className="row">
              <p
                translate="no"
                className="col"
                itemProp="address"
                itemScope
                itemType="http://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">{address.street}</span>
                <br />
                <span itemProp="postalCode">{address.postalCode}</span>&nbsp;
                <span itemProp="addressLocality">{address.city}</span>
              </p>
              <p
                className="col"
                itemProp="geo"
                itemScope
                itemType="http://schema.org/GeoCoordinates"
              >
                Latitude: <span itemProp="latitude">{latitude}</span>
                <br /> Longitude: <span itemProp="longitude">{longitude}</span>
              </p>
              <p>
                <a
                  href={`https://maps.google.com?saddr=Current+Location&daddr=${latitude},${longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go !
                </a>
              </p>
            </address>
          </div>
        </div>
        <div>
          <h4>Accès</h4>
          <div>
            <p>{accessDescription}</p>
          </div>
        </div>

        <div>
          {typeof window !== 'undefined' && (
            <>
              <Map center={position} zoom={13} style={{ height: 400 }} fullscreenControl>
                <LayersControl position="topright">
                  <LayersControl.BaseLayer checked name="OpenTopoMap">
                    <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
                  </LayersControl.BaseLayer>
                  <LayersControl.BaseLayer name="OpenStreetMap">
                    <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                  </LayersControl.BaseLayer>
                </LayersControl>
                <Marker
                  position={position}
                  icon={
                    new L.Icon({
                      iconUrl:
                        'data:image/svg+xml;base64,' +
                        btoa(
                          ReactDOMServer.renderToString(
                            <Icon color="#F0F" icon={ICONS.MAP_MARKER} />
                          )
                        ),
                      iconAnchor: [19, 19],
                    })
                  }
                />
              </Map>
            </>
          )}
        </div>
      </>
    );
  }
}
