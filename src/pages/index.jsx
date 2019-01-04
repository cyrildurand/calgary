import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import React from 'react';
import ViaCard from '../components/ViaCard';
import styles from './index.module.scss';

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
        <section className={styles.index}>
          <h1>Via ferratas !</h1>
          <ul className={styles.list}>
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
