import React from "react";
import "./Contact.css";

import * as icon from "react-bootstrap-icons";

import contactimg from "../../images/contact.jpg"
const Contact = () => {
  return (
    <div>
      <div className="contact" id="connect">
        <div className="container">
          <div className="row c-wrapper ">
            {/* Left Side */}
            <div className="c-left col-12 col-lg-6 d-flex flex-column">
              <span className="title mb-4">Contact Us</span>
              <span className="subtitle mb-4">Let's have a chat</span>
              <span className="description mb-5">
                We always ready to help by providing the best service for you.
                We believe a good place to live can make your life better
              </span>

              <div className="contact-methods">
                <div className="method d-flex flex-column p-3  ">
                  <div className="d-flex mb-4">
                    <span className="c-icon me-4">
                      <icon.TelephoneInboundFill color="#4066ff" />
                    </span>
                    <div className="d-flex flex-column">
                      <span className="way">Call</span>
                      <span className="way-info">123&nbsp;4567&nbsp;890</span>
                    </div>
                  </div>
                  <button className="btn btn-primary">Call Us</button>
                </div>

                <div className="method d-flex flex-column p-3">
                  <div className="d-flex mb-4">
                    <span className="c-icon me-4">
                      <icon.ChatDotsFill color="#4066ff" />
                    </span>
                    <div className="d-flex flex-column">
                      <span className="way">Message</span>
                      <span className="way-info">123&nbsp;4567&nbsp;890</span>
                    </div>
                  </div>
                  <button className="btn btn-primary">Message Us</button>
                </div>
                </div>


                <div className="contact-methods">

                <div className="method d-flex flex-column p-3">
                  <div className="d-flex mb-4">
                    <span className="c-icon me-4">
                      <icon.CameraVideoFill color="#4066ff" />
                    </span>
                    <div className="d-flex flex-column">
                      <span className="way">Video Call</span>
                      <span className="way-info">123&nbsp; 4567&nbsp;890</span>
                    </div>
                  </div>
                  <button className="btn btn-primary ">Call Us</button>
                </div>

                <div className="method d-flex flex-column p-3">
                  <div className="d-flex mb-4">
                    <span className="c-icon me-4">
                      <icon.ChatLeftTextFill color="#4066ff" />
                    </span>
                    <div className="d-flex flex-column">
                      <span className="way">Chat</span>
                      <span className="way-info">123&nbsp;4567&nbsp;890</span>
                    </div>
                  </div>
                  <button className="btn btn-primary ">Text Us</button>
                </div>
              </div>
            </div> 

            {/* RightSide/ */}
            <div className="c-right col-12 col-lg-6  d-flex justify-content-center align-content-center justify-content-lg-end align-content-lg-end">
                <div className="c-img-container ">
                    <img src={contactimg} alt="contact" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
