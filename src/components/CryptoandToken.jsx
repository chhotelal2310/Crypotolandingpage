import React from "react";
import "../styles/cryptoandtoken.css";
import bicoin from "../images/CryptoToken/bitcoin.svg"
import monero from "../images/CryptoToken/monero.svg"
import dao from "../images/CryptoToken/dao.svg"
import litecoin from "../images/CryptoToken/litecoin.svg";
import ethereum from "../images/CryptoToken/ethereum.svg";
import dash from "../images/CryptoToken/dash.svg";
import dogcoin from "../images/CryptoToken/dogcoin.svg";
import namecoin from "../images/CryptoToken/namecoin.svg";
import novacoin from "../images/CryptoToken/novacoin.svg";
import lisk from "../images/CryptoToken/lisk.svg";
import clams from "../images/CryptoToken/clams.svg";
import peercoin from "../images/CryptoToken/peercoin.svg";
import vericoin from "../images/CryptoToken/vericoin.svg";
import factoum from "../images/CryptoToken/factoum.svg";
import vertcoin from "../images/CryptoToken/vertcoin.svg";

const CryptoandToken = () => {
    return (
        <div className="CryptoandTokenMainContainer">
            <div className="CryptoandTokenBodyContainer">
                <div>
                    <h1>Supported Cryptocurrencies and Tokens</h1>
                </div>

                <div className="CryptoandTokenGridContainer">
                    <div><img src={bicoin} /></div>
                    <div><img src={monero} /></div>
                    <div><img src={dao} /></div>
                    <div><img src={litecoin} /></div>
                    <div><img src={ethereum} /></div>
                    <div><img src={dash} /></div>
                    <div><img src={dogcoin} /></div>
                    <div><img src={namecoin} /></div>
                    <div><img src={novacoin} /></div>
                    <div><img src={lisk} /></div>
                    <div><img src={clams} /></div>
                    <div><img src={peercoin} /></div>
                    <div><img src={vericoin} /></div>
                    <div><img src={factoum} /></div>
                    <div><img src={vertcoin} /></div>
                </div>
            </div>
        </div>
    );
};

export default CryptoandToken;
