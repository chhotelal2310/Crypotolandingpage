import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../styles/emailsubscribe.css";
const EmailSubscribe = () => {
    return (
        <>
            <div className="EmailSubsCribeMainContainer">
                <div className="EmailsubscribebodyContainer">
                    <div className="emailsubscribTitleandSubTitle">
                        <h1>Subscribe to our Newsletter</h1>
                        <p>
                            Get the latest industry updates, insider perspectives and market
                            analysis.
                        </p>
                    </div>
                    <div className="EmailandButtonContainer">
                        <TextField
                            type="text"
                            placeholder="Enter Your E-Mail-Address"
                            sx={{
                                width: "30rem",
                                backgroundColor: "white",
                                "& .MuiInputBase-input::placeholder": {
                                    fontSize: "1.2rem",
                                    fontWeight: '600'
                                },
                                "& .MuiInputBase-root-MuiOutlinedInput-root": {
                                    borderRadius: '0px'
                                    // border-radius: 4px;
                                },
                                borderTopLeftRadius: '0.5rem',
                                borderBottomLeftRadius: "0.5rem"

                                // borderRadius: '0.5rem'
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                width: "12rem",
                                height: "3.5rem",
                                backgroundColor: "#00C6CF",
                                fontWeight: "700",
                                fontSize: "1.2rem",
                                textTransform: "capitalize",
                            }}
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmailSubscribe;
