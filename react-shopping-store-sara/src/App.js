// feature 1
import React from "react";
import data from "./data.json"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
  }
  render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/">Reat Shopping Store SARA</a>
      </header>
      <main>
        <div className="content">
          <div className="main">Products</div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>
        All rigth is reserved.
      </footer>
    </div>
    );
  }
}

export default App;
