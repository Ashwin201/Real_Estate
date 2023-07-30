import "./Footer.css";

import React from "react";
import logo2 from "../../images/logo2.png"

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row f-wrapper">
            {/* Left Side */}
            <div className="f-left col-12 col-md-6">
              <img src={logo2} alt="footer logo" className="img-fluid "/>
              <span className="purpose mt-4">
                Our vision is to make all people the best place to live for
                them.
              </span>
            </div>

            {/* Right side */}
            <div className="f-right col-12 col-md-6 mt-5 mt-md-0 ">
              <span className="info mb-4">Information</span>
              <span className="address mb-2"> Jhajjar, Haryana</span>
              <span className="creator ">
                Created by <span className="name">Ashmin Sharma</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
