// @flow
import { Link, StaticQuery, graphql } from 'gatsby';
import React from 'react';
import Icon, { ICONS } from '../common/Icon';
import MenuItem from './MenuItem';
import styles from './Header.module.scss';

type State = {
  +headerScrolled: boolean,
  +mobileNavActive: boolean,
};
export default class Header extends React.Component<{}, State> {
  state = {
    headerScrolled: false,
    mobileNavActive: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.windowScroll);
    window.addEventListener('gatsby::routeUpdate', this.routeUpdate);
  }
  componentDidUpdate() {
    if (!document.body) {
      return;
    }
    if (this.state.mobileNavActive) {
      document.body.classList.add(styles.mobileNavActive);
    } else {
      document.body.classList.remove(styles.mobileNavActive);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.windowScroll);
    window.removeEventListener('gatsby::routeUpdate', this.routeUpdate);
  }

  routeUpdate = () => {
    this.setState({ mobileNavActive: false });
  };
  windowScroll = () => {
    if (window.pageYOffset > 100) {
      this.setState({ headerScrolled: true });
    } else {
      this.setState({ headerScrolled: false });
    }
  };

  mobileNavToggleClick() {
    this.setState(previousState => ({
      mobileNavActive: !previousState.mobileNavActive,
    }));
  }

  render() {
    return (
      <header
        id="header"
        className={`${styles.header} ${this.state.headerScrolled ? styles.headerScrolled : ''}`}
      >
        <div className={styles.banner}>
          <div className={`container-fluid ${styles.mainMenu}`}>
            <div className="row align-items-center justify-content-between">
              <Link to="/" className={styles.logo}>
                <Icon icon={ICONS.LOGO} />
                <span>Calgary</span>
              </Link>
              <StaticQuery
                query={graphql`
                  query {
                    root: contentfulNavigationItem(
                      title: { eq: "menu" }
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
                  <nav className={styles.navMenuContainer}>
                    <ul>
                      {data.root.menuItems.map(menuItem => (
                        <MenuItem key={menuItem.id} {...menuItem} />
                      ))}
                    </ul>
                  </nav>
                )}
              />
              <button
                type="button"
                className={styles.mobileNavToggle}
                onClick={() => this.mobileNavToggleClick()}
              >
                {this.state.mobileNavActive ? (
                  <Icon icon={ICONS.CLOSE} />
                ) : (
                  <Icon icon={ICONS.MENU} />
                )}
              </button>
            </div>
            <div
              className={styles.mobileBodyOverlay}
              onClick={() => this.setState({ mobileNavActive: false })}
              role="presentation"
            />
          </div>
        </div>
      </header>
    );
  }
}
