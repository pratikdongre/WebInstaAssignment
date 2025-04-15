// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Builder from "./Components/Builder";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
