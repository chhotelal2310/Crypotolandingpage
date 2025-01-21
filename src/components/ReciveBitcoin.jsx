import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "../styles/recivebitcoin.css";

const ReciveBitcoin = () => {
    return (
        <>
            <div className="ReciveBitcoinMainContainer">
                <div className="ReciveBitCoinbodyContainer">
                    <div className="ReciveBitCoinbodyContainerLeft">
                        <h1>Buy, sell, send, and receive bitcoin</h1>
                        <h3>Over $10 billion in transactions per month.</h3>
                        <p className="ReciveBitCoinbodyContainerLeftparagraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                            aliquet turpis. Integer luctus magna mi, vel tempus felis tempor
                            ornare. Nullam ut arcu in elit viverra ornare. Vestibulum lobortis
                            non mauris eget tempor. Nam vestibulum enim ac ex suscipit varius.
                        </p>
                        <p className="ReciveBitCoinbodyContainerLeftparagraph">
                            Integer faucibus hendrerit ante sed euismod. Suspendisse potenti.
                            Praesent commodo pellentesque mi, at viverra quam porttitor
                            nec.Integer faucibus hendrerit ante sed euismod. Suspendisse
                            potenti. Praesent commodo pellentesque mi, at viverra quam
                            porttitor nec.
                        </p>
                        <div className="ArrowPointContainer">
                            <div>
                                <ArrowRightAltIcon sx={{ color: "#053D72" }} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div>
                                <ArrowRightAltIcon sx={{ color: "#053D72" }} />
                                <p>Eget nunc scelerisque viverra mauris.</p>
                            </div>
                            <div>
                                <ArrowRightAltIcon sx={{ color: "#053D72" }} />
                                <p>
                                    Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bitCoinScoreContainer">
                        <div className="gridContainer">
                            <div className="gridContainerItem">
                                <div class="half-circle half-circle1">
                                    <span>100%</span>
                                </div>
                            </div>

                            <div className="gridContainerContainent">
                                <h3>Bitcoin</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tincidunt mollis mi, ut porttitor.
                                </p>
                            </div>
                        </div>
                        <div className="gridContainer">
                            <div className="gridContainerItem">
                                <div class="half-circle half-circle2">
                                    <span>71%</span>
                                </div>
                            </div>

                            <div className="gridContainerContainent">
                                <h3>Litecoin</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tincidunt mollis mi, ut porttitor.
                                </p>
                            </div>
                        </div>
                        <div className="gridContainer">
                            <div className="gridContainerItem">
                                <div class="half-circle half-circle3 ">
                                    <span>71%</span>
                                </div>
                            </div>

                            <div className="gridContainerContainent">
                                <h3>Ethereum</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tincidunt mollis mi, ut porttitor.
                                </p>
                            </div>
                        </div>
                        <div className="gridContainer">
                            <div className="gridContainerItem">
                                <div class="half-circle half-circle4">
                                    <span>100%</span>
                                </div>
                            </div>

                            <div className="gridContainerContainent">
                                <h3>Ripple</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Tincidunt mollis mi, ut porttitor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="dividermainContainerRecivebitcoin">
                    <div className="divider"></div>
                </div>
            </div>
        </>
    );
};

export default ReciveBitcoin;
