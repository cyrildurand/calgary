import React from "react";
import { graphql } from "gatsby";

export default class ViaFerrata extends React.Component<any> {

  public render() {
    console.log(this.props);
    
    return <div>{this.props.data.contentfulViaFerrata.name}</div>;
  }
}

export const query = graphql`
query Pouet($slug: String!) {
  contentfulViaFerrata(slug: { eq: $slug }) {
    name
    slug
  }
}
`;