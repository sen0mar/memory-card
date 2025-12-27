import { useState } from "react";
import Title from "./components/Title.jsx";
import Difficulty from "./components/Difficulty.jsx";
import Header from "./components/Header.jsx";
import Game from "./components/Game.jsx";

import "./App.css";

const App = () => {
  const [difficulty, setDifficulty] = useState(null);
  const [hasStarted, setHasStarted] = useState(false);

  function handleDifficulty(selectedDifficulty) {
    setDifficulty(selectedDifficulty);
    setHasStarted(true);
  }

  return (
    <>
      <Difficulty
        onStart={handleDifficulty}
        removeDifficulty={difficulty != null}
      />
      <div className={`app ${difficulty !== null ? "" : "blur"}`}>
        <Header changeDifficulty={() => setDifficulty(null)} />
        {hasStarted && <Title />}
      </div>
    </>
  );
};

export default App;
