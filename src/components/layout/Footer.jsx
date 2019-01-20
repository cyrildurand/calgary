// @flow
import { Link, StaticQuery, graphql } from 'gatsby';
import React from 'react';
import styles from './Footer.module.scss';

export default class Footer extends React.Component<{}> {
  render() {
    return (
      <footer className={styles.footerArea}>
        <div className="container">
          <div className="row d-block">
            <StaticQuery
              query={graphql`
                query {
                  root: contentfulNavigationItem(
                    title: { eq: "footer" }
                    node_locale: { eq: "fr" }
                  ) {
                    menuItems: contentfulchildren {
                      id
                      title
                      path
                      menuItems: contentfulchildren {
                        id
                        title
                        path
                        menuItems: contentfulchildren {
                          id
                          title
                          path
                        }
                      }
                    }
                  }
                }
              `}
              render={data => (
                <ul className={styles.footerMenu}>
                  {data.root.menuItems.map(menuItem => (
                    <li key={menuItem.id}>
                      <Link to={menuItem.path}>{menuItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            />
          </div>
          <div className="row d-block">Copyright © 2000-2019 Calgary</div>
        </div>
      </footer>
    );
  }
}
