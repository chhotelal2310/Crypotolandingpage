// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LeadingInjection from "../src/Pages/LeadingInjection";
// import OurApp from "../src/components/OurApp";
// import Comprehensive from "../src/components/Comprehensive";
// import SetupSecond from "../src/components/SetupSecond";
// import ReciveBitcoin from "../src/components/ReciveBitcoin";
// import CryptoandToken from "../src/components/CryptoandToken";
// import CryptoCurrencyWllate from "../src/components/CryptoCurrencyWallte";
// import PremiumVersion from "../src/components/PremiumVersion";
// import CryptoCurrencyHeadPersion from "../src/components/CryptoCurrencyHeadPersion";
// import EmailSubscribe from "../src/components/EmailSubscribe";
// import Footer from "../src/components/Footer";
// import Header from "./components/Header";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <LeadingInjection />
//       </div>
//     ),
//   },
//   {
//     path: "/ourapp",
//     element: (
//       <div>
//         <Header />
//         <OurApp />
//       </div>
//     ),
//   },
//   {
//     path: "/comprehensive",
//     element: (
//       <div>
//         <Header />
//         <Comprehensive />
//       </div>
//     ),
//   },
//   {
//     path: "/setupSecond",
//     element: (
//       <div>
//         <Header />
//         <SetupSecond />
//       </div>
//     ),
//   },
//   {
//     path: "/reciveBitcoin",
//     element: (
//       <div>
//         <Header />
//         <ReciveBitcoin />
//       </div>
//     ),
//   },
//   {
//     path: "/cyptoandToken",
//     element: (
//       <div>
//         <Header />
//         <CryptoandToken />
//       </div>
//     ),
//   },
//   {
//     path: "/cryptoCurrencyWllate",
//     element: (
//       <div>
//         <Header />
//         <CryptoCurrencyWllate />
//       </div>
//     ),
//   },
//   {
//     path: "/PremiumVersion",
//     element: (
//       <div>
//         <Header />
//         <PremiumVersion />
//       </div>
//     ),
//   },
//   {
//     path: "/cryptoCurrencyHeadPersion",
//     element: (
//       <div>
//         <Header />
//         <CryptoCurrencyHeadPersion />
//       </div>
//     ),
//   },

//   {
//     path: "/EmailSubscribe",
//     element: (
//       <div>
//         <Header />
//         <EmailSubscribe />
//       </div>
//     ),
//   },

//   {
//     path: "/footer",
//     element: (
//       <div>
//         <Header />
//         <Footer />
//       </div>
//     ),
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };
// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeadingInjection from "../src/Pages/LeadingInjection";
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
        <Route path="/" element={<LeadingInjection />} />
        {/* <Route path="/comprehensive" element={<Comprehensive />} />
        <Route path="/ourapp" element={<OurApp />} />
        <Route path="/setupSecond" element={<SetupSecond />} />
        <Route path="/reciveBitcoin" element={<ReciveBitcoin />} />
        <Route path="/cyptoandToken" element={<CryptoandToken />} />
        <Route
          path="/cryptoCurrencyWllate"
          element={<CryptoCurrencyWllate />}
        />
        <Route path="/PremiumVersion" element={<PremiumVersion />} />
        <Route
          path="cryptoCurrencyHeadPersion"
          element={<CryptoCurrencyHeadPersion />}
        />
        <Route path="emailSubscribe" element={<EmailSubscribe />} />
        <Route path="footer" element={<Footer />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
