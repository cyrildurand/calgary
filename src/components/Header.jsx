import { Link } from 'gatsby';
import Icon, { ICONS } from '../components/Icon';
import MenuItem from './MenuItem';
import React from 'react';
import styles from './Header.module.scss';

export default class Header extends React.Component {
  menuItems = [
    { id: '0.A', text: 'Home', path: '/' },
    { id: '0.B', text: 'About', path: '/' },
    { id: '0.C', text: 'Packages', path: '/' },
    {
      id: '0.D',
      text: 'Pages',
      path: '/',
      menuItems: [
        { id: '1.A', text: 'Level 1.A', path: '/' },
        { id: '1.B', text: 'Level 1.B', path: '/' },
        {
          id: '1.C',
          text: 'Level 1.C',
          path: '/',
          menuItems: [
            { id: '2.A', text: 'Level 2.A', path: '/' },
            { id: '2.B', text: 'Level 2.B', path: '/' },
            { id: '2.C', text: 'Level 2.C', path: '/' },
          ],
        },
        { id: '1.D', text: 'Level 1.D', path: '/' },
      ],
    },
    { id: '0.E', text: 'Contact', path: '/' },
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

  componentDidUpdate(prevProps) {
    if (this.state.mobileNavActive) {
      document.body.classList.add(styles.mobileNavActive);
    } else {
      document.body.classList.remove(styles.mobileNavActive);
    }

    if (prevProps.location !== this.props.location) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ mobileNavActive: false });
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
          <div className={`container-fluid ${styles.mainMenu}`}>
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
