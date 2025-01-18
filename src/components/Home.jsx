import React from "react";
import appstoreImage from "../images/appstoreImage.svg";
import playstoreImage from "../images/playstoreImage.svg";
import cryptoComputerImage from "../images/cryptoComputerImage.png";
import "../styles/home.css";

function Home() {
  return (
    <>
      <div className="HomeContainer">
        <div className="HomeContainerTitleandSubTitle">
          <h1>Bitcoin, ICO & Crptocurrency Portfolio</h1>
          <p>Secure-Multi-Coin Wallet for Bitcoin Actions and Token</p>
        </div>
        <div className="HomeContainerAppandPlaytoreImage">
          <img src={appstoreImage} />
          <img src={playstoreImage} />
        </div>
      </div>
    </>
  );
}

export default Home;
