import React from "react";
import Card from "./Card";
import img1 from "./Images/img2.jfif";
import img2 from "./Images/img4.jfif";
import img3 from "./Images/img4.png";
import img4 from "./Images/img4.jfif";
import img5 from "./Images/img5.jfif";
import img6 from "./Images/img6.jfif";

export default function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="clo-10 mx-auto">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  <Card img={img1} />
                  <Card img={img2} />
                  <Card img={img3} />
                  <Card img={img4} />
                  <Card img={img5} />
                  <Card img={img6} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
