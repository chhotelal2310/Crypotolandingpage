import React from "react";
import {
  comprehesiveFeatures1,
  comprehesiveFeatures2,
} from "../components/compehesiveFeatures/comprehesiveFeatures";
import PhoneImage from "../images/PhoneImage.png";
import "../styles/comprehesive.css";

const Comprehensive = () => {
  return (
    <div className="Comprehesive">
      <div className="coprehesiveTitleandSubTitle">
        <h1>Comprehensive Features</h1>
        <p>Take your portfolio to the next level with top features</p>
      </div>

      <div className="coprehesivecardContainer">
        <div className="comprehesiveContainentContainer">
          {comprehesiveFeatures1.map((item) => {
            return (
              <div key={item.id} className="cardHeadingandContainet">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div>
                  <item.IconUrl
                    sx={{
                      width: "50px",
                      height: "50px",
                      color: "#00C6CF",
                    }}
                  />
                  <div className="IconTextLine"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="phoneImage">
          <img src={PhoneImage} />
        </div>

        <div className="comprehesiveContainentContainer">
          {comprehesiveFeatures2.map((item) => {
            return (
              <div
                key={item.id}
                className="cardHeadingandContainet secondeCardConatiner"
              >
                <div>
                  <item.IconUrl
                    sx={{
                      width: "50px",
                      height: "50px",
                      color: "#00C6CF",
                    }}
                  />
                  <div className="IconTextLine"></div>
                </div>
                <div className="secondeCardIcon">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
