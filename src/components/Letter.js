import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord, disabledLetters } =
    useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (currAttempt.attempt > attemptVal && letter !== "" && !correct && !almost) {
      if (!disabledLetters.includes(letter)) {
        setDisabledLetters((prev) => [...prev, letter]);
      }
    }
  }, [currAttempt, letter, correct, almost, disabledLetters, attemptVal, setDisabledLetters]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
