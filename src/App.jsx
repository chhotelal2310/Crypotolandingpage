import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderandHome from "../src/components/HeaderandHome";
import OurApp from "../src/components/OurApp";
import Comprehensive from "../src/components/Comprehensive";
import SetupSecond from "../src/components/SetupSecond";
import ReciveBitcoin from "../src/components/ReciveBitcoin";
import CryptoandToken from "../src/components/CryptoandToken";
import CryptoCurrencyWllate from "../src/components/CryptoCurrencyWallte";
import PremiumVersion from "../src/components/PremiumVersion";
import CryptoCurrencyHeadPersion from "../src/components/CryptoCurrencyHeadPersion";
import EmailSubscribe from "../src/components/EmailSubscribe";
import Footer from "../src/components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderandHome />}></Route>
        <Route path="/ourapp" element={<OurApp />} />
        <Route path="/comprehensive" element={<Comprehensive />} />
        <Route path="/setupSecond" element={<SetupSecond />} />
        <Route path="/reciveBitcoin" element={<ReciveBitcoin />} />
        <Route path="/cyptoandToken" element={<CryptoandToken />} />
        <Route
          path="/cryptoCurrencyWllate"
          element={<CryptoCurrencyWllate />}
        />
        <Route path="/PremiumVersion" element={<PremiumVersion />} />
        <Route
          path="/cryptoCurrencyHeadPersion"
          element={<CryptoCurrencyHeadPersion />}
        />
        <Route path="/EmailSubscribe" element={<EmailSubscribe />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
