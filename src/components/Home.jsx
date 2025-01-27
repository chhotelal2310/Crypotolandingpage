import React from "react";
import appstoreImage from "../images/appstoreImage.svg";
import playstoreImage from "../images/playstoreImage.svg";
import BitcoinSvg from "./BitcoinSvg";
import EthernumIcon from "./EthernumIcon";
import CryptosiderImage from "../images/CryptoSiderImage.png";
import CryptomackbookImage from "../images/CryptomacbookImage.png";
import cryptoComputerImage from "../images/cryptoComputerImage.png";
import "../styles/home.css";

function Home() {
  return (
    <>
      <div className="HomeMainContainer">
        <div className="HomeBodyConatiner">
          <div className="HomeContainerTitleandSubTitle">
            <h1>Bitcoin, ICO & Crptocurrency Portfolio</h1>
            <p>Secure-Multi-Coin Wallet for Bitcoin Actions and Token</p>
          </div>
          <div className="HomeContainerAppandPlaytoreImage">
            <img src={appstoreImage} />
            <img src={playstoreImage} />
          </div>
          <BitcoinSvg />
          <EthernumIcon />
          <div className="CryptoComputerContainentImageContainer">
            <div className="CryptosiderImage">
              <img src={CryptosiderImage} />
            </div>

            <div className="cryptomackbookandcontainentImage">
              <div className="MackbookandContainentImage">
                <img
                  src={CryptomackbookImage}
                  className="cryptomackbookImageFirstImage"
                />
                <img
                  src={cryptoComputerImage}
                  className="cryptContainentImageSecond"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
