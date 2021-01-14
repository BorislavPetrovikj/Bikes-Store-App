import React from "react";

const EachFilter = ({
  toggleAll,
  allProducts,
  toggleFilters,
  filterize,
  filterName,
  dataType,
  toggleActive,
  activeFilter,
}) => {
  return (
    <li
      onClick={(e) => {
        //if the currentFilter is all - use the toggleAll function - else use the toggleFilters function from the App comp
        dataType === "all" ? toggleAll(e) : toggleFilters(e);

        //use the toggleActive function from Filters component to set only 1 active filter at a time,
        // passing the filterName to do that
        toggleActive(filterName);
      }}
      data-type={dataType} //data-type from props to use it with the filterize/toggleall functions (we get this data-type from e.target there)
      className={activeFilter[filterName] ? "active" : ""} //if the currentFilterName is active, set the active class
    >
      <span>{filterName}</span>
      <span className="badge">
        {
          dataType === "all" //if we should count all products
            ? allProducts.length //get the allProducts array length
            : filterize(filterName.toUpperCase(), dataType).length //if not use the filterize function to get the length
          //note here we also use the filterName but must be in Uppercase becase Male, Female are not all uppercase
        }
      </span>
    </li>
  );
};

export default EachFilter;
