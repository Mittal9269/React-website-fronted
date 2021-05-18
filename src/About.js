import React from "react";
import { NavLink } from "react-router-dom";
import web from "./Images/newabout.png";
import Common from "./Common";

export default function About() {
  return (
    <>
      <Common
        name="About page made by"
        img={web}
        visit="/contect"
        btname="Contect Now"
      />
    </>
  );
}
