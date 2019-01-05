import { Link } from 'gatsby';
import Layout from '../components/Layout';
import React from 'react';
import styles from './index.module.scss';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className={styles.index}>
          <h1>Via ferratas !</h1>
          <p>Welcome !</p>
          <Link to="/list">List of all via ferratas</Link>
        </section>
      </Layout>
    );
  }
}
