import React from "react";
import "./Companies.css";
import img1 from "../../images/realty.webp";
import img2 from "../../images/prologis.webp";
import img3 from "../../images/equinix.webp";
import img4 from "../../images/tower.webp";
const Companies = () => {
  return (
    <div id="companies">
      <div className="container">
        <div className="heading d-flex flex-column mt-5 pt-3 d-flex text-center text-sm-start flex-column justify-content-center justify-content-sm-start align-content-center align-content-sm-start">
          <span className="title mb-4">Top Companies</span>
          <span className="subtitle mb-5   ">Some Companies are</span>
        </div>
        <div className="row images ">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
