import React, { Component } from "react";
import axios from "axios";
import HeaderStyle from "./Header.css";

class Card extends Component {
  state = {
    products: [],
    productsToShow: [],
    allBrands: {
      KROSS: 0,
      "LE GRAND BIKES": 0,
      EXPLORER: 0,
      VISITOR: 0,
      FORCE: 0,
      PONY: 0,
      "E-BIKES": 0,
      IDEAL: 0,
    },
  };

  componentDidMount() {
    fetch("https://json-project3.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((el) => {
          if (this.state.allBrands[el.brand] < 2) {
            this.state.productsToShow.push(el);
            this.state.allBrands[el.brand]++;
          }
        });
        this.setState({
          products: data,
          productsToShow: this.state.productsToShow,
        });
      });
  }

  render() {
    return (
      <div className="Card row">
        {this.state.productsToShow.map((el) => {
          return (
            <>
              <div className="col-md-4 card-cont">
                <a href="#" class="inner">
                  <div className="img-cont">
                    <img
                      className="img-cont"
                      src={`/img/${el.image}.png`}
                      className="card-img img img-responsive"
                      alt="card"
                    />
                  </div>
                  <div className="content-cont">
                    <h6>{el.name}</h6>
                    <p className="price">{el.price} $</p>
                  </div>
                </a>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

export default Card;
