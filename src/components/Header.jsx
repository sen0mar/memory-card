import { useState, useEffect } from "react";
import helpIcon from "../icons/help.svg";
import "../styles/header.css";

const Header = ({ changeDifficulty }) => {
  const [showHelp, setShowHelp] = useState(false);

  function toggleHelp() {
    setShowHelp(true);
  }

  useEffect(() => {
    if (showHelp) {
      const timer = setTimeout(() => {
        setShowHelp(false);
      }, 3000);

      // Cleanup timer if component unmounts or showHelp changes
      return () => clearTimeout(timer);
    }
  }, [showHelp]);

  return (
    <div className="header-container">
      <div className="help-wrapper">
        <img
          src={helpIcon}
          alt="game instructions icon"
          role="button"
          tabIndex={0}
          aria-label="game instructions"
          onClick={toggleHelp}
        />
        {showHelp && (
          <div className="help-popup">
            <p>Click on cards to increase your score!</p>
            <p>Don't click the same card twice or you'll lose!</p>
            <p>Reach the target score to win!</p>
          </div>
        )}
      </div>
      <button onClick={changeDifficulty}>Change Difficulty</button>
    </div>
  );
};

export default Header;
