import React from "react";

import Navbar from "./Navbar";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <div className="body">
        <Navbar />
        <div class="container">
          <div className="middle">
            <div className="big_logo">AGRO</div>
            <p className="subtext">
              Your one stop destination for all agricultural articles in
              multiple lannguages. Using an NLP model, AGRO predicts the
              language of the article efficiently which makes it simple for you
              to find articles in your preferred languages.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
