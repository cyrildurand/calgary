import PropTypes from 'prop-types';
import React from 'react';
import styles from './Section.module.scss';

export default class Section extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, name } = this.props;
    return (
      <section className={styles.sectionTopBorder}>
        <h3 className="d-flex mb-3">{name}</h3>
        <div className="mb-3">{children}</div>
      </section>
    );
  }
}
