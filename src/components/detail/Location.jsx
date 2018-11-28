import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
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
          <h4>Addresse</h4>
          <div className="container">
            <address className="row">
              <p translate="no" className="col"  itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <span itemProp="streetAddress">{address.street}</span>
                <br />
                <span itemProp="postalCode">{address.postalCode}</span>&nbsp;<span itemProp="addressLocality">{address.city}</span>
              </p>
              <p className="col" itemProp="geo" itemScope itemType="http://schema.org/GeoCoordinates">
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
