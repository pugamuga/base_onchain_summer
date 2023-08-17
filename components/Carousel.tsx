"use client";

import { Carousel } from "flowbite-react";
import CardCarousel from "./CardCarousel";

export default function DefaultCarousel() {
  return (
    <div className="w-1/2 h-[50vh] center z-0 ">
      <Carousel  >
        <CardCarousel />
        <CardCarousel />
        <CardCarousel />
      </Carousel>
    </div>
  );
}
