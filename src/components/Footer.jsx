import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
const Footer = () => {
    let Items = [
        {
            id: "1",
            title: "Support",
            subtitle: ["Homepage", "Blog", "Features", "Currencies"],
        },
        {
            id: "2",
            title: "Support",
            subtitle: ["Homepage", "Blog", "Features", "Currencies"],
        },
        {
            id: "2",
            title: "Support",
            subtitle: ["Homepage", "Blog", "Features", "Currencies"],
        },
    ];
    return (
        <>
            <div className="FooterMainContainer">
                <div>
                    <div>
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
                            <Button variant="contained">Contained</Button>
                            <Button variant="contained">Contained</Button>
                        </div>
                    </div>

                    <div>
                        <div>
                            {Items.map((item) => {
                                return (
                                    <>
                                        <div>{item.title}</div>
                                        {item.subtitle.map((val) => {
                                            return (
                                                <div>
                                                    <span>{val}</span>
                                                    <ArrowForwardOutlinedIcon />
                                                </div>
                                            );
                                        })}
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
