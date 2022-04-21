// feature 1
import React from "react";
import Footer from "./components/Footer";
import Products from "./components/Products";
import data from "./data.json"
import Filter from "./components/Filter";
import './index.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
  }
  sortProducts(sort){
    //implement
  }
  filterProducts(size){
    //impl
  }
  render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/">Reat Shopping Store SARA</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter count={this.state.products.length}
            size={this.state.size}
            sort={this.state.sort}
            filterProducts={this.filterProducts}
            sortProducts={this.sortProducts}
            ></Filter>
            <Products products={this.state.products}></Products>
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <Footer></Footer>
    </div>
    
    );
  }
}

export default App;
