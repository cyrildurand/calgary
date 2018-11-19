import Helmet from "react-helmet";
import React from "react";

export default class Layout extends React.Component {
  public render() {
    return (
      <div>
        <Helmet>
          <title>Via Ferrata</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
        </Helmet>
      </div>
    );
  }
}
