import React, { Component } from 'react';
import './App.css';
import SiderDemo from "./components/navbar";
import BreadCrumb from "./components/breadcrumb"
import Content from "./components/content"

class App extends Component {
  render() {
    return (
      <div className="color">
        <div className="color-nav">
          <SiderDemo />
        </div>
        <div className="color-Breadcrumb" >
          <BreadCrumb />
        </div>
        <div className="color-content" >
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
