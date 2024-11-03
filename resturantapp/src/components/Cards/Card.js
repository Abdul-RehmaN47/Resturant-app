import React from "react";
import "./Card.css";
import pic1 from "../assets/pizza (1).jpg";
import pic2 from "../assets/burger2 (2).jpg";
import pic3 from "../assets/pizza2 (1).jpg";

function Card() {
  return (
    <>
     <h1 className="heading">Our Deals</h1>
    <div className="container">
   
        <div className="first">
      <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" src={pic1} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Order now
          </a>
        </div>
      </div>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" id="pic2" src={pic2} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="btn btn-primary">
            Order Now
          </a>
        </div>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" src={pic3} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="btn btn-primary">
            Order Now
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Card;
