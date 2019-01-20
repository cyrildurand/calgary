// @flow
import '../../styles/main.scss';
import Helmet from 'react-helmet';
import React from 'react';
import type { Node } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.scss';

type Props = {
  +children: Node,
  +containerStyle?: {},
};

export default class Layout extends React.Component<Props> {
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
        <div className={styles.layout}>
          <Header />
          <div className={`container-fluid ${styles.layoutBody}`} style={containerStyle}>
            {children}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
