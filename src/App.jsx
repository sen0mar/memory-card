import { useState } from "react";
import Title from "./components/Title.jsx";
import Difficulty from "./components/Difficulty.jsx";
import Header from "./components/Header.jsx";
import Game from "./components/Game.jsx";
import "./App.css";

const App = () => {
  const [difficulty, setDifficulty] = useState(null);

  function handleDifficulty(selectedDifficulty) {
    setDifficulty(selectedDifficulty);
  }

  function changeDifficulty() {
    setDifficulty(null);
  }

  return (
    <>
      <Difficulty
        onStart={handleDifficulty}
        removeDifficulty={difficulty != null}
      />
      <div className={`app ${difficulty !== null ? "" : "blur"}`}>
        <Header changeDifficulty={changeDifficulty} />
        {difficulty && (
          <>
            <Title />
            <Game
              difficulty={difficulty}
              onChangeDifficulty={changeDifficulty}
            />
          </>
        )}
      </div>
    </>
  );
};

export default App;
