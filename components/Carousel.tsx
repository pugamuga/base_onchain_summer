"use client";

import { Carousel } from "flowbite-react";
import CardCarousel from "./CardCarousel";
import Metrics from "./cards/Metrics";

export default function DefaultCarousel() {
  return (
    <div className="w-1/2 h-[50vh] center z-50 ">
      <Carousel>
        <CardCarousel>
          <Metrics />
        </CardCarousel>
        <CardCarousel>
          <Metrics />
        </CardCarousel>
        <CardCarousel>
          <Metrics />
        </CardCarousel>
      </Carousel>
    </div>
  );
}
