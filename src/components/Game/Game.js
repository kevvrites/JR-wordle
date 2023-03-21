import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // won | lost | inProgress
  const [gameState, setGameState] = React.useState("inProgress");

  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (tentativeGuess === answer) {
      setGameState("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    }
  }

  return (
    <div>
      <span>{gameState}</span>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput gameState={gameState} handleSubmitGuess={handleSubmitGuess} />
      {gameState === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameState === "lost" && <LostBanner answer={answer} />}
    </div>
  );
}

export default Game;
