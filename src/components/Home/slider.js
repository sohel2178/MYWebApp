import React from "react";
import "./home.css";
import slider from "../../images/slider.svg";

import { Title, Indicator, Line, MyButton } from "../../utils/styles";

import { withRouter } from "react-router-dom";
import * as ROUTES from "../../utils/routes";

const Item = props => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Indicator color={props.color} />
      <p style={{ margin: "0 8px" }}>{props.value || "Hello"}</p>
    </div>
  );
};

const items = [
  { value: "Live Tracking", color: "indigo" },
  { value: "ACC OFF ON Notifications", color: "#2e6c9a" },
  { value: "Fuel Monitoring", color: "indigo" },
  { value: "Geo Fences", color: "#2e6c9a" },
  { value: "Share Vehicle", color: "indigo" },
  { value: "Custom Modules", color: "#2e6c9a" },
  { value: "Web Portal", color: "indigo" },
  { value: "Android App", color: "#2e6c9a" },
  { value: "IOS App", color: "indigo" }
];

const Slider = props => {
  const handleButtonClick = e => {
    props.history.push(ROUTES.FLEET_MANAGEMENT);
  };
  return (
    <div className="slider-container">
      <img src={slider} alt="Slider" />

      <div className="bottom-container">
        <Title>The Fastest GPS Tracker in Bangladesh</Title>
        <Line />
        <div className="item-container">
          {items.map((item, i) => (
            <Item key={i} value={item.value} color={item.color} />
          ))}
        </div>

        <div className="button-container">
          <MyButton onClick={handleButtonClick} marginTop="60px">
            Fleet Management
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Slider);
