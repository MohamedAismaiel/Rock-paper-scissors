import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Footer from "./components/footer";
import Game from "./components/game";
import Header from "./components/header";
import Play from "./components/play";

let x = +localStorage.getItem("score") || 0;
let y = localStorage.getItem("choice") || "";

function App() {
  const [choice, setChoice] = useState(y);
  const [score, setScore] = useState(x);

  useEffect(() => {
    localStorage.setItem("score", score);
    localStorage.setItem("choice", choice);
  }, [score, choice]);

  window.onload = () => {
    x = +localStorage.getItem("score");
    y = localStorage.getItem("choice");

    setScore(x);
    setChoice(y);
  };

  return (
    <div className="container">
      <Header score={score} />
      <Switch>
        <Route path="/" exact>
          <Play setChoice={setChoice} />
        </Route>
        <Route path="/game">
          <Game
            choice={choice}
            score={score}
            setChoice={setChoice}
            setScore={setScore}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
