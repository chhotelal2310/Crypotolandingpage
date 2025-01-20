import React from "react";
import bitcoin_icon1 from "../images/bitBackgroundImage/bitcoin-icon1.png";
import bitcoin_icon2 from "../images/bitBackgroundImage/bitcoin-icon2.png";
import bitcoin_icon3 from "../images/bitBackgroundImage/bitcoin-icon3.png";
import bitcoin_icon4 from "../images/bitBackgroundImage/bitcoin-icon4.png";
import bitcoin_icon5 from "../images/bitBackgroundImage/bitcoin-icon5.png";
import bitcoin_icon6 from "../images/bitBackgroundImage/bitcoin-icon6.png";
import bitcoin_icon7 from "../images/bitBackgroundImage/bitcoin-icon7.png";
import bitcoin_icon8 from "../images/bitBackgroundImage/bitcoin-icon8.png";
// import bitcoin_icon7 from "../images/bitBackgroundImage/bitcoin-icon7.png";
const BitcoinSvg = () => {
  return (
    <>
      <div className="bitCointBackgroundImageContainer">
        <img
          src={bitcoin_icon1}
          style={{
            width: "80px",
            height: "80px",
          }}
        />
        <img
          src={bitcoin_icon2}
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            top: "5px",
            left: "100px",
          }}
        />
        <img
          src={bitcoin_icon3}
          style={{
            width: "60px",
            height: "60px",
            position: "absolute",
            top: "130px",
            left: "30px",
          }}
        />
        <img
          src={bitcoin_icon4}
          style={{
            width: "80px",
            height: "80px",
            position: "absolute",
            top: "150px",
            left: "150px",
          }}
        />

        <img
          src={bitcoin_icon5}
          style={{
            width: "90px",
            height: "90px",
            position: "absolute",
            top: "-10px",
            left: "250px",
          }}
        />
        <img
          src={bitcoin_icon6}
          style={{
            position: "absolute",
            width: "110px",
            height: "110px",
            top: "240px",
            left: "10px",
          }}
        />

        <img
          src={bitcoin_icon7}
          style={{
            width: "40px",
            height: "40px",
            position: "absolute",
            top: "130px",
            left: "300px",
          }}
        />

        <img
          src={bitcoin_icon8}
          style={{
            width: "25px",
            height: "25px",
            position: "absolute",
            top: "250px",
            left: "250px",
          }}
        />
      </div>
    </>
  );
};

export default BitcoinSvg;
