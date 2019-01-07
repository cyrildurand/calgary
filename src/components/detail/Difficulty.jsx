import { StaticQuery, graphql } from 'gatsby';
import Icon, { ICONS } from '../common/Icon';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Difficulty.module.scss';

Modal.setAppElement('#___gatsby');
Modal.defaultStyles.overlay.zIndex = 10000;
Modal.defaultStyles.content.maxHeight = '100vh';

export default class Difficulty extends React.Component {
  static propTypes = {
    values: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ),
  };

  static defaultProps = {
    values: [],
  };

  constructor(props) {
    super(props);
    this.state = { value: 'F', modalIsOpen: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.closeModal();

    alert('You choose : ' + this.state.value);
  }

  render() {
    const { values } = this.props;

    const total = values.reduce((total, row) => (total += row.value), 0);

    return (
      <div>
        <table className={`table ${styles.difficulty}`}>
          <tbody>
            {values.map(row => {
              const percentage = (row.value / total) * 100;
              return (
                <tr key={row.name}>
                  <td style={{ width: '50px' }}>{row.name}</td>
                  <td title={`${row.value} vote`} className="align-middle">
                    <div
                      className={styles.progressBar}
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow={percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <div>
            <span>Notez le niveau de difficulté de cette via</span>
            <br />
            <span>{total} viaferratistes ont déjà voté</span>
          </div>
          <button onClick={this.openModal} type="button" className="btn btn-primary">
            Voter
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={{
              content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
              },
            }}
            contentLabel="Noter la difficulté"
          >
            <StaticQuery
              query={graphql`
                query {
                  allContentfulDifficulty(sort: { fields: [order], order: ASC }) {
                    edges {
                      node {
                        code
                        name
                        description: childContentfulDifficultyDescriptionTextNode {
                          childMarkdownRemark {
                            html
                          }
                        }
                      }
                    }
                  }
                }
              `}
              render={data => (
                <form onSubmit={this.handleSubmit}>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-10">
                        <h2>Voter :</h2>
                      </div>
                      <div className="col-2 align-self-center text-right">
                        <button type="button" onClick={this.closeModal}>
                          <Icon icon={ICONS.CLOSE} />
                        </button>
                      </div>
                    </div>
                    <hr />
                    <h4>Pour vous, cette via correspond globalement à un niveau :</h4>
                    <div>
                      {data.allContentfulDifficulty.edges.map(e => (
                        <div key={e.node.code}>
                          <label htmlFor={e.node.code}>
                            <input
                              type="radio"
                              id={e.node.code}
                              name="difficulty"
                              value={e.node.code}
                              checked={this.state.value == e.node.code}
                              onChange={this.handleChange}
                            />
                            {e.node.code} - {e.node.name}
                            <div
                              dangerouslySetInnerHTML={{
                                __html: e.node.description.childMarkdownRemark.html,
                              }}
                            />
                          </label>
                        </div>
                      ))}
                    </div>

                    <hr />
                    <div className="row justify-content-end">
                      <div className="col">
                        <button type="submit" className="btn btn-primary">
                          Valider
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            />
          </Modal>
        </div>
      </div>
    );
  }
}
