import { useState } from "react";

import OpenPG from "../assets/OpenPG.jpg"
import MHomeLogo from "../assets/MHomeLogo.png";

const Hero = () => {
  return <div className="h-screen relative flex flex-col items-center"
   style={{
        background: `url(${OpenPG})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
  }}
  >
    <div className="relative w-full max-w-[1490] flex items-center justify-between pt-10 mx-auto px-10">
      <img src={MHomeLogo} alt=""/>

      <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]"></ul>
    </div>
  </div>;
};

export default Hero;