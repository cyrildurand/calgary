// @flow
import React from 'react';
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

type Props = {
  +data: {
    +contentfulPage: {
      +content: {
        +childMarkdownRemark: {
          +html: string,
        },
      },
    },
  },
};

export default class GenericContent extends React.Component<Props> {
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
