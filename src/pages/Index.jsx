// @flow
import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './Index.module.scss';

export default class Index extends React.Component<{}> {
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
