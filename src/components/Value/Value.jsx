import React from "react";
import "./Value.css";
import data from "../../utils/accordion";
import * as icon from "react-bootstrap-icons";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import valueimg from "../../images/value.webp";

const Value = () => {
  return (
    <div>
      <section className="value" id="values">
        <div className="container">
          <div className="row v-wrapper ">
            {/* Left Side/ */}
            <div className="v-left col-12 col-lg-6">
              <img src={valueimg} alt="image" />
            </div>

            {/* Right Side/ */}
            <div className="v-right col-12 col-lg-6 ">
              <span className="title mb-4">Our Value</span>
              <span className="subtitle mb-4">Value we give to you</span>
              <span className="description mb-5">
                We always ready to help by providing the best services for you.
                <br />
                We believe good place to live can make your life better.
              </span>

              <Accordion
                className="accordion border-0"
                allowMultipleExpanded={false}
              >
                {data.map((item, i) => {
                  return (
                    <AccordionItem className="accordionitem " key={i} uuid={i}>
                      <AccordionItemHeading className="accordionitemheading ">
                        <AccordionItemButton>
                          <div className="d-flex justify-content-between align-items-center mt-2">
                            <div className=" flexCenter icon ">{item.icon}</div>
                            <div className="heading mx-5">{item.heading}</div>
                            <div className="flexCenter icon">
                              <icon.ArrowDownCircleFill color=" #1f3e72" />
                            </div>
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>

                      <AccordionItemPanel className="accordionpanel">
                        <p className="text mx-4 my-2">{item.detail}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Value;
