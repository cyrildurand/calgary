import React from 'react';
import ViaCard from '../components/ViaCard';
import { ContentfulViaFerrataGroupConnectionConnection as ViaFerrataGroup } from '../contentful.types';
import { graphql } from 'gatsby';

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

interface IndexPageProps {
  data: {
    allContentfulViaFerrata: ViaFerrataGroup
  };
}

export default class Index extends React.Component<IndexPageProps> {
  public render() {
    const vias = this.props.data.allContentfulViaFerrata.edges;
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
  }
}
