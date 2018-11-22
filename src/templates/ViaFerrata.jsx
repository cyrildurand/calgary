import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SampleContent from '../components/SampleContent';
import PropTypes from 'prop-types';

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
        <SampleContent />
      </Layout>
    );
  }
}
