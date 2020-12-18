import React from "react";
import logo from "./img/logo.png";
import HeaderStyle from "./Header.css";

const Header = (props) => {
  return (
    <div className="container-fluid bg-light">
      <div class="row">
        <div class="col pt-4">
          <nav class="navbar navbar-expand-md navbar-light">
            <a href="#" class="navbar-brand">
              <img src={logo} height="60" alt="CoolBrand" />
            </a>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav ml-auto">
                <a href="#" class="px-4 text-uppercase nav-item nav-link">
                  home
                </a>
                <a href="#" class="px-4 text-uppercase nav-item nav-link">
                  bikes
                </a>
                <a href="#" class="px-4 text-uppercase nav-item nav-link">
                  gear
                </a>
                <a href="#" class="px-4 text-uppercase nav-item nav-link">
                  parts
                </a>
                <a href="#" class="px-4 text-uppercase nav-item nav-link">
                  tires
                </a>
                <a href="#" class="px-4 text-uppercase nav-item nav-link">
                  service-info
                </a>
                <a href="#" class="px-4 text-uppercase nav-item nav-link">
                  catalogues
                </a>
                <a href="#" class="px-4 text-uppercase nav-item nav-link">
                  contact
                </a>
              </div>
              <div class="navbar-nav ml-auto">
                <a href="#" class="iconsHover">
                  <i class="fas fa-search fa-2x p-2"></i>
                </a>
                <a href="#" class="iconsHover">
                  <i class="fas fa-shopping-bag fa-2x p-2"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col py-3">
          <h1>Bikes</h1>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default Header;
