import React, { Component } from "react";
import EachFilter from "./EachFilter";

class Filters extends Component {
  constructor() {
    super();
    this.state = {
      activeFilter: {
        "Show all": true, //when you first come to the page, the Show All filter is selected
      },
    };
  }

	//setting the active filter class based on the filterName that is being sent here from
	//the EachFilter component
  toggleActive = (filterName) => {
    this.setState({
      activeFilter: { [filterName]: true },
    });
  };

  render() {
		//helper array to print all the filters at once
    const filterBrandNames = [
      "LE GRAND BIKES",
      "KROSS",
      "EXPLORER",
      "VISITOR",
      "PONY",
      "FORCE",
      "E-BIKES",
      "IDEAL",
    ];

    const { toggleAll, allProducts, toggleFilters, filterize } = this.props;

    return (
      <div className="col-md-3">
        <h3>Filter by:</h3>
        <ul className="sub-menu">
          <EachFilter
            toggleAll={toggleAll}
            allProducts={allProducts}
            toggleActive={this.toggleActive}
            dataType="all"
            filterName="Show all"
            activeFilter={this.state.activeFilter}
          />
        </ul>
        <hr />
        <h4>Gender</h4>
        <ul className="sub-menu">
          <EachFilter
            toggleFilters={toggleFilters}
            filterize={filterize}
            toggleActive={this.toggleActive}
            dataType="gender"
            filterName="Male"
            activeFilter={this.state.activeFilter}
          />
          <EachFilter
            toggleFilters={toggleFilters}
            filterize={filterize}
            toggleActive={this.toggleActive}
            dataType="gender"
            filterName="Female"
            activeFilter={this.state.activeFilter}
          />
        </ul>
        <hr />
        <h4>Brand</h4>
        <ul className="sub-menu">
          {filterBrandNames.map((brandName) => (
            <EachFilter
              toggleFilters={toggleFilters}
              filterize={filterize}
              toggleActive={this.toggleActive}
              dataType="brand"
              filterName={brandName}
              activeFilter={this.state.activeFilter}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Filters;
