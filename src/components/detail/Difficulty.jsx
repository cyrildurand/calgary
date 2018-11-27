import PropTypes from 'prop-types';
import React from 'react';
import styles from './Difficulty.module.scss';

export default class Difficulty extends React.Component {
  static propTypes = {
    values: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };

  static defaultProps = {
    values: [],
  };

  render() {
    const { values } = this.props;
    return (
      <table className={`table ${styles.difficulty}`}>
        <tbody>
          {values.map(row => (
            <tr key={row.name}>
              <td style={{ width: '50px' }}>{row.name}</td>
              <td title={`${row.percentage}`} className="align-middle">
                <div
                  className={styles.progressBar}
                  role="progressbar"
                  style={{ width: `${row.percentage}%` }}
                  aria-valuenow={row.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
