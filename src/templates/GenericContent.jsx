import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';

export const query = graphql`
  query GenericContent($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      content: childContentfulPageContentTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default class GenericContent extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      contentfulPage: PropTypes.shape({
        content: PropTypes.shape({
          childMarkdownRemark: PropTypes.shape({
            html: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };
  render() {
    const {
      contentfulPage: {
        content: {
          childMarkdownRemark: { html: htmlDescription },
        },
      },
    } = this.props.data;

    return (
      <Layout>
        <div
          dangerouslySetInnerHTML={{
            __html: htmlDescription,
          }}
        />
      </Layout>
    );
  }
}
