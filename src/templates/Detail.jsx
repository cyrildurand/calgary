import './Detail.scss';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { graphql } from 'gatsby';
import Gallery from '../components/detail/Gallery';
//import Img from 'gatsby-image';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import React from 'react';
import Section from '../components/Section';
import settings from '../settings';

export const query = graphql`
  query Detail($slug: String!) {
    contentfulViaFerrata(slug: { eq: $slug }) {
      name
      description: childContentfulViaFerrataDescriptionTextNode {
        childMarkdownRemark {
          html
        }
      }
      location {
        lon
        lat
      }
      images {
        title
        description
        original: fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        thumbnail: fluid(maxWidth: 280) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.latitude, lng: props.longitude }}>
      {props.isMarkerShown && <Marker position={{ lat: props.latitude, lng: props.longitude }} />}
    </GoogleMap>
  ))
);

export default class Detail extends React.Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
  };
  constructor() {
    super();
    this.state = { showGoogleMaps: true };
  }
  render() {
    const viaFerrata = this.props.data.contentfulViaFerrata;

    return (
      <Layout>
        <div className="row">
          <div className="col-md-8">
            <section className="section-top-border">
              <h2 className="mb-30">{viaFerrata.name}</h2>
              <div>
                {viaFerrata.description ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: viaFerrata.description.childMarkdownRemark.html,
                    }}
                  />
                ) : (
                  <p>No description yet</p>
                )}
              </div>
            </section>
            <section>
              <h3 className="mb-30">Details</h3>

              <div className="container">
                <div className="row">
                  <div className="col">ALTITUDE DE DÉPART</div>
                  <div className="col">1650 mètres</div>
                  <div className="col">DIFFICULTÉ :</div>
                  <div className="col">TD</div>
                </div>
                <div className="row">
                  <div className="col">ALTITUDE D ARRIVÉE</div>
                  <div className="col">1850 mètres</div>
                  <div className="col">LONGUEUR :</div>
                  <div className="col"> 800 mètres</div>
                </div>
                <div className="row">
                  <div className="col">DÉNIVELÉ : </div>
                  <div className="col">200 mètres </div>
                  <div className="col">PRIX :</div>
                  <div className="col">Gratuit</div>
                </div>
              </div>

              <div>
                <h4>TYPE DE VIA FERRATA</h4>
                <p>Année 1998 : Beaucoup de barreaux - Peu de contact rocher</p>
              </div>
              <div>
                <h4>HORAIRES</h4>
                <p>Aller / Retour : 2h15</p>
              </div>
              <div>
                <h4>Plus d infos</h4>
                <p>Office du Tourisme des Orres - Tel : 04 92 44 01 61 - http://www.lesorres.com</p>
              </div>
            </section>
            <section className="section-top-border">
              <h3 className="mb-30">Location</h3>
              <div>
                <h4>Addresse</h4>
                <div>
                  <p>La cascade 05154 Les orres</p>
                  <p>Latitude: 44.5167 Longitude: 6.55</p>
                </div>
              </div>
              <div>
                <h4>Accès</h4>
                <div>
                  <p>
                    Monter vers les Orres. Dans une grande épingle, prendre la route à droite vers
                    le parking Riou Sec. Monter et prendre le sentier forestier. Au panneau suivre
                    le sentier à droite qui traverse le vallon jusqu’à la via.
                  </p>
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
                  latitude={viaFerrata.location.lat}
                  longitude={viaFerrata.location.lon}
                />
              </div>
            </section>
          </div>
          <aside className="col-md-4">
            <section className="section-top-border">
              <h3 className="d-flex mb-3">Difficulty</h3>
              <table className="table difficulty">
                <tbody>
                  {[
                    { name: 'F', percentage: 3 },
                    { name: 'PD', percentage: 0 },
                    { name: 'AD', percentage: 0 },
                    { name: 'D', percentage: 33 },
                    { name: 'TD', percentage: 57 },
                    { name: 'ED', percentage: 9 },
                  ].map(row => (
                    <tr key={row.name}>
                      <td style={{ width: '50px' }}>{row.name}</td>
                      <td title={row.percentage} className="align-middle">
                        <div className="percentage">
                          <div className="progress">
                            <div
                              className="progress-bar color-8"
                              role="progressbar"
                              style={{ width: `${row.percentage}%` }}
                              aria-valuenow={row.percentage}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            <Section name="Images">
              <Gallery images={viaFerrata.images || undefined} />
            </Section>
          </aside>
        </div>
      </Layout>
    );
  }
}
