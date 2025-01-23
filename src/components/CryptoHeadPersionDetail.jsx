import React from 'react';
import profile_Image1 from "../images/CryptoHeadPersion/profile-imge-1.png";
import profile_Image2 from "../images/CryptoHeadPersion/profile-imge-2.png";
import profile_Image3 from "../images/CryptoHeadPersion/profile-imge-3.png";
import profile_Image4 from "../images/CryptoHeadPersion/profile-imge-4.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';

const CryptoHeadPersionDetail = () => {
    let data = [
        {
            id: '1',
            url: profile_Image1,
            title: 'Jeffrey McDonald',
            subtile: 'CEO / CO-FOUNDER',
            decription: 'Lorem ipsum dolor sit amet, consetet sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'
        },
        {
            id: '2',
            url: profile_Image3,
            title: 'Cornelia Stephens',
            subtile: 'IT CLIENT MANAGER',
            decription: 'Eget nunc scelerisque viverra mauris. Blandit aliquam etiam erat in velit scelerisque in. Turpis aliquam in eu mi bibendum neque erat.'
        },
        {
            id: '3',
            url: profile_Image2,
            title: 'Maggie Delgado',
            subtile: 'CUSTOMER SUPPORT',
            decription: 'Blandit nunc scelerisque viverra mauris. nonue eirmod aliquam etiam erat in velit scelerisque in. Turpis  aliquam in eu mi bibendum erat'
        },
        {
            id: '4',
            url: profile_Image4,
            title: 'Jonathan Hale',
            subtile: 'IT CLIENT MANAGER',
            decription: 'Turpis ipsum dolor sit amet, consetet sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'
        }
    ]

    return (
        <>

            {data.map((item) => {
                return (
                    <div className="GridHeadPersionBodyContainer">
                        <div className="ProfileImageContainer">
                            <img src={item.url} />
                        </div>

                        <div className="GridContainentHeadPersion">
                            <div className="gridItem-1">
                                <h2>{item.title}</h2>
                                <p>{item.subtile}</p>
                            </div>
                            <div className="gridItem-2">
                                <FacebookRoundedIcon
                                    sx={{
                                        backgroundColor: "#ffffff",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        color: "#F0F2F7",
                                        "&:hover": {
                                            color: "#ffffff",
                                            backgroundColor: "#2B4269",
                                        },
                                    }}
                                />
                                <FacebookRoundedIcon
                                    sx={{
                                        backgroundColor: "#ffffff",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        color: "#F0F2F7",
                                        "&:hover": {
                                            color: "#ffffff",
                                            backgroundColor: "#2B4269",
                                        },
                                    }}
                                />
                                < AlternateEmailOutlinedIcon
                                    sx={{
                                        backgroundColor: "#ffffff",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        color: "#F0F2F7",
                                        "&:hover": {
                                            color: "#ffffff",
                                            backgroundColor: "#2B4269",
                                        },
                                    }}
                                />
                                <FacebookRoundedIcon
                                    sx={{
                                        backgroundColor: "#ffffff",
                                        borderRadius: "50%",
                                        cursor: "pointer",
                                        color: "#F0F2F7",
                                        "&:hover": {
                                            color: "#ffffff",
                                            backgroundColor: "#2B4269",
                                        },
                                    }}
                                />
                            </div>

                            <div className="gridItem-3">
                                <p>
                                    {item.decription}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default CryptoHeadPersionDetail