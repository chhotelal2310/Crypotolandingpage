import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeaderandHome from "../src/components/HeaderandHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderandHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
