// @flow
import * as L from 'leaflet';
import React from 'react';
import { Link, graphql } from 'gatsby';
import ReactDOMServer from 'react-dom/server';
import { LayersControl, Map, Marker, TileLayer, Popup, FeatureGroup } from 'react-leaflet';
import LocateControl from '../components/map/LocateControl';
import Icon, { ICONS } from '../components/common/Icon';
import Layout from '../components/layout/Layout';
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

type Props = {
  +data: {
    +allContentfulViaFerrata: {
      +edges: Array<{
        +node: {
          +id: string,
          +name: string,
          +slug: string,
          +location: {
            +latitude: number,
            +longitude: number,
          },
        },
      }>,
    },
  },
};
export default class MapPage extends React.Component<Props> {
  onFeatureGroupAdd = (e: { target: L.FeatureGroup }) => {
    if (this.map) {
      this.map.leafletElement.fitBounds(e.target.getBounds());
    }
  };

  map: ?Map;

  render() {
    const vias = this.props.data.allContentfulViaFerrata.edges;
    //center will be recomputed by onFeatureGroupAdd
    const position = { center: [47, 3], zoom: 5 };

    return (
      <Layout containerStyle={{ padding: 0, display: 'flex' }}>
        {typeof window !== 'undefined' && (
          <Map style={{ width: '100%' }} ref={c => (this.map = c)} {...position}>
            <LayersControl position="topright">
              <LayersControl.BaseLayer checked name="OpenTopoMap">
                <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="OpenStreetMap">
                <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
              </LayersControl.BaseLayer>
            </LayersControl>
            <LocateControl flyTo keepCurrentZoomLevel>
              <Icon color="#000" icon={ICONS.LOCATE_ME} />
            </LocateControl>
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
        )}
      </Layout>
    );
  }
}
