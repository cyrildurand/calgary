import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './Contact.module.scss';

export default class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <section className={styles.contact}>
          <form method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <fieldset>
              <legend className="text-center">Contact us</legend>

              <div className="form-group">
                <label className="control-label" htmlFor="name">
                  Name
                </label>
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label" htmlFor="email">
                  Your E-mail
                </label>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label" htmlFor="object">
                  Object
                </label>
                <div>
                  <input
                    id="object"
                    name="object"
                    type="text"
                    placeholder="Your object"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label" htmlFor="message">
                  Your message
                </label>
                <div>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Please enter your message here..."
                    rows="5"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="text-right">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Submit
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </Layout>
    );
  }
}
