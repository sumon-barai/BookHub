import React from "react";
import logo from "../../assets/logo/logo.png";

const Logo = () => {
  return (
    <div>
      <a className="navbar-brand" href="#">
        <img height={40} src={logo} alt="" />
      </a>
    </div>
  );
};

export default Logo;
