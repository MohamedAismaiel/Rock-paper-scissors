import { Link } from "react-router-dom";
import Triangle from "../images/bg-triangle.svg";
const Play = (props) => {
  const setMyChoice = (e) => {
    props.setChoice(e.target.dataset.id);
  };

  return (
    <div className="play">
      <img src={Triangle} alt="triangle" className="triangle"></img>
      <div className="items">
        <Link to="/game">
          <div
            className="icon icon--paper"
            onClick={setMyChoice}
            data-id="paper"
          ></div>
        </Link>
        <Link to="/game">
          <div
            className="icon icon--rock"
            onClick={setMyChoice}
            data-id="rock"
          ></div>
        </Link>
        <Link to="/game">
          <div
            className="icon icon--scissors"
            onClick={setMyChoice}
            data-id="scissors"
          ></div>
        </Link>
      </div>
    </div>
  );
};
export default Play;
