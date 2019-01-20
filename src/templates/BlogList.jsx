// @flow
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout/Layout';
import Pagination from '../components/common/Pagination';
import styles from './BlogList.module.scss';

export const query = graphql`
  query NewsQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      filter: { node_locale: { eq: "fr" } }
      sort: { fields: creationDate, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          content {
            childMarkdownRemark {
              html
            }
          }
          creationDate(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
`;

type Props = {
  +pageContext: {
    +currentPageIndex: number,
    +pageCount: number,
  },
  +data: {
    +allContentfulBlogPost: {
      +edges: Array<{
        +node: {
          +id: string,
          +title: string,
          +content: {
            +childMarkdownRemark: {
              +html: string,
            },
          },
          +creationDate: string,
        },
      }>,
    },
  },
};
export default class BlogList extends React.Component<Props> {
  render() {
    const { currentPageIndex, pageCount } = this.props.pageContext;
    const blogPosts = this.props.data.allContentfulBlogPost.edges;

    return (
      <Layout>
        <section className={styles.blog}>
          <ul className={styles.list}>
            {blogPosts.map(({ node: blogPost }) => (
              <li key={blogPost.id}>
                <h2>
                  [{blogPost.creationDate}] {blogPost.title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogPost.content.childMarkdownRemark.html,
                  }}
                />
              </li>
            ))}
          </ul>

          <Pagination
            currentPageIndex={currentPageIndex}
            pageCount={pageCount}
            pageLinkBuilder={pageIndex => `/blog/${pageIndex === 0 ? '' : pageIndex + 1}`}
          />
        </section>
      </Layout>
    );
  }
}
