import React from "react";
import "../styles/cryptocurrencywallet.css";
import ios_store_button from "../images/cryptocurrencywallet/ios-store-button.svg";
import google_play_button from "../images/cryptocurrencywallet/google-play-button.svg";
import windows_store_button from "../images/cryptocurrencywallet/windows-store-button.svg";
// import Rating from "@mui/material/Rating";
import Rating from "@mui/material/Rating";
import review_1 from "../images/cryptocurrencywallet/review-1.png";
import review_2 from "../images/cryptocurrencywallet/review-2.png";
import review_3 from "../images/cryptocurrencywallet/review-3.png";

const CryptoCurrencyWllate = () => {
  return (
    <>
      <div className="CryptoWalletMainContainer">
        <div className="CyptoWalletBodyContainer">
          <div className="DownloadCryptoWallet">
            <h1>Get Your Copy Now</h1>
            <h2>Download the latest version of our Cryptocurrency Wallet</h2>
            <div className="DownloadImageContainer">
              <img src={ios_store_button} />
              <img src={google_play_button} />
              <img src={windows_store_button} />
            </div>
            <p>
              Download the latest source code from <span>GitHub ›</span>
            </p>
          </div>
          <div className="WalletDivider"></div>

          <div className="WalletreviewContainer">
            <div className="reviewContainer">
              <img src={review_1} />
              <div>
                <p>
                  This makes it so easy to keep track of my crypto. No need to
                  log into my wallets, exchanges, etc. Unless you need to update
                  how much you own, you just set it and forget it!
                </p>
                <div className="reviewTitle">
                  <h4>Hunter Reeves envato.com</h4>
                  <Rating name="size-small" defaultValue={5} size="small" />
                </div>
              </div>
            </div>

            <div className="reviewContainer">
              <img src={review_2} />
              <div>
                <p>
                  This makes it so easy to keep track of my crypto. No need to
                  log into my wallets, exchanges, etc. Unless you need to update
                  how much you own, you just set it and forget it!
                </p>
                <div className="reviewTitle">
                  <h4>Victoria Dennis envato.com</h4>
                  <Rating name="size-small" defaultValue={5} size="small" />
                </div>
              </div>
            </div>

            <div className="reviewContainer">
              <img src={review_3} />
              <div>
                <p>
                  This makes it so easy to keep track of my crypto. No need to
                  log into my wallets, exchanges, etc. Unless you need to update
                  how much you own, you just set it and forget it!
                </p>
                <div className="reviewTitle">
                  <h4>Cody Jacobs envato.com</h4>
                  <Rating name="size-small" defaultValue={5} size="small" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoCurrencyWllate;
