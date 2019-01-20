// @flow
import { graphql } from 'gatsby';
import React from 'react';
import AdditionalInformation from '../components/detail/AdditionalInformation';
import Description from '../components/detail/Description';
import Difficulty from '../components/detail/Difficulty';
import Gallery from '../components/detail/Gallery';
import Layout from '../components/layout/Layout';
import Location from '../components/detail/Location';
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

type Props = {
  +data: {
    +contentfulViaFerrata: {
      +name: string,
      +description: {
        +childMarkdownRemark: {
          +html: string,
        },
      },
      +location: {
        +lat: number,
        +lon: number,
      },
      +images: Array<{
        +title: string,
        +description?: string,
        +original: { +src: string, +aspectRatio: number },
        +thumbnail: { +src: string, +aspectRatio: number },
      }>,
    },
  },
};

export default class Detail extends React.Component<Props> {
  render() {
    const viaFerrata = this.props.data.contentfulViaFerrata;

    return (
      <Layout>
        <div itemScope itemType="http://schema.org/Place">
          <h1 itemProp="name">{viaFerrata.name}</h1>
          <div className="row">
            <main className="col-md-8 col-xl-9">
              {viaFerrata.description && (
                <Section name="Description">
                  <Description htmlDescription={viaFerrata.description.childMarkdownRemark.html} />
                </Section>
              )}
              <Section name="Details">
                <AdditionalInformation
                  difficulty="F"
                  duration={{
                    roundTrip: '45min',
                    endToParking: '1h',
                    climbing: '1h',
                    parkingToStart: '1h',
                  }}
                  price={0}
                  altitude={{
                    start: 1200,
                    end: 1600,
                  }}
                  year={2008}
                  contact={{
                    name: 'Maison du Tourisme du Champsaur & Valgaudemar',
                    tel: '04 92 49 09 35',
                    website:
                      'http://www.champsaur-valgaudemar.com/fr/ete/loisirs-activites/canyoning-via-ferrata.html',
                  }}
                />
              </Section>
              <Section name="Accès">
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
            </main>
            <aside className="col-md-4 col-xl-3">
              <Section name="Images">
                <Gallery images={viaFerrata.images || []} />
              </Section>
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
            </aside>
          </div>
        </div>
      </Layout>
    );
  }
}
