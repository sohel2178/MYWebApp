import React from "react";
import theif from "../../../images/theft.svg";

const ACCPage = () => {
  return (
    <div style={{ backgroundColor: "fff" }}>
      <div
        style={{
          padding: "50px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div
          style={{
            flexGrow: 1,
            padding: "30px",
            width: "50%",
            maxWidth: "50%",
            display: "flex",
            alignItems: "end",
            justifyContent: "center"
          }}
        >
          <img
            style={{ width: "30%", textAlign: "right" }}
            src={theif}
            alt="Theft Image"
          />
        </div>
        <div></div>
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
        <g id="curve2" transform="translate(0,-151.00004)">
          <path
            style={{ fill: "#ccc" }}
            d="m -7.5550893,298.27273 c 0,0 148.0730393,-69.27027 227.2749093,-32.8392 123.05865,53.36477 290.40686,-36.94419 290.40686,-36.94419 v 66.70471 z"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default ACCPage;
