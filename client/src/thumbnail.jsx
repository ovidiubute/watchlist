import React, { Component } from "react";
import { moviesClient } from "./omdb";

import "./thumbnail.css";

export default class Thumbnail extends Component {
  //   async componentDidMount() {
  //     const r = await moviesClient.search("Hobbit");
  //     console.log(r);
  //   }
  render() {
    return <div className="thumbnail-wrapper" />;
  }
}
