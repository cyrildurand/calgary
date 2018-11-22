import React from 'react';
import ViaCard from '../components/ViaCard';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const query = graphql`
  query IndexQuery {
    allContentfulViaFerrata {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;

export default class Index extends React.Component {
  render() {
    const vias = this.props.data.allContentfulViaFerrata.edges;
    return (
      <Layout>
        <section className="container">
          <h1>Via ferratas !</h1>
          <ul>
            {vias.map(({ node: via }) => (
              <li key={via.id}>
                <ViaCard {...via} />
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    );
  }
}
