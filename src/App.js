import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cse.google.com/cse.js?cx=b64f1a9f9446e4e53";
    script.async = false;

    document.body.appendChild(script);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        {/* <h1>Hey! Clever programmer, let's build Google Clone 😊🚀!</h1> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
//Switch is replaced by Routes in v6 rrdom
