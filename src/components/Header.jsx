import React from "react";
import leadinjectionlogo from "../images/leadinjectionlogo.svg";
import "../styles/header.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <img src={leadinjectionlogo} />
        <div className="headerTextContainer">
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
          <NavLink to="/footer" element={<Footer />}>
            <span>Features</span>
          </NavLink>

          <span>Supported Cryptocurrencies</span>
          <span>Blog</span>
          <button>Get Premium</button>
        </div>
      </div>
    </>
  );
};

export default Header;
