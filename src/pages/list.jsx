import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import React from 'react';
import ViaCard from '../components/ViaCard';
import styles from './list.module.scss';

export const query = graphql`
  query ListQuery {
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

export default class List extends React.Component {
  render() {
    const vias = this.props.data.allContentfulViaFerrata.edges;
    return (
      <Layout>
        <section className={styles.list}>
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
