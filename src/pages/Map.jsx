import * as L from 'leaflet';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, graphql } from 'gatsby';
import ReactDOMServer from 'react-dom/server';
import { LayersControl, Map, Marker, TileLayer, Popup, FeatureGroup } from 'react-leaflet';
import 'react-leaflet-fullscreen-control';
import Icon, { ICONS } from '../components/common/Icon';
import Layout from '../components/layout/Layout';
import styles from './Map.module.scss';
import '../../node_modules/leaflet/dist/leaflet.css';

export const query = graphql`
  query MapQuery {
    allContentfulViaFerrata {
      edges {
        node {
          id
          name
          slug
          location {
            longitude: lon
            latitude: lat
          }
        }
      }
    }
  }
`;

export default class MapPage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      allContentfulViaFerrata: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              id: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
              location: PropTypes.shape({
                latitude: PropTypes.number.isRequired,
                longitude: PropTypes.number.isRequired,
              }),
            }),
          })
        ).isRequired,
      }).isRequired,
    }).isRequired,
  };

  onFeatureGroupAdd = e => {
    this.map.leafletElement.fitBounds(e.target.getBounds().pad(0.5));
  };
  render() {
    const vias = this.props.data.allContentfulViaFerrata.edges;
    //center will be recomputed by onFeatureGroupAdd
    const position = { center: [47, 3], zoom: 5 };

    const headerHeight = 95;
    const footerHeight = 70;

    return (
      <div className={styles.map}>
        <Layout containerStyle={{ margin: 0, marginTop: headerHeight, padding: 0 }}>
          <div style={{ marginTop: 0 }}>
            {typeof window !== 'undefined' && (
              <>
                <Map
                  style={{ height: `calc(100vh - ${headerHeight + footerHeight}px)` }}
                  ref={c => (this.map = c)}
                  fullscreenControl
                  {...position}
                >
                  <LayersControl position="topright">
                    <LayersControl.BaseLayer checked name="OpenTopoMap">
                      <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="OpenStreetMap">
                      <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                    </LayersControl.BaseLayer>
                  </LayersControl>
                  <FeatureGroup onAdd={this.onFeatureGroupAdd}>
                    {vias.map(({ node: via }) => {
                      return (
                        <Marker
                          key={via.id}
                          position={[via.location.latitude, via.location.longitude]}
                          icon={
                            new L.Icon({
                              iconUrl:
                                'data:image/svg+xml;base64,' +
                                btoa(
                                  ReactDOMServer.renderToString(
                                    <Icon color="#F0F" icon={ICONS.MAP_MARKER} />
                                  )
                                ),
                              iconAnchor: [12, 24],
                            })
                          }
                        >
                          <Popup>
                            <span>
                              <Link to={`via-${via.slug}`}>{via.name}</Link>
                            </span>
                          </Popup>
                        </Marker>
                      );
                    })}
                  </FeatureGroup>
                </Map>
              </>
            )}
          </div>
        </Layout>
      </div>
    );
  }
}
