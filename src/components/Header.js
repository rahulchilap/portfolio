import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Web Devlopment and Website Promotions</h1>
        <Typed
          className="typed-text"
          strings={["Rahul Chilap", "Wed Devloper", "Freelancer"]}
          typeSpeed={40}
          backSpeed={40}
          loop
        />
        <a href="/" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
