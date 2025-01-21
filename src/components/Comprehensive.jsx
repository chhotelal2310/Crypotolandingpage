import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import "../styles/comprehesive.css";
import PhoneImage from "../images/PhoneImage.png";

const Comprehensive = () => {
  return (
    <div className="Comprehesive">
      <div className="coprehesiveTitleandSubTitle">
        <h1>Comprehensive Features</h1>
        <p>Take your portfolio to the next level with top features</p>
      </div>

      <div className="coprehesivecardContainer">
        <div className="comprehesiveContainentContainer">
          <div className="cardHeadingandContainet">
            <div>
              <h2>Portfolio Overview</h2>
              <p>
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Sed
                tincidunt mollis mi, ut porttitor orci tempor nec Nam eget magna
                id mi mattis matt
              </p>
            </div>
            <div>
              <NotificationsActiveIcon
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
              <div className="IconTextLine"></div>
            </div>
          </div>

          <div className="cardHeadingandContainet">
            <div>
              <h2>Charts and Orderbook</h2>
              <p>
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Sed
                tincidunt mollis mi, ut porttitor orci tempor nec Nam eget magna
                id mi mattis matt
              </p>
            </div>
            <div>
              <NotificationsActiveIcon
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
              <div className="IconTextLine"></div>
            </div>
          </div>
          <div className="cardHeadingandContainet">
            <div>
              <h2>Latest News Stories</h2>
              <p>
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Sed
                tincidunt mollis mi, ut porttitor orci tempor nec Nam eget magna
                id mi mattis matt
              </p>
            </div>
            <div>
              <NotificationsActiveIcon
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
              <div className="IconTextLine"></div>
            </div>
          </div>
        </div>

        <div className="phoneImage">
          <img src={PhoneImage} />
        </div>

        <div className="comprehesiveContainentContainer">
          <div className="cardHeadingandContainet secondeCardConatiner">
            <div>
              <NotificationsActiveIcon
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
              <div className="IconTextLine"></div>
            </div>
            <div className="secondeCardIcon">
              <h2>Price Notifications</h2>
              <p>
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Sed
                tincidunt mollis mi, ut porttitor orci tempor nec Nam eget magna
                id mi mattis matt
              </p>
            </div>
          </div>
          <div className="cardHeadingandContainet">
            <div>
              <NotificationsActiveIcon
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
              <div className="IconTextLine"></div>
            </div>
            <div className="secondeCardIcon">
              <h2>Over 100 Cryptocurrencies</h2>
              <p>
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Sed
                tincidunt mollis mi, ut porttitor orci tempor nec Nam eget magna
                id mi mattis matt
              </p>
            </div>
          </div>
          <div className="cardHeadingandContainet">
            <div>
              <NotificationsActiveIcon
                sx={{
                  width: "50px",
                  height: "50px",
                }}
              />
              <div className="IconTextLine"></div>
            </div>
            <div className="secondeCardIcon">
              <h2>Global Coverage</h2>
              <p>
                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Sed
                tincidunt mollis mi, ut porttitor orci tempor nec Nam eget magna
                id mi mattis matt
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
