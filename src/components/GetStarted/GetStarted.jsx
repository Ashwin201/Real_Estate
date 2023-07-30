import "./GetStarted.css";
import React from "react";

const GetStarted = () => {
  return (
    <div>
      <div className="explore" id="start">
        <div className="container">
          <div className="row e-wrapper ">
            <span className="main-text mb-4">Get Started with Homyz</span>
            <span className="second-text mb-5">
              Connect and find super attractive price quotes from us. <br />
              Find your residence soon{" "}
            </span>
            <a href="#residency" className="e-btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
