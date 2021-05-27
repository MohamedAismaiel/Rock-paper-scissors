import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = (props) => {
  const { score, choice, setScore } = props;
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [counter, setCounter] = useState(3);
  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (choice === "rock" && house === "paper") {
      setPlayerWin("Lose");
      setScore(score - 1);
    } else if (choice === "scissors" && house === "paper") {
      setPlayerWin("Win");
      setScore(score + 1);
    } else if (choice === "rock" && house === "scissors") {
      setPlayerWin("Win");
      setScore(score + 1);
    } else if (choice === "scissors" && house === "rock") {
      setPlayerWin("Win");
      setScore(score + 1);
    } else if (choice === "paper" && house === "rock") {
      setPlayerWin("Win");
      setScore(score + 1);
    } else if (choice === "paper" && house === "scissors") {
      setPlayerWin("Lose");
      setScore(score - 1);
    } else {
      setPlayerWin("Draw");
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();
    return () => {
      clearInterval(timer);
    };
  }, [house, counter]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${choice} ${
            playerWin === "Win" ? `icon icon--${choice}--winner` : ""
          }`}
        ></div>
      </div>
      {playerWin === "Win" && (
        <div className="game__play">
          <span className="text">You win</span>
          <Link
            to="/"
            className="play-again"
            onClick={() => {
              setHouse();
            }}
          >
            Play Again
          </Link>
          <Link
            to="/"
            className="play-again "
            onClick={() => {
              setScore(0);
              setHouse();
              props.setChoice("");
              localStorage.clear("store");
              localStorage.clear("choice");
            }}
          >
            New game
          </Link>
        </div>
      )}
      {playerWin === "Lose" && (
        <div className="game__play">
          <span className="text">You Lost</span>
          <Link
            to="/"
            className="play-again"
            onClick={() => {
              setHouse();
            }}
          >
            Play Again
          </Link>
          <Link
            to="/"
            className="play-again "
            onClick={() => {
              setScore(0);
              setHouse();
              props.setChoice("");
              localStorage.clear("store");
              localStorage.clear("choice");
            }}
          >
            New game
          </Link>
        </div>
      )}
      {playerWin === "Draw" && (
        <div className="game__play">
          <span className="text">Draw</span>
          <Link
            to="/"
            className="play-again"
            onClick={() => {
              setHouse();
            }}
          >
            Play Again
          </Link>
          <Link
            to="/"
            className="play-again "
            onClick={() => {
              setScore(0);
              setHouse();
              props.setChoice("");
              localStorage.clear("store");
              localStorage.clear("choice");
            }}
          >
            New game
          </Link>
        </div>
      )}
      <div className="game__house">
        <span className="text">The House picked</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${house} ${
              playerWin === "Lose" ? `icon icon--${house}--winner` : ""
            } `}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};
export default Game;
