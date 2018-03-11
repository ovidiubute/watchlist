import React, { Component } from "react";
import "./App.css";
import Thumbnail from "./thumbnail";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="thumbnail-container">
          <Thumbnail />
        </div>
      </div>
    );
  }
}

export default App;
