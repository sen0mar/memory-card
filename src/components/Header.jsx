import helpIcon from "../icons/help.svg";
import "../styles/header.css";

const Header = ({ changeDifficulty }) => {
  return (
    <div className="header-container">
      <img
        src={helpIcon}
        alt="game instructions icon"
        role="button"
        tabIndex={0}
        aria-label="game instructions"
      />
      <button onClick={changeDifficulty}>Change Difficulty</button>
    </div>
  );
};

export default Header;
