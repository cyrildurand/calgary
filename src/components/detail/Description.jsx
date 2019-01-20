// @flow
import React from 'react';

type Props = {
  +htmlDescription: string,
};

export default class Description extends React.Component<Props> {
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
