import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import OurApp from "../components/OurApp";
import Comprehensive from "../components/Comprehensive";
import SetupSecond from "../components/SetupSecond";
import ReciveBitcoin from "../components/ReciveBitcoin";
import CryptoandToken from "../components/CryptoandToken";
import CryptoCurrencyWllate from "../components/CryptoCurrencyWallte";
import PremiumVersion from "../components/PremiumVersion";
import CryptoCurrencyHeadPersion from "../components/CryptoCurrencyHeadPersion";
import EmailSubscribe from "../components/EmailSubscribe";
import Footer from "../components/Footer";

const LeadingInjection = () => {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <OurApp />
      <section id="comprehensive">
        <Comprehensive />
      </section>
      <SetupSecond />
      <ReciveBitcoin />
      <section id="cyptoandToken">
        <CryptoandToken />
      </section>
      <section id="cryptoCurrencyWllate">
        <CryptoCurrencyWllate />
      </section>
      <PremiumVersion />
      <CryptoCurrencyHeadPersion />
      <EmailSubscribe />
      <Footer />
    </>
  );
};

export default LeadingInjection;
