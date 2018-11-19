import React from "react";
import { Link } from "gatsby";
import { ContentfulViaFerrata as ViaFerrata } from "../contentful.types";

export default class ViaCard extends React.Component<ViaFerrata> {
  public render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <Link to={`/via-${this.props.slug}/`}>
          <p>Read more ...</p>
        </Link>
      </div>
    );
  }
}
