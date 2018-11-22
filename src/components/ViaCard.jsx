import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

export default class ViaCard extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  };
  render() {
    const { name, slug } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <Link to={`/via-${slug}/`}>
          <p>Read more ...</p>
        </Link>
      </div>
    );
  }
}
