/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Clip from "../assets/img/step.mp4";
// reactstrap components
import { Container } from "reactstrap";

// core components

export default function HowItWorks() {
  return (
    <div className="my-4">
      <Container>
        <video
          autoPlay={"true"}
          muted={"true"}
          loop={"true"}
          className={"w-100 mt-5"}
        >
          <source src={Clip} style={{ width: "25%" }} />
        </video>
      </Container>
    </div>
  );
}
