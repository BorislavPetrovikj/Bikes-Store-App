import React, { Component } from "react";
import axios from "axios";
import HeaderStyle from "./Header.css";

class Card extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios(`https://json-project3.herokuapp.com/products`).then((res) => {
      console.log(res.data);
      this.setState({
        products: res.data,
      });
    });
  }

  render() {
    return (
      <div class="row ">
        {this.state.products.map((product, index) => (
          <div key={index}>
            <div class="col-md-4 card-cont">
              <a href="#" class="inner">
                <div class="img-cont">
                  <img
                    src={`/img/${product.image}.png`}
                    class="card-img img img-responsive"
                  ></img>
                </div>
                <div class="content-cont">
                  <h2>{product.name}</h2>
                  <p class="price">${product.price} $</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
