import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import React from 'react';

export const query = graphql`
  query ViaFerrata($slug: String!) {
    contentfulViaFerrata(slug: { eq: $slug }) {
      name
    }
  }
`;
export default class ViaFerrata extends React.Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
  };
  render() {
    const viaFerrata = this.props.data.contentfulViaFerrata;
    return (
      <Layout>
        <h1>{viaFerrata.name}</h1>
        
      </Layout>
    );
  }
}
