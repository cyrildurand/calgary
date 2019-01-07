import { graphql } from 'gatsby';
import AdditionalInformation from '../components/detail/AdditionalInformation';
import Description from '../components/detail/Description';
import Difficulty from '../components/detail/Difficulty';
import Gallery from '../components/detail/Gallery';
import Layout from '../components/layout/Layout';
import Location from '../components/detail/Location';
import PropTypes from 'prop-types';
import React from 'react';
import Section from '../components/common/Section';

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
        <div className="row" itemScope itemType="http://schema.org/Place">
          <div className="col-md-8">
            <Section name={<span itemProp="name">{viaFerrata.name}</span>}>
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
                  { name: 'F', value: 7 },
                  { name: 'PD', value: 13 },
                  { name: 'AD', value: 88 },
                  { name: 'D', value: 9 },
                  { name: 'TD', value: 1 },
                  { name: 'ED', value: 0 },
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
