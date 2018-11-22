import { Link } from '@reach/router';
import React from 'react';
import styles from './Footer.module.scss';

export default class Header extends React.Component {
  render() {
    return (
      <footer className={styles.footerArea}>
        <div className="container">
          <div className="row d-block">
            <ul className={styles.footerMenu}>
              <li>
                <Link to="#/pages/about">About</Link>
              </li>
              <li>
                <Link to="#/Forum">Forum</Link>
              </li>
              <li>
                <Link to="#/pages/team">Team</Link>
              </li>
              <li>
                <Link to="#/pages/legal-notice">Privacy policy</Link>
              </li>
              <li>
                <Link to="#/pages/legal-notice">Legal notice</Link>
              </li>
              <li>
                <Link to="#/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="row d-block">Copyright © 2000-2018 ViaFerrata-FR</div>
        </div>
      </footer>
    );
  }
}
