import { Link } from 'gatsby';
import React from 'react';
import styles from './Header.module.scss';

export default class MenuItem extends React.Component {
  constructor() {
    super();
    this.hasChildMenuItemClick = this.hasChildMenuItemClick.bind(this);
    this.state = {
      active: false,
    };
  }

  hasChild() {
    return Array.isArray(this.props.menuItems) && this.props.menuItems.length > 0;
  }
  hasChildMenuItemClick(e) {
    e.preventDefault();
    this.setState(previousState => ({ active: !previousState.active }));
  }
  render() {
    if (!this.hasChild()) {
      return (
        <li>
          <Link to={`${this.props.path}#${this.props.id}`}>{this.props.value}</Link>
        </li>
      );
    } else {
      return (
        <li className={`${styles.menuHasChildren} ${this.state.active ? styles.navActive : null}`}>
          <Link to={`${this.props.path}#${this.props.id}`} onClick={this.hasChildMenuItemClick}>
            {this.props.value}
          </Link>
          <div>
            <ul>
              {this.props.menuItems.map(menuItem => (
                <MenuItem key={menuItem.id} {...menuItem} />
              ))}
            </ul>
          </div>
        </li>
      );
    }
  }
}
