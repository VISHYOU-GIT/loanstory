
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
