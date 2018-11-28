import { graphql } from 'gatsby';
import AdditionalInformation from '../components/detail/AdditionalInformation';
import Description from '../components/detail/Description';
import Difficulty from '../components/detail/Difficulty';
import Gallery from '../components/detail/Gallery';
import Layout from '../components/Layout';
import Location from '../components/detail/Location';
import PropTypes from 'prop-types';
import React from 'react';
import Section from '../components/Section';

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
            <Section name={viaFerrata.name}>
              <Description
                htmlDescription={
                  viaFerrata.description
                    ? viaFerrata.description.childMarkdownRemark.html
                    : undefined
                }
              />
            </Section>
            <Section name="Details">
              <AdditionalInformation />
            </Section>
            <Section name="Location">
              <Location
                address={{
                  street: '345 clos du lapin blanc',
                  city: 'Bonnaison',
                  postalCode: '73430',
                }}
                latitude={viaFerrata.location.lat}
                longitude={viaFerrata.location.lon}
                accessDescription="Monter vers les Orres. Dans une grande épingle, prendre la route à droite vers le parking Riou Sec. Monter et prendre le sentier forestier. Au panneau suivre le sentier à droite qui traverse le vallon jusqu’à la via."
              />
            </Section>
          </div>
          <aside className="col-md-4">
            <Section name="Difficulty">
              <Difficulty
                values={[
                  { name: 'F', percentage: 3 },
                  { name: 'PD', percentage: 0 },
                  { name: 'AD', percentage: 0 },
                  { name: 'D', percentage: 33 },
                  { name: 'TD', percentage: 57 },
                  { name: 'ED', percentage: 9 },
                ]}
              />
            </Section>
            <Section name="Images">
              <Gallery images={viaFerrata.images || undefined} />
            </Section>
          </aside>
        </div>
      </Layout>
    );
  }
}
