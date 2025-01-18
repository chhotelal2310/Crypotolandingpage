import React from "react";
import leadinjectionlogo from "../images/leadinjectionlogo.svg";
import "../styles/header.css";
const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <img src={leadinjectionlogo} />
        <div className="headerTextContainer">
          <span>Home</span>
          <span>Features</span>
          <span>Supported Cryptocurrencies</span>
          <span>Blog</span>
          <button>Get Premium</button>
        </div>
      </div>
    </>
  );
};

export default Header;
