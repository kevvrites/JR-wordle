import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function handleSubmitGuess(event) {
  event.preventDefault();
  const isCorrect = event === answer;
}

function Game() {
  const [words, setWords] = React.useState([]);

  // function addGuess(guessWord) {
  //   const newGuess = {
  //     guessWord,
  //     id: Math.random(),
  //   };

  //   const allGuesses = [...words, newGuess];
  //   setWords(allGuesses);
  // }

  return (
    <div>
      <GuessInput />
    </div>
  );
}

export default Game;
