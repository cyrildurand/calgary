import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import settings from '../../settings';

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.latitude, lng: props.longitude }}>
      {props.isMarkerShown && <Marker position={{ lat: props.latitude, lng: props.longitude }} />}
    </GoogleMap>
  ))
);

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
    return (
      <>
        <div>
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify({
                '@context': 'http://schema.org/name',
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: address.city,
                  postalCode: address.postalCode,
                  streetAddress: address.street,
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: { latitude },
                  longitude: { longitude },
                },
              })}
            </script>
          </Helmet>
          <h4>Addresse</h4>
          <div className="container">
            <address className="row">
              <p translate="no" className="col">
                <span>{address.street}</span>
                <br />
                <span>{address.postalCode}</span>&nbsp;<span>{address.city}</span>
              </p>
              <p className="col">
                Latitude: <span>{latitude}</span>
                <br /> Longitude: <span>{longitude}</span>
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
          <MyMapComponent
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
              settings.GOOGLE_MAPS_API_AKY
            }&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            latitude={latitude}
            longitude={longitude}
          />
        </div>
      </>
    );
  }
}
