import '../../styles/main.scss';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import stylePropType from 'react-style-proptype';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.scss';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    containerStyle: stylePropType,
  };

  static defaultProps = {
    containerStyle: {},
  };

  render() {
    const { children, containerStyle } = this.props;

    return (
      <>
        <Helmet>
          <title>Via Ferrata</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Helmet>
        <Header />
        <div className={`container-fluid ${styles.layout}`} style={containerStyle}>
          {children}
        </div>
        <Footer />
      </>
    );
  }
}
