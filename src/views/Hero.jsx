import { useState } from "react";

import OpenPG from "../assets/OpenPG.jpg"

const Hero = () => {
  return <div className="h-screen relative flex flex-col items-center"
   style={{
        background: `url(${OpenPG})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
  }}>


  </div>;
};

export default Hero;