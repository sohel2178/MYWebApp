import React, { Fragment } from "react";

import "./home.css";
import Slider from "./slider";
import ServicesPage from "./services";
import LiveTracking from "./LiveTracking";

const HomePage = () => {
  return (
    <Fragment>
      <Slider />
      <ServicesPage />
    </Fragment>
    // <div>
    //   <section className="sec1">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="508mm"
    //       height="146mm"
    //       viewBox="0 0 508 146"
    //       version="1.1"
    //       id="svg880"
    //     >
    //       <defs id="defs874" />

    //       <g id="curve" transform="translate(0,-151.00004)">
    //         <path
    //           d="m -7.5550893,298.27273 c 0,0 148.0730393,-69.27027 227.2749093,-32.8392 123.05865,53.36477 290.40686,-36.94419 290.40686,-36.94419 v 66.70471 z"
    //           id="path882"
    //         />
    //       </g>
    //     </svg>
    //   </section>

    //   <section className="sec2"></section>
    // </div>
  );
};

export default HomePage;
