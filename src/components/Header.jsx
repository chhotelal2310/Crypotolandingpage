import React, { useState } from "react";
import leadinjectionlogo from "../images/leadinjectionlogo.svg";
import { Link } from "react-scroll";
import "../styles/header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="headerContainer">
        <img src={leadinjectionlogo} alt="Leadinjection Logo" />
        <div className="headerTextContainer">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => handleActiveLink("home")}
            className={
              activeLink === "home" ? "active-link" : "not-active-link"
            }
          >
            <span>Home</span>
          </Link>

          <Link
            to="comprehensive"
            smooth={true}
            duration={500}
            onClick={() => handleActiveLink("comprehensive")}
            className={
              activeLink === "comprehensive" ? "active-link" : "not-active-link"
            }
          >
            <span>Features</span>
          </Link>

          <Link
            to="cyptoandToken"
            smooth={true}
            duration={500}
            onClick={() => handleActiveLink("cyptoandToken")}
            className={
              activeLink === "cyptoandToken" ? "active-link" : "not-active-link"
            }
          >
            <span>Supported Cryptocurrencies</span>
          </Link>

          <Link
            to="cryptoCurrencyWllate"
            smooth={true}
            duration={500}
            onClick={() => handleActiveLink("cryptoCurrencyWllate")}
            className={
              activeLink === "cryptoCurrencyWllate"
                ? "active-link"
                : "not-active-link"
            }
          >
            <span>Download</span>
          </Link>

          <span>Blog</span>
          <button>Get Premium</button>
        </div>
      </div>
    </>
  );
};

export default Header;
