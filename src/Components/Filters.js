import React, { Component } from "react";
import Card from "./Card";
import HeaderStyle from "./Header.css";
import axios from "axios";
class Filters extends Component {
  render() {

    return (
      <div class="row">
        <div class="col-md-3">
          <h3>Filter by:</h3>
          <ul class="sub-menu">
            <li data-type="all" class="active">
              <span>Show all</span>
              <span class="badge" id="allBadge">
                0
              </span>
            </li>
          </ul>
          <hr />
          <h4>Gender</h4>
          <ul class="sub-menu">
            <li data-type="gender">
              <span>Male</span>
              <span class="badge" id="maleBadge">
                0
              </span>
            </li>
            <li data-type="gender">
              <span>Female</span>
              <span class="badge" id="femaleBadge">
                0
              </span>
            </li>
          </ul>
          <hr />
          <h4>Brand</h4>
          <ul class="sub-menu">
            <li data-type="brand">
              <span>LE GRAND BIKES</span>
              <span class="badge" id="leGrand">
                0
              </span>
            </li>
            <li data-type="brand">
              <span>KROSS</span>
              <span class="badge" id="kross">
                0
              </span>
            </li>
            <li data-type="brand">
              <span>EXPLORER</span>
              <span class="badge" id="explorer">
                0
              </span>
            </li>
            <li data-type="brand">
              <span>VISITOR</span>
              <span class="badge" id="visitor">
                0
              </span>
            </li>
            <li data-type="brand">
              <span>PONY</span>
              <span class="badge" id="pony">
                0
              </span>
            </li>
            <li data-type="brand">
              <span>FORCE</span>
              <span class="badge" id="force">
                0
              </span>
            </li>
            <li data-type="brand">
              <span>E-BIKES</span>
              <span class="badge" id="eBikes">
                0
              </span>
            </li>
            <li data-type="brand">
              <span>IDEAL</span>
              <span class="badge" id="ideal">
                0
              </span>
            </li>
          </ul>
        </div>
        <div class="col-md-9">
          <Card />
        </div>
      </div>
    );
  }
}

export default Filters;
