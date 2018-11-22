import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import React from 'react';
import settings from '../settings';

export const query = graphql`
  query ViaFerrata($slug: String!) {
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
      mainImage {
        fluid(maxWidth: 1800) {
          base64
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      images {
        id
        fluid(maxWidth: 1800) {
          base64
          ...GatsbyContentfulFluid_withWebp_noBase64
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

export default class ViaFerrata extends React.Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
  };
  render() {
    const viaFerrata = this.props.data.contentfulViaFerrata;

    return (
      <Layout>
        <section className="section-top-border">
          <h3 className="mb-30">{viaFerrata.name}</h3>
          <div className="row">
            <div className="col-md-3">
              {viaFerrata.mainImage && (
                <Img fluid={viaFerrata.mainImage.fluid} className="img-fluid" />
              )}
            </div>
            <div className="col-md-9 mt-sm-20 left-align-p">
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
          </div>
        </section>

        <section className="section-top-border">
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
        </section>

        {viaFerrata.images && (
          <section className="section-top-border">
            <h3>Image Gallery</h3>
            <div className="row gallery-item">
              {viaFerrata.images.map(image => (
                <div key={image.id} className="col-md-4">
                  <Img fluid={image.fluid} className="img-gal" />
                  {/* <a href="img/elements/g1.jpg" className="img-gal">
              <div className="single-gallery-image" style="background: url(img/elements/g1.jpg);" />
            </a> */}
                </div>
              ))}
            </div>
          </section>
        )}
      </Layout>
    );
  }
}
