import React from "react";
import "../styles/cryptocurrencyheadPersion.css";
import CryptoHeadPersionDetail from "./CryptoHeadPersionDetail";

const CryptoCurrencyHeadPersion = () => {
  return (
    <>
      <div className="CryptoHeasPersionMainContianer">
        <div className="CryptoHeasPersionBodyContianer">
          <div className="CryptoCurrencyMainContianerTitleandSubTitle">
            <h1>Any questions about our Cryptocurrency Wallet?</h1>
            <p>
              Do you have any questions about our app? Don’t hesitate to get in
              touch with us mail@leadinjection.com
            </p>
          </div>
          <div className="GridHeadPersionContainer">
            <CryptoHeadPersionDetail />
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoCurrencyHeadPersion;
