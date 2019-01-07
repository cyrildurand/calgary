import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import Pagination from '../components/common/Pagination';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './blog-list.module.scss';

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

export default class BlogList extends React.Component {
  static propTypes = {
    pageContext: PropTypes.shape({
      currentPageIndex: PropTypes.number.isRequired,
      pageCount: PropTypes.number.isRequired,
    }),
    data: PropTypes.shape({
      allContentfulBlogPost: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              id: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              content: PropTypes.shape({
                childMarkdownRemark: PropTypes.shape({
                  html: PropTypes.string.isRequired,
                }),
              }),
              creationDate: PropTypes.string.isRequired,
            }),
          })
        ),
      }),
    }),
  };

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
