import React, { Component } from 'react';
import '../index.css';

export default class Filter extends Component {
  render() {
    return (
      <div>
          <div className='filter'>
          <div className='filter-result'>{this.props.count}</div>
          <div className='filter-sort'>
              Order {" "}
            <select>
                <option>Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>
           </div>
          <div className='filter-size'> 
            Filter 
            <select>
              <option value="">ALL</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              </select>
              </div>
          </div>
      </div>
    )
  }
}


//console.log(event.target.value)
//console.log(event.target.value)