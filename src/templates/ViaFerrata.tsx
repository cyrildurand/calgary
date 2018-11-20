import React from "react";
import { graphql } from "gatsby";
import { ContentfulViaFerrata } from "../contentful.types";

interface ViaFerrataPageProps {
  data: {
    contentfulViaFerrata: ContentfulViaFerrata;
  };
}
export default class ViaFerrata extends React.Component<ViaFerrataPageProps> {
  public render() {
    return (
      <div>
        <h1>{this.props.data.contentfulViaFerrata.name}</h1>
      </div>
    );
  }
}

export const query = graphql`
  query Pouet($slug: String!) {
    contentfulViaFerrata(slug: { eq: $slug }) {
      name
    }
  }
`;