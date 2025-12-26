// import { useState } from "react";
import Title from "./components/Title.jsx";
import Difficulty from "./components/Difficulty.jsx";
import Header from "./components/Header.jsx";

import "./App.css";

const App = () => {
  return (
    <>
      <Difficulty />
      <div className="app">
        <Header />
        <Title />
      </div>
    </>
  );
};

export default App;
