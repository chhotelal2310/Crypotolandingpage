import React from "react";
import Header from "./Header";
import Home from "./Home";

const HeaderandHome = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://leadinjection.io/cryptocurrency/wp-content/uploads/sites/13/2018/02/crypto_page_background.png)`,
          backgroundColor: "#0F5082",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Header />
        <Home />
      </div>
    </>
  );
};

export default HeaderandHome;
