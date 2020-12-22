import React from "react";
import HeaderStyle from "./Header.css";
const Footer = (props) => {
  return (
    <div class="row footer">
      <div class="col-md-3 share-icons">
        <h2>Social share</h2>
        <a href="https://www.facebook.com/" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/?hl=en" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div class="col-md-3">
        <h2>Event info</h2>
        <ul>
          <li>
            <a href="#">Enter Now</a>
          </li>
          <li>
            <a href="#">Event Info</a>
          </li>
          <li>
            <a href="#">Course Maps</a>
          </li>
          <li>
            <a href="#">Race Pack</a>
          </li>
          <li>
            <a href="#">Results</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Am I Registered?</a>
          </li>
        </ul>
      </div>
      <div class="col-md-3">
        <h2>Registration</h2>
        <ul>
          <li>
            <a href="#">Volunteers</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Results</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Service Plus</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>
      <div class="col-md-3">
        <h2>Schedule</h2>
        <ul>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
          <li>
            <a href="#">Results</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Results</a>
          </li>
          <li>
            <a href="#">Volunteers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
