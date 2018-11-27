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
    address: PropTypes.string.isRequired,
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
          <div>
            <p>{address}</p>
            <p>
              Latitude: {latitude} Longitude: {longitude}
            </p>
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
