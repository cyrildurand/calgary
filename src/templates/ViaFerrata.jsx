import React from "react";
import { graphql } from "gatsby";

const ViaFerrata = ({ data }) => {
  return (
    <div>
      <h1>{data.contentfulViaFerrata.name}</h1>
    </div>
  );
};

export const query = graphql`
  query Pouet($slug: String!) {
    contentfulViaFerrata(slug: { eq: $slug }) {
      name
    }
  }
`;
export default ViaFerrata;
