import React from "react";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import "../styles/ourapp.css";
import database from "../images/CaradIcon/database.jpg";

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
          <div className="featureItem">
            <div className="iconContainer">
              <HexagonOutlinedIcon
                sx={{
                  width: "60px",
                  height: "60px",
                  strokeWidth: 1,
                }}
              />
              <img src={database} />
            </div>
            <div className="textContainer">
              <h3>Multi-Coin & Multi-Asset</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt mollis mi, ut porttitor orci tempor nec. Nam eget
                magna id mi mattis matt.
              </p>
            </div>
          </div>

          <div className="featureItem">
            <div className="iconContainer">
              <HexagonOutlinedIcon
                sx={{
                  width: "60px",
                  height: "60px",
                  strokeWidth: 1,
                }}
              />
              <img src={database} />
            </div>
            <div className="textContainer">
              <h3>Real-Time Tracking</h3>
              <p>
                Stay up-to-date with real-time market data and track your
                portfolio performance at any time.
              </p>
            </div>
          </div>

          <div className="featureItem">
            <div className="iconContainer">
              <HexagonOutlinedIcon
                sx={{
                  width: "60px",
                  height: "60px",
                  strokeWidth: 1,
                }}
              />
              <img src={database} />
            </div>
            <div className="textContainer">
              <h3>Secure Transactions</h3>
              <p>
                Our app ensures your investments are always secure with
                cutting-edge encryption technology.
              </p>
            </div>
          </div>
        </div>

        <div className="featuresContainer">
          <div className="featureItem">
            <div className="iconContainer">
              <HexagonOutlinedIcon
                sx={{
                  width: "60px",
                  height: "60px",
                  strokeWidth: 1,
                }}
              />
              <img src={database} />
            </div>
            <div className="textContainer">
              <h3>Multi-Coin & Multi-Asset</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt mollis mi, ut porttitor orci tempor nec. Nam eget
                magna id mi mattis matt.
              </p>
            </div>
          </div>

          <div className="featureItem">
            <div className="iconContainer">
              <HexagonOutlinedIcon
                sx={{
                  width: "60px",
                  height: "60px",
                  strokeWidth: 1,
                }}
              />
              <img src={database} />
            </div>
            <div className="textContainer">
              <h3>Real-Time Tracking</h3>
              <p>
                Stay up-to-date with real-time market data and track your
                portfolio performance at any time.
              </p>
            </div>
          </div>

          <div className="featureItem">
            <div className="iconContainer">
              <HexagonOutlinedIcon
                sx={{
                  width: "60px",
                  height: "60px",
                  strokeWidth: 1,
                }}
              />
              <img src={database} />
            </div>
            <div className="textContainer">
              <h3>Secure Transactions</h3>
              <p>
                Our app ensures your investments are always secure with
                cutting-edge encryption technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="dividermainContainer">
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default OurApp;
