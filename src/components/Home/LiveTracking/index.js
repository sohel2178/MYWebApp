import React from "react";
import "./live-tracking.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../utils/routes";
import theif from "../../../images/theft.svg";
import { MyButton } from "../../../utils/styles";

const LiveTracking = () => {
  return (
    <div className="main-wrapper">
      <div className="live-tracking-wrapper">
        <div className="left-wrapper">
          <span>Tension 1</span>

          <h1>What If my car gets stolen?</h1>
          <p>
            (Nowadays incidents about cars getting stolen are often heard around
            us, so safety from thieves should be the prime concern as a car
            owner)
          </p>
          <h4>MyTracker will ensure protection from Car theft !</h4>

          <ul>
            <li>
              <b>Engine lock:</b> Turn off the engine Via SMS if the car is
              stolen . To see this feature check{" "}
              <Link to={ROUTES.PRICING}> Basic Package</Link>
            </li>
            <li>
              <b>Loud Horn:</b> Loud horn will give the thief a heart attack
              immediately after stealing. To see this feature check{" "}
              <Link to={ROUTES.PRICING}> Standard Package</Link>
            </li>
            <li>
              <b>Live tracking:</b> Through live tracking you can constantly
              monitor your car. To see this feature check{" "}
              <Link to={ROUTES.PRICING}> Basic Package</Link>
            </li>
          </ul>

          <MyButton style={{ marginTop: "20px" }}>See Packages</MyButton>
        </div>
        <div className="right-wrapper">
          <img src={theif} alt="Theft Image" />
        </div>
      </div>

      <svg
        style={{
          position: "relative",
          bottom: "0px",
          backgroundColor: "#ccc",
          marginBottom: "-10px"
        }}
        viewBox="0 80 480 65"
      >
        <g id="curve2" transform="translate(0,-151.00004)">
          <path
            style={{ fill: "#fff" }}
            d="m -7.5550893,298.27273 c 0,0 148.0730393,-69.27027 227.2749093,-32.8392 123.05865,53.36477 290.40686,-36.94419 290.40686,-36.94419 v 66.70471 z"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default LiveTracking;
