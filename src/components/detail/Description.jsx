import PropTypes from 'prop-types';
import React from 'react';

export default class Description extends React.Component {
  static propTypes = {
    htmlDescription: PropTypes.string,
  };

  static defaultProps = {
    htmlDescription: '<p>No description yet</p>',
  };

  render() {
    const { htmlDescription } = this.props;
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: htmlDescription,
        }}
      />
    );
  }
}
