import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import hero from "../../images/hero-image.png"
const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-wrapper container">
          <div className="hero-container row">
            {/* Left Side */}
            <div className="hero-left col-lg-6 py-4 py-lg-0 my-5 my-lg-0  d-flex flex-column justify-content-lg-start justify-content-center">
              <div className="hero-title">
                <motion.h1  initial={{y:"3rem" , opacity:0}}  animate={{y:0 , opacity:1}} transition={{duration:4, type:"spring"}}
                 className="mb-5">
                  Discover <br /> Most Suitable <br /> Property
                </motion.h1>
                <span></span>
              </div>
              <div className="hero-description mb-5">
                <span>
                  Find the variety of property that suits you very easily.
                </span>
                <span>
                  Forget all difficulties in finding a residence for you.
                </span>
              </div>
              <div className="stats  d-flex">
                <div className="stat d-flex justify-content-center flex-column text-start ">
                  <span className="d-flex">
                    <CountUp
                      start={4800}
                      end={5000}
                      duration={5}
                      className="count"
                    />
                    <span className="add ms-1">+</span>
                  </span>
                  <span className="name text-start">Products</span>
                </div>

                <div className="stat d-flex justify-content-center flex-column text-start  mx-5 ">
                  <span className="d-flex ">
                    <CountUp
                      start={2000}
                      end={2500}
                      duration={5}
                      className="count"
                    />
                    <span className="add ms-1">+</span>
                  </span>
                  <span className="name text-start">Customer</span>
                </div>

                <div className="stat d-flex justify-content-center flex-column text-start ">
                  <span className="d-flex">
                    <CountUp
                      start={25}
                      end={40}
                      duration={5}
                      className="count"
                    />
                    <span className="add ms-1">+</span>
                  </span>
                  <span className="name text-center">Awards</span>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="hero-right col-lg-6 mt-5 mt-lg-0 d-flex  justify-content-lg-end justify-content-center">
              <motion.div className="img-container " initial={{x:"3rem" , opacity:0}}  animate={{x:0 , opacity:1}} transition={{duration:4 , type:"spring"}}>
                <img src={hero} alt="hero"  />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
