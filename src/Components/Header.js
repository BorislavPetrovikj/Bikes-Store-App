import React from "react";
import logo from "./logo.png";
import HeaderStyle from "./Header.css";
import Footer from "./Footer";
import Filters from "./Filters";
import Card from "./Card";

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
{/*          
                <ul class="nav navbar-nav ">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Вikes</a>
                  </li>
                  <li>
                    <a href="#">Gear</a>
                  </li>
                  <li>
                    <a href="#">Parts</a>
                  </li>
                  <li>
                    <a href="#">Tires</a>
                  </li>
                  <li>
                    <a href="#">Service-info</a>
                  </li>
                  <li>
                    <a href="#">Catalogues</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              */}
              

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
      <div class="row">
        <div class="col-md-12">
          <h1 class="title">Bikes</h1>
        </div>
      </div>
      <hr />
      <Filters />
      <Footer />
    </div>
  );
};

export default Header;
