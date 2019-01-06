import { Link } from 'gatsby';
import Icon, { ICONS } from '../components/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Header.module.scss';

export default class MenuItem extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
    menuItems: PropTypes.arrayOf(PropTypes.shape(MenuItem.propTypes)),
  };

  hasChild() {
    return Array.isArray(this.props.menuItems) && this.props.menuItems.length > 0;
  }
  render() {
    const { title, path, menuItems } = this.props;

    return (
      <li
        onMouseEnter={() => this.setState({ active: true })}
        onMouseLeave={() => this.setState({ active: false })}
        className={this.state.active ? styles.navActive : null}
      >
        {!this.hasChild() && <Link to={`${path}`}>{title}</Link>}

        {/* We use CSS to hide children. We can't rely on mouseover and state here because we want the html to be generated by gatsby for SEO purpose */}
        {this.hasChild() && (
          <>
            <span
              onTouchStart={() =>
                this.setState(previousState => ({ active: !previousState.active }))
              }
            >
              {title}
              <Icon icon={this.state.active ? ICONS.CHEVRON_UP : ICONS.CHEVRON_DOWN} />
            </span>
            <div>
              <ul>
                {menuItems.map(menuItem => (
                  <MenuItem key={menuItem.id} {...menuItem} />
                ))}
              </ul>
            </div>
          </>
        )}
      </li>
    );
  }
}
