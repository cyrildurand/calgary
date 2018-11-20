import React from "react";
import { Link } from "gatsby";

const ViaCard = ({ name, slug }) => {
  return (
    <div>
      <h3>{name}</h3>
      <Link to={`/via-${slug}/`}>
        <p>Read more ...</p>
      </Link>
    </div>
  );
};

export default ViaCard;
