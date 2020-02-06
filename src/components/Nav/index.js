import React, { Fragment } from "react";

import "./nav.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../../utils/routes";

const Nav = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <img src={logo} alt="Logo" height="50px" />

        <div className="nav-middle">
          <Link to={ROUTES.HOME} className="link">
            Home
          </Link>
          <Link to={ROUTES.FEATURES} className="link">
            Features
          </Link>
          <Link to={ROUTES.TOP_CLIENTS} className="link">
            Top Clients
          </Link>
          <Link to={ROUTES.PRICING} className="link">
            Pricing
          </Link>
          <Link to={ROUTES.DEMO} className="link">
            Demo
          </Link>
        </div>
        <div className="nav-right">
          <p>Number</p>
          <p>BN</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
