import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header.js";
import Card from "./Components/Card.js";
import Footer from "./Components/Footer.js";
import Filters from "./Components/Filters.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bikes: [], //we'll use this to keep all bikes at all times here
      products: [], //we'll use this for filtering each category
    };
  }

  componentDidMount() {
    fetch("https://json-project3.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          bikes: data,
        });
      });
  }

  //the same old filterize function from last challenge
  //**it's too god not to use it :)
  filterize = (filterName, type) => {
    filterName = this.state.bikes.filter(function (product) {
      return product[type] === filterName;
    });
    return filterName;
  };

  //the actual click on every filter
  toggleFilters = (e) => {
    //get the currentFilter name from the event currentTarget
    let currentFilterName = e.currentTarget.children[0].innerText.toUpperCase();

    //get the currentFilter type (gender or brand) from the event currentTarget
    let currentFilterType = e.currentTarget.getAttribute("data-type");

    this.setState({
      products: this.filterize(currentFilterName, currentFilterType),
    });
  };

  //if you click on all, just set the products like they were at start
  toggleAll = (e) => {
    this.setState({
      products: this.state.bikes,
    });
  };

  render() {
    const { bikes, products } = this.state;

    return (
      <div className="App container bg-white">
        <Header />
        <div className="row">
          <div className="col-md-12">
            <h1 className="title">Bikes</h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <Filters
            badge={bikes}
            toggleFilters={this.toggleFilters}
            filterize={this.filterize}
            toggleAll={this.toggleAll}
            allProducts={bikes}
          />
          <div className="col-md-9">
            <div className="row">
              {products.length === 0
                ? bikes.map((element, i) => (
                    <Card
                      title={element.name}
                      price={element.price}
                      img={element.image}
                      key={i}
                    />
                  ))
                : products.map((element, i) => (
                    <Card
                      title={element.name}
                      price={element.price}
                      img={element.image}
                      key={i}
                    />
                  ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
