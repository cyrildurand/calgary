import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './ViaCard.module.scss';

export default class ViaCard extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  };
  render() {
    const { name, slug } = this.props;
    return (
      <div className={styles.card}>
        <h3>{name}</h3>
        <Link to={`/via-${slug}/`}>Read more ... </Link>
      </div>
    );
  }
}
