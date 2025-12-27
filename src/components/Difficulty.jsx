import "../styles/difficulty.css";

const Difficulty = ({ onStart, difficulty, removeDifficulty }) => {
  return (
    <div className={`difficulty-container ${removeDifficulty ? "remove" : ""}`}>
      <h2>Welcome to the Witch's Path</h2>
      <p></p>
      <p>Select difficulty:</p>
      <div
        className="difficulty-selection"
        role="group"
        aria-label="Select difficulty"
      >
        <button
          id="easy-btn"
          aria-pressed={difficulty === "easy"}
          onClick={() => onStart("easy")}
        >
          Easy
        </button>
        <button
          id="medium-btn"
          aria-pressed={difficulty === "medium"}
          onClick={() => onStart("medium")}
        >
          Medium
        </button>
        <button
          id="hard-btn"
          aria-pressed={difficulty === "hard"}
          onClick={() => onStart("hard")}
        >
          Hard
        </button>
      </div>
    </div>
  );
};

export default Difficulty;
