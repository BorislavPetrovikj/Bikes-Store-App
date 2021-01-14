import React from "react";

const Card = ({ title, price, img }) => {
  return (
    <div className="col-md-4 card-cont">
      <a href="/" className="inner">
        <div className="img-cont">
          <img
            src={`../img/${img}.png`} //must use require when the images are inside src folder
            className="card-img img img-responsive"
            alt=""
          />
        </div>
        <div className="content-cont">
          <h2>{title}</h2>
          <p className="price">{price} $</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
