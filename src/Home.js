import React from "react";
import { NavLink } from "react-router-dom";
import web from "./Images/Img1.png";
import Common from "./Common";

export default function Home() {
  return (
    <>
      <Common
        name="Grow More With"
        img={web}
        visit="/service"
        btname="Get Now"
      />
    </>
  );
}
