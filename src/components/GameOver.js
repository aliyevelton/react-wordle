import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, correctWord, currAttempt, resetGame } = useContext(AppContext);

  const handleRestart = () => {
    resetGame();
  };

  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle!"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed it in {currAttempt.attempt} attempts</h3>
      )}
      <button onClick={handleRestart} className="restartButton">
        Restart Game
      </button>
    </div>
  );
}

export default GameOver;
