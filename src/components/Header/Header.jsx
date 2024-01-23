import React, { useState } from "react";
import "./Header.css";
import * as icon from "react-bootstrap-icons";
import OutsideClickHandler from "react-outside-click-handler";
import logo from "../../images/logo.webp";
const Header = () => {
  const [menuOpend, setMenuOpend] = useState(true);

  const getMenuStyles = (menuOpend) => {
    if (document.documentElement.clientWidth <= 768) {
      return {
        right: menuOpend && "3rem",
      };
    }
  };
  return (
    <div>
      {/* navbar-expand-lg bg-body-tertiary */}
      <div className="header">
        <nav className="navbar  navbar-expand-md fixed-top py-md-2  ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" className="img-fluid" width={100} />
            </a>

            <OutsideClickHandler
              onOutsideClick={() => {
                setMenuOpend(false);
              }}
            >
              <ul
                className="navbar-nav ms-auto"
                style={getMenuStyles(menuOpend)}
              >
                <li
                  className="nav-item"
                  onClick={() => setMenuOpend((prev) => !prev)}
                >
                  <a
                    className="nav-link"
                    href="#companies"
                    onClick={() => setMenuOpend((prev) => !prev)}
                  >
                    Companies
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => setMenuOpend((prev) => !prev)}
                >
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#residency"
                    onClick={() => setMenuOpend((prev) => !prev)}
                  >
                    Residencies
                  </a>
                </li>

                <li
                  className="nav-item"
                  onClick={() => setMenuOpend((prev) => !prev)}
                >
                  <a
                    className="nav-link"
                    href="#values"
                    onClick={() => setMenuOpend((prev) => !prev)}
                  >
                    Our Values
                  </a>
                </li>

                <li
                  className="nav-item"
                  onClick={() => setMenuOpend((prev) => !prev)}
                >
                  <a className="nav-link  " href="#start">
                    Get Started
                  </a>
                </li>
                <button
                  className="btn btn-primary btn-sm ms-4 mb-3 mb-lg-0 "
                  onClick={() => setMenuOpend((prev) => !prev)}
                >
                  <a href="#connect" className="nav-link ">
                    Contact
                  </a>
                </button>
              </ul>

              <span
                className="menubar ms-auto "
                onClick={() => setMenuOpend((prev) => !prev)}
              >
                <icon.ListNested className="bar" color="white" />
              </span>
            </OutsideClickHandler>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
