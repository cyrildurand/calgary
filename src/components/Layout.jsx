import Helmet from "react-helmet";
import React from "react";

const Layout = () => {
  return (
    <div>
      <Helmet>
        <title>Via Ferrata</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    </div>
  );
};

export default Layout;
