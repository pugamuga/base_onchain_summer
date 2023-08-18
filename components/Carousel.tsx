"use client";

import { Carousel } from "flowbite-react";
import CardCarousel from "./CardCarousel";
import Metrics from "./cards/Metrics";
import OSummer from "./cards/OSummer";
import Base from "./cards/Base";

export default function DefaultCarousel() {
  return (
    <div className="w-1/2 h-[50vh] center z-50 ">
      <Carousel >
        <CardCarousel>
          {/* <Metrics /> */}
          <OSummer />
          {/* <Base /> */}
        </CardCarousel>
        <CardCarousel>
          {/* <Base /> */}
          {/* <OSummer /> */}
          <Metrics />
        </CardCarousel>
      </Carousel>
    </div>
  );
}
