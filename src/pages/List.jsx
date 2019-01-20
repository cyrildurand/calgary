// @flow
import { Link, graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './List.module.scss';

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

type Props = {
  +data: {
    allContentfulViaFerrata: {
      +edges: Array<{
        +node: {
          +id: string,
          +name: string,
          +slug: string,
        },
      }>,
    },
  },
};

export default class List extends React.Component<Props> {
  render() {
    const vias = this.props.data.allContentfulViaFerrata.edges;
    return (
      <Layout>
        <section className={styles.list}>
          <h1>Via ferratas !</h1>
          <ul className={styles.list}>
            {vias.map(({ node: via }) => (
              <li key={via.id}>
                <div className={styles.card}>
                  <h3>{via.name}</h3>
                  <Link to={`/via-${via.slug}/`}>Read more ... </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    );
  }
}
