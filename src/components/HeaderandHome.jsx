import React from "react";
import Header from "./Header";
import Home from "./Home";
import CryptosiderImage from "../images/CryptoSiderImage.png";
import CryptomackbookImage from "../images/CryptomacbookImage.png";
import cryptoComputerImage from "../images/cryptoComputerImage.png";
import OurApp from "./OurApp";

const HeaderandHome = () => {
  return (
    <>
      <div className="headerandhomeContainer">
        <Header />
        <Home />
        <div className="CryptoContainer">
          <div className="CryptosiderImage">
            <img src={CryptosiderImage} />
          </div>
          <div className="CrptomackbookImage">
            <div className="cryptomackbookandcontainentImage">
              <img src={CryptomackbookImage} />
              <img
                className="cryptContainetImage"
                src={cryptoComputerImage}
                style={{
                  top: "442px",
                  left: "645px",
                  zIndex: 1,
                  width: "630px",
                  height: "392px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <OurApp />
    </>
  );
};

export default HeaderandHome;
