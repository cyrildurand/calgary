// @flow
import React from 'react';
import type { Node } from 'react';
import styles from './Section.module.scss';

type Props = {
  +name: string | Node,
  +children: Node,
};
export default class Section extends React.Component<Props> {
  render() {
    const { children, name } = this.props;
    return (
      <section className={styles.sectionTopBorder}>
        <h2 className="d-flex mb-3">{name}</h2>
        <div className="mb-3">{children}</div>
      </section>
    );
  }
}
