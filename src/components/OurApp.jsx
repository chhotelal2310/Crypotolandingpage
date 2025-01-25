import React from "react";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import "../styles/ourapp.css";
import {
  ourappContainentData1,
  ourappContainentData2,
} from "./OurAppContainentDetails/ourappContainentData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurApp = () => {
  return (
    <div className="ourAppContainer">
      <div className="ourAppTitleandSubTitleContainer">
        <h1>Reasons Why You Should Choose Our App</h1>
        <p>
          Easy to use tools to keep track of all your cryptocurrency investments
        </p>
      </div>

      <div className="ourCardmainContainer">
        <div className="featuresContainer">
          {ourappContainentData1.map((item) => {
            // console.log(item.iconurl);
            return (
              <div key={item.id} className="featureItem">
                <div>
                  <div className="iconContainer">
                    <FontAwesomeIcon
                      icon={item.iconurl}
                      beat
                      className="imgContainer"
                    />
                    <HexagonOutlinedIcon
                      sx={{
                        width: "64px",
                        height: "64px",
                      }}
                    />
                  </div>
                </div>

                <div className="textContainer">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="featuresContainer">
          {ourappContainentData2.map((item) => {
            // console.log(item.iconurl);
            return (
              <div key={item.id} className="featureItem">
                <div>
                  <div className="iconContainer">
                    <FontAwesomeIcon
                      icon={item.iconurl}
                      beat
                      className="imgContainer"
                    />
                    <HexagonOutlinedIcon
                      sx={{
                        width: "64px",
                        height: "64px",
                      }}
                    />
                  </div>
                </div>

                <div className="textContainer">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="dividermainContainer">
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default OurApp;
