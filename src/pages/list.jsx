import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './List.module.scss';

export const query = graphql`
  query {
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
  static propTypes = {
    data: PropTypes.shape({
      allContentfulViaFerrata: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              id: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
            }),
          })
        ).isRequired,
      }).isRequired,
    }).isRequired,
  };

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
