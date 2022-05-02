import React, { Component } from 'react'
import '../style/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
          <div className='footer'>
              
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
          <div className='container-footer'>
            <div className='footer-comp'>
            <p>Contact Us</p>
            <p>Legal Policy</p>
            <p>Social Media</p>
            <p>Special Offers</p>
            <p>More Info</p>
            </div>           
          </div>
            <p className='footer'>All rigth is reserved </p>
          </div>
      </div>
    )
  }
}
