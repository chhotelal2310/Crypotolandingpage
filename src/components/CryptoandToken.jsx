import React from "react";
import "../styles/cryptoandtoken.css";
import cryptoTokenImageDetails from "../components/CryptoTokenImageDetails/cryptoTokenImageDetails";
const CryptoandToken = () => {
  return (
    <div className="CryptoandTokenMainContainer">
      <div className="CryptoandTokenBodyContainer">
        <div>
          <h1>Supported Cryptocurrencies and Tokens</h1>
        </div>

        <div className="CryptoandTokenGridContainer">
          {cryptoTokenImageDetails.map((item) => (
            <div key={item.id}>
              <img src={item.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoandToken;
