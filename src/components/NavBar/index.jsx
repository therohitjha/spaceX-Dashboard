import React from "react";
import SpaceX from './SpaceX.jpeg'

const NavBar = () => {
  return (
    <div className="header">
      <div className="logo flex justify-center">
        <div className="mt-4 text-4xl font-bold font-sans">
          <img src={SpaceX} alt='title'/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
