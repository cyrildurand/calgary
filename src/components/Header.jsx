import { Link } from 'gatsby';
import Icon, { ICONS } from '../components/Icon';
import MenuItem from './MenuItem';
import React from 'react';
import styles from './Header.module.scss';

export default class Header extends React.Component {
  menuItems = [
    { id: '0.A', value: 'Home', path: '/' },
    { id: '0.B', value: 'About', path: '/' },
    { id: '0.C', value: 'Packages', path: '/' },
    {
      id: '0.D',
      value: 'Pages',
      path: '/',
      menuItems: [
        { id: '1.A', value: 'Level 1.A', path: '/' },
        { id: '1.B', value: 'Level 1.B', path: '/' },
        {
          id: '1.C',
          value: 'Level 1.C',
          path: '/',
          menuItems: [
            { id: '2.A', value: 'Level 2.A', path: '/' },
            { id: '2.B', value: 'Level 2.B', path: '/' },
            { id: '2.C', value: 'Level 2.C', path: '/' },
          ],
        },
        { id: '1.D', value: 'Level 1.D', path: '/' },
      ],
    },
    { id: '0.E', value: 'Contact', path: '/' },
  ];

  constructor() {
    super();
    this.windowScroll = this.windowScroll.bind(this);

    this.state = {
      headerScrolled: false,
      mobileNavActive: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.windowScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.windowScroll);
  }

  componentDidUpdate() {
    if (this.state.mobileNavActive) {
      document.body.classList.add(styles.mobileNavActive);
    } else {
      document.body.classList.remove(styles.mobileNavActive);
    }
  }

  mobileNavToggleClick(e) {
    this.setState(previousState => ({
      mobileNavActive: !previousState.mobileNavActive,
    }));
  }

  windowScroll(e) {
    if (window.pageYOffset > 100) {
      this.setState({ headerScrolled: true });
    } else {
      this.setState({ headerScrolled: false });
    }
  }

  render() {
    return (
      <header
        id="header"
        className={`${styles.header} ${this.state.headerScrolled ? styles.headerScrolled : ''}`}
      >
        <div className={styles.banner}>
          <div className={`container ${styles.mainMenu}`}>
            <div className="row align-items-center justify-content-between">
              <Link to="/" className={styles.logo}>
                <Icon icon={ICONS.LOGO} />
                <span>Calgary</span>
              </Link>
              <nav className={styles.navMenuContainer}>
                <ul>
                  {this.menuItems.map(menuItem => (
                    <MenuItem key={menuItem.id} {...menuItem} />
                  ))}
                </ul>
              </nav>
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
            />
          </div>
        </div>
      </header>
    );
  }
}
