import helpIcon from "../icons/help.svg";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img
        src={helpIcon}
        alt="game instructions icon"
        role="button"
        tabIndex={0}
        aria-label="game instructions"
      />
      <button>Change Difficulty</button>
    </div>
  );
};

export default Header;
