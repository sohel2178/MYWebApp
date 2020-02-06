import React from "react";
import { Title, Line, Card, MiniHeader } from "../../utils/styles";
import LiveTracking from "./LiveTracking";

import l1 from "../../images/1.svg";
import l2 from "../../images/2.svg";
import l3 from "../../images/3.svg";
import l4 from "../../images/4.svg";
import l5 from "../../images/5.svg";
import l6 from "../../images/6.svg";
import l7 from "../../images/7.svg";
import l8 from "../../images/8.svg";
import ACCPage from "./ACC";

const firstRow = [
  { icon: l1, text: "Live Tracking" },
  { icon: l2, text: "Milage Report" },
  { icon: l3, text: "Destination Alarts" },
  { icon: l4, text: "Fuel Monitoring" }
];

const secondRow = [
  { icon: l5, text: "ACC Off On Notifications" },
  { icon: l6, text: "Speed Violation Alarts" },
  { icon: l7, text: "Power Cut Alart" },
  { icon: l8, text: "Daily Summery" }
];

const Item = props => {
  const handleItemClick = e => {
    console.log(props);
  };
  return (
    <Card onClick={handleItemClick}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={props.icon} alt="Icon" height="50px" />
        <MiniHeader>{props.text}</MiniHeader>
      </div>
    </Card>
  );
};

const ServicesPage = () => {
  return (
    <div className="wrapper">
      <div className="services-container">
        <div className="services-header">
          <Title>MyTracker : Your One stop Vehicle Tracking Solutions</Title>
          <Line style={{ marginTop: "10px" }} />
        </div>
        <div className="services">
          <div className="service-list">
            {firstRow.map((item, i) => (
              <Item key={i} icon={item.icon} text={item.text} />
            ))}
          </div>

          <div className="service-list">
            {secondRow.map((item, i) => (
              <Item key={i} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
      </div>

      <svg
        style={{
          position: "relative",
          bottom: "0px",
          backgroundColor: "#fff",
          marginBottom: "-10px"
        }}
        viewBox="0 80 480 65"
      >
        <g id="curve" transform="translate(0,-151.00004)">
          <path
            style={{ fill: "#ccc" }}
            d="m -7.5550893,298.27273 c 0,0 148.0730393,-69.27027 227.2749093,-32.8392 123.05865,53.36477 290.40686,-36.94419 290.40686,-36.94419 v 66.70471 z"
          ></path>
        </g>
      </svg>

      <LiveTracking />
      <ACCPage />
    </div>
  );
};

export default ServicesPage;
