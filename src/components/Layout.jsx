import '../styles/main.scss';
import Footer from './Footer';
import Header from './Header';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  render() {
    const { children } = this.props;
    return (
      <>
        <Helmet>
          <title>Via Ferrata</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Header />
        <section>
          <div className="container">{children}</div>
        </section>
        <Footer />
      </>
    );
  }
}
