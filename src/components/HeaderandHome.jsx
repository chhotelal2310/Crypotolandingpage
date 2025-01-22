import React from "react";
import Header from "./Header";
import Home from "./Home";
import CryptosiderImage from "../images/CryptoSiderImage.png";
import CryptomackbookImage from "../images/CryptomacbookImage.png";
import cryptoComputerImage from "../images/cryptoComputerImage.png";
import OurApp from "./OurApp";
import Comprehensive from "./Comprehensive";
import SetupSecond from "./SetupSecond";
import ReciveBitcoin from "./ReciveBitcoin";
import CryptoandToken from "./CryptoandToken";
import CryptoCurrencyWllate from "./CryptoCurrencyWallte";
import PremiumVersion from "./PremiumVersion";

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
      <Comprehensive />
      <SetupSecond />
      <ReciveBitcoin />
      <CryptoandToken />
      <CryptoCurrencyWllate />
      <PremiumVersion />
    </>
  );
};

export default HeaderandHome;
