import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Items from "../FooterDetails/data";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faLinkedinIn,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="FooterMainContainer">
        <div className="FooterBodyContainer">
          <div className="footerbodyLeftContainer">
            <p>
              Build Your WordPress Landing Page in Less Than 5 Minutes with
              Leadinjection
            </p>
            <p>
              Leadinjection is a WordPress landing page theme built with HTML5,
              CSS3 and Bootstrap version 3.x. It was designed for professional
              marketers, business owners and affiliates to launch landing pages
              within minutes.
            </p>
            <div>
              <Button
                variant="contained"
                sx={{
                  width: "14rem",
                  height: "3rem",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  fontWeight: "900",
                  backgroundColor: "#F9FBFF",
                  color: "#00C6CF",
                  border: "0.2rem solid #00C6CF",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#00C6CF",
                  },
                }}
              >
                Get Leadinjection Now
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: "9rem",
                  height: "3rem",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  fontWeight: "900",
                  backgroundColor: "#F9FBFF",
                  color: "#64748D",
                  border: "0.2rem solid #63738C",
                  "&:hover": {
                    color: "white",
                    backgroundColor: " #63738C",
                  },
                }}
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="footerbodyRightContainer">
            {Items.map((item) => {
              return (
                <div className="footerLinkContainer">
                  <div className="footerLinkTitle">{item.title}</div>
                  {item.subtitle.map((val) => {
                    return (
                      <div className="FooterLinkTextAndArrow">
                        <span>{val}</span>
                        <ArrowForwardOutlinedIcon
                          sx={{
                            fontSize: "1rem",
                            color: "#053D72",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="footerDivider"></div>
        <div className="footerCopyRightandIcon">
          <p>
            Copyright © 2018 <span>Leadinjection</span>. Powered by{" "}
            <span>WordPress</span>.
          </p>
          <div className="footerIconContainer">
            <FontAwesomeIcon icon={faFacebookF} className="footer-icon" />
            <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
            <FontAwesomeIcon icon={faGooglePlusG} className="footer-icon" />
            <FontAwesomeIcon icon={faLinkedinIn} className="footer-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
