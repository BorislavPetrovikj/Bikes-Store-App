import React from "react";
import logo from "./logo.png";
import "./Header.css";

const Header = (props) => {
  return (
    <div class="container bg-white">
      <nav class="nav navv">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 flex">
              <div class="navbar-header">
                <a href="#" class="navbar-brand">
                  <img src={logo} class="img img-responsive" alt=""></img>
                </a>
              </div>
              <div class="icons-menu">
                <span>
                  <i class="fas fa-search"></i>
                  <i class="fas fa-shopping-bag"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
