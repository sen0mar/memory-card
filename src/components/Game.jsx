import { useState } from "react";
import Cards from "./Cards.jsx";

const Game = ({ difficulty, onChangeDifficulty }) => {
  const [score, setScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [gameOver, setGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  // Target scores for each difficulty
  const targetScores = {
    easy: 6,
    medium: 10,
    hard: 20,
  };

  const target = targetScores[difficulty];

  function handleCardClick(cardId) {
    if (gameOver) return;

    // If card was already clicked, reset game
    if (selectedCards.has(cardId)) {
      setScore(0);
      setSelectedCards(new Set());
      setGameOver(true);
      setIsWin(false);
    } else {
      // Add card to selected cards
      const newSelectedCards = new Set(selectedCards);
      newSelectedCards.add(cardId);
      setSelectedCards(newSelectedCards);

      const newScore = newSelectedCards.size;
      setScore(newScore);

      // Check if won
      if (newScore === target) {
        setGameOver(true);
        setIsWin(true);
      }
    }
  }

  function handleRestart() {
    setScore(0);
    setSelectedCards(new Set());
    setGameOver(false);
    setIsWin(false);
  }

  return (
    <>
      {/* Score display */}
      <div className="score-display">
        <p>
          {score}/{target}
        </p>
      </div>

      {/* Game Over overlay */}
      {gameOver && (
        <div className="game-over-overlay">
          <div className="game-over-box">
            <h2>{isWin ? "🎉 You Win! 🎉" : "💀 Game Over 💀"}</h2>
            <p>
              Final Score: {score}/{target}
            </p>
            <button onClick={handleRestart}>Play Again</button>
            <button onClick={onChangeDifficulty}>Change Difficulty</button>
          </div>
        </div>
      )}

      {/* Cards */}
      <Cards key={`${difficulty}-${gameOver}`} onCardClick={handleCardClick} />
    </>
  );
};

export default Game;
