import React from "react";
import { useGlobalContext } from "./context";
import bg_img from "./images/pexels-burak-kebapci-187041.jpg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='bg-img' onMouseOver={closeSubmenu}>
      <div>
        <h2>analjdsefn</h2>
      </div>
    </section>
  );
};

export default Hero;
