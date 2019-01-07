import PropTypes from 'prop-types';
import React from 'react';

export default class Description extends React.Component {
  static propTypes = {
    htmlDescription: PropTypes.string.isRequired,
  };

  render() {
    const { htmlDescription } = this.props;
    return (
      <>
        {htmlDescription ? (
          <>
            <p
              dangerouslySetInnerHTML={{
                __html: htmlDescription,
              }}
            />
          </>
        ) : (
          <p>No description yet</p>
        )}
      </>
    );
  }
}
