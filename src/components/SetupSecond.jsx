import React from "react";
import "../styles/setupsecond.css";
import app_screen from "../images/SetupSecondImage/app-screens.png";
const SetupSecond = () => {
    return (
        <>
            <div className="SetupMainContainer">
                <div className="SetupBodyContainer">
                    <div className="SetupBodyContainerLeft">
                        <div className="SetupBodyContainerLeftSubTitleandHeading">
                            <h1>Setup in Seconds</h1>
                            <h2>A simple way to get started with crypto</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                                aliquet turpis. Integer luctus magna mi, vel tempus felis tempor
                                ornare. Nullam ut arcu in elit viverra ornare.
                            </p>
                        </div>

                        <div className="bankandmulticoinContainer">
                            <div className="bankDetailsContainer">
                                <div className="banckContaintSubtile">
                                    <h2>Better than a bank</h2>
                                    <p>Understanding Colors</p>
                                </div>
                                <div>
                                    <p className="bankContainent">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                        nec aliquet turpis. Integer luctus magna mi, vel tempus
                                        felis tempor ornare.
                                    </p>
                                </div>
                            </div>

                            <div className="bankDetailsContainer">
                                <div className="banckContaintSubtile">
                                    <h2>Better than a bank</h2>
                                    <p>Understanding Colors</p>
                                </div>
                                <div>
                                    <p className="bankContainent">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                        nec aliquet turpis. Integer luctus magna mi, vel tempus
                                        felis tempor ornare.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="SetupBodyContainerRight">
                        <img src={app_screen} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SetupSecond;
