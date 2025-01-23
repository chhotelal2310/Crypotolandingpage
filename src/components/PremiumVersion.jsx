import React from "react";
import "../styles/premiumversion.css";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const PremiumVersion = () => {
    return (
        <>
            <div className="PremiumversionMainContaianer">
                <div className="PremiumMainContainerTitleandSubTitle">
                    <h1>Upgrade to Premium Version</h1>
                    <p> Your Premium license comes with one year of premium class support</p>
                </div>
                <div className="PremiumversionBodyContaianer">
                    <div className="PremiumVersionGridContainer">
                        <div className="PremiumFirstContainer"></div>
                        <div className="PremiunsecondRowFirsColumn">PRICE</div>
                        <div className="GridItemTextContainer">
                            <div className="PremiunsecondRowFirsColumn">RESPONSIBLE DESIGN</div>
                            <div className="PremiunsecondRowFirsColumn">EXAMPLES</div>
                            <div className="PremiunsecondRowFirsColumn">HTML5 & CSS3</div>
                            <div className="PremiunsecondRowFirsColumn">PSD INCLUDED</div>
                            <div className="PremiunsecondRowFirsColumn">LIGHT AND CLEAN</div>
                        </div>
                        <div></div>
                    </div>


                    <div className="PremiumVersionGridContainer">
                        <div className="PremiumFirstContainer">
                            <h2> Single Device</h2>
                            <p>Perfect for small budget</p>
                        </div>
                        <div className="DolerPerMonthSeconodColumnSecondRow">
                            <span>$</span>
                            <span>19</span>
                            <span>/mo</span>
                        </div>
                        <div className="GridItemTextContainer GridItemTextContainer234">
                            <div>Responsible design</div>
                            <div>2</div>
                            <div><CheckOutlinedIcon sx={{ color: '#32BA5B', fontSize: '1.5rem' }} /></div>
                            <div>no</div>
                            <div><CloseOutlinedIcon sx={{ color: '#F55955', fontSize: '1.5rem' }} /></div>
                        </div>
                        <div className="GridItemTextContainerButton">
                            <button>Get Premium Now</button>
                        </div>
                    </div>

                    <div className="PremiumVersionGridContainer PremiumVersionGridContaineractive">
                        <div className="PremiumFirstContainer">
                            <h2>3 Devices</h2>
                            <p>Perfect for medium budget</p>
                        </div>
                        <div className="DolerPerMonthSeconodColumnSecondRow">
                            <span>$</span>
                            <span>49</span>
                            <span>/mo</span>
                        </div>
                        <div className="GridItemTextContainer GridItemTextContainer234">
                            <div>Responsible design</div>
                            <div>10</div>
                            <div><CheckOutlinedIcon sx={{ color: '#32BA5B', fontSize: '1.5rem' }} /></div>
                            <div>2 PSD's</div>
                            <div><CloseOutlinedIcon sx={{ color: '#F55955', fontSize: '1.5rem' }} /></div>
                        </div>
                        <div className="GridItemTextContainerButton GridItemTextContainerButtonActive"><button>Get Premium Now</button></div>
                    </div>

                    <div className="PremiumVersionGridContainer">

                        <div className="PremiumFirstContainer">
                            <h2>Unlimited Devices</h2>
                            <p>Perfect for large budget</p>
                        </div>
                        <div className="DolerPerMonthSeconodColumnSecondRow">
                            <span>$</span>
                            <span>99</span>
                            <span>/mo</span>
                        </div>
                        <div className="GridItemTextContainer GridItemTextContainer234">
                            <div>Responsible design</div>
                            <div>Unlimited</div>
                            <div><CheckOutlinedIcon sx={{ color: '#32BA5B', fontSize: '1.5rem' }} /></div>
                            <div>5 PSD's</div>
                            <div><CheckOutlinedIcon sx={{ color: '#32BA5B', fontSize: '1.5rem' }} /></div>
                        </div>
                        <div className="GridItemTextContainerButton"><button>Get Premium Now</button></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PremiumVersion;
