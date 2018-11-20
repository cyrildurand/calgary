import React from "react";
import ViaCard from "../components/ViaCard";
import { graphql } from "gatsby";

export const query = graphql`
  query IndexQuery {
    allContentfulViaFerrata {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;

const Index = ({ data }) => {
  const vias = data.allContentfulViaFerrata.edges;
  return (
    <div>
      <h1>List</h1>
      <ul>
        {vias.map(({ node: via }) => (
          <li key={via.id}>
            <ViaCard {...via} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
