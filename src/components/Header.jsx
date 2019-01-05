import { Link } from 'gatsby';
import Icon, { ICONS } from '../components/Icon';
import MenuItem from './MenuItem';
import React from 'react';
import styles from './Header.module.scss';

export default class Header extends React.Component {
  menuItems = [
    { id: 'home', text: 'Home', path: '/' },
    { id: 'list', text: 'List', path: '/list' },
    { id: 'page3', text: 'Help', path: '/help' },
    {
      id: 'pages',
      text: 'Pages',
      menuItems: [
        { id: '1A', text: 'Level 1.A', path: '/page1A' },
        { id: '1B', text: 'Level 1.B', path: '/page1B' },
        {
          id: '1C',
          text: 'Level 1.C',
          menuItems: [
            { id: '2A', text: 'Level 2.A', path: '/page2A' },
            { id: '2B', text: 'Level 2.B', path: '/page2B' },
            { id: '2C', text: 'Level 2.C', path: '/page2C' },
          ],
        },
        { id: '1D', text: 'Level 1.D', path: '/page1D' },
      ],
    },
    { id: 'contact', text: 'Contact', path: '/contact' },
  ];

  constructor() {
    super();
    this.windowScroll = this.windowScroll.bind(this);
    this.listenerHandler = this.listenerHandler.bind(this);

    this.state = {
      headerScrolled: false,
      mobileNavActive: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.windowScroll);
    window.addEventListener('gatsby::routeUpdate', this.listenerHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.windowScroll);
    window.removeEventListener('gatsby::routeUpdate', this.listenerHandler);
  }
  componentDidUpdate(prevProps) {
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
  listenerHandler() {
    this.setState({ mobileNavActive: false });
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
