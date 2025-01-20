import React from "react";
import "../styles/EthernumIcon.css";
import ethernum_icon1 from "../images/ethernumImage/ethereum-icon1.png";
import ethernum_icon2 from "../images/ethernumImage/ethereum-icon2.png";
import ethernum_icon3 from "../images/ethernumImage/ethereum-icon3.png";
import ethernum_icon4 from "../images/ethernumImage/ethereum-icon4.png";
import ethernum_icon5 from "../images/ethernumImage/ethereum-icon5.png";
import ethernum_icon6 from "../images/ethernumImage/ethereum-icon6.png";
import ethernum_icon7 from "../images/ethernumImage/ethereum-icon7.png";

const EthernumIcon = () => {
  return (
    <div className="ethernummainContainer">
      <div className="ethernumContainer">
        <img
          src={ethernum_icon1}
          style={{
            top: "20px",
            position: "absolute",
            width: "60px",
            height: "60px",
          }}
        />
        <img
          src={ethernum_icon2}
          style={{
            top: "10px",
            position: "absolute",
            width: "40px",
            height: "40px",
            right: "260px",
          }}
        />
        <img
          src={ethernum_icon3}
          style={{
            top: "50px",
            position: "absolute",
            width: "70px",
            height: "70px",
            right: "180px",
          }}
        />
        <img
          src={ethernum_icon4}
          style={{
            top: "90px",
            position: "absolute",
            width: "90px",
            height: "90px",
            right: "100px",
          }}
        />
        <img
          src={ethernum_icon4}
          style={{
            top: "100px",
            position: "absolute",
            width: "110px",
            height: "100px",
            right: "300px",
          }}
        />
        <img
          src={ethernum_icon5}
          style={{
            top: "170px",
            position: "absolute",
            width: "90px",
            height: "90px",
            right: "230px",
          }}
        />
        <img
          src={ethernum_icon6}
          style={{
            top: "220px",
            position: "absolute",
            width: "90px",
            height: "90px",
            right: "100px",
          }}
        />

        <img
          src={ethernum_icon7}
          style={{
            top: "270px",
            position: "absolute",
            width: "90px",
            height: "100px",
            right: "200px",
          }}
        />
      </div>
    </div>
  );
};

export default EthernumIcon;
