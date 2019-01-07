import Layout from '../components/layout/Layout';
import React from 'react';


export default class NotFound extends React.Component {
  render() {
    return (
      <Layout>
        <section className="container">
          <h1>Page not found</h1>
        </section>
      </Layout>
    );
  }
}
