import React from "react";
import "../styles/premiumversion.css";

const PremiumVersion = () => {
    return (
        <>
            <div className="PremiumversionMainContaianer">
                <div>
                    <h1>Upgrade to Premium Version</h1>
                    <p>
                        Your Premium license comes with one year of premium class support
                    </p>
                </div>
                <div className="PremiumversionBodyContaianer">
                    <div className="PremiumVersionGridContainer">
                        <div></div>
                        <div>PRICE</div>
                        <div className="GridItemTextContainer">
                            <div>RESPONSIBLE DESIGN</div>
                            <div>
                                EXAMPLES<p></p>
                            </div>
                            <div>HTML5 & CSS3</div>
                            <div>PSD INCLUDED</div>
                            <div>LIGHT AND CLEAN</div>
                        </div>
                        <div></div>
                    </div>


                    <div className="PremiumVersionGridContainer">
                        <div>
                            <h2> Single Device</h2>
                            <p>Perfect for small budget</p>
                        </div>
                        <div>
                            <span>$</span>
                            <span>19</span>
                            <span>/mo</span>
                        </div>
                        <div className="GridItemTextContainer">
                            <div>Responsible design</div>
                            <div>2</div>
                            <div>33</div>
                            <div>no</div>
                            <div>35</div>
                        </div>
                        <div>
                            <button>Premium</button>
                        </div>
                    </div>

                    <div className="PremiumVersionGridContainer">
                        <div>
                            <h2>3 Devices</h2>
                            <p>Perfect for medium budget</p>
                        </div>
                        <div>
                            <span>$</span>
                            <span>49</span>
                            <span>/mo</span>
                        </div>
                        <div className="GridItemTextContainer">
                            <div>Responsible design</div>
                            <div>10</div>
                            <div>33</div>
                            <div>2 PSD's</div>
                            <div>35</div>
                        </div>
                        <div><button>Premium</button></div>
                    </div>

                    <div className="PremiumVersionGridContainer">

                        <div>
                            <h2>Unlimited Devices</h2>
                            <p>Perfect for large budget</p></div>
                        <div><span>$</span>
                            <span>99</span>
                            <span>/mo</span></div>
                        <div className="GridItemTextContainer">
                            <div>Responsible design</div>
                            <div>Unlimited</div>
                            <div>33</div>
                            <div>5 PSD's</div>
                            <div>35</div>
                        </div>
                        <div><button>premium button</button></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PremiumVersion;
