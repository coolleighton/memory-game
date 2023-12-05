import { useState } from "react";
import Score from "./Components/Score.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import GameScreen from "./Components/GameScreen.jsx";
import "./App.css";

function App() {
  // gameState declaration

  const [gameState, setGameState] = useState({
    gamePosition: {
      searchTerm: "car",
      searchAmount: 5,
      started: false,
      gameFailed: false,
    },

    gameStats: [
      { clicked: false, id: 0 },
      { clicked: false, id: 1 },
      { clicked: false, id: 2 },
      { clicked: false, id: 3 },
      { clicked: false, id: 4 },
    ],

    gameScores: {
      currentScore: 0,
      highScore: 0,
    },
  });

  // handle game starting with "dog"

  const startWithDog = () => {
    const newGamePosition = {
      searchTerm: "dog",
      searchAmount: 5,
      started: true,
      gameFailed: false,
    };

    const newGameStats = [
      { clicked: false, id: 0 },
      { clicked: false, id: 1 },
      { clicked: false, id: 2 },
      { clicked: false, id: 3 },
      { clicked: false, id: 4 },
    ];

    setGameState({
      gamePosition: newGamePosition,
      gameStats: newGameStats,
      gameScores: gameState.gameScores,
    });
  };

  // handle game starting with a new search term

  const searchFunction = (value) => {
    const newGamePosition = {
      searchTerm: value,
      searchAmount: 5,
      started: true,
      gameFailed: false,
    };
    
    const newGameStats = [
      { clicked: false, id: 0 },
      { clicked: false, id: 1 },
      { clicked: false, id: 2 },
      { clicked: false, id: 3 },
      { clicked: false, id: 4 },
    ];

    setGameState({
      gamePosition: newGamePosition,
      gameStats: newGameStats,
      gameScores: gameState.gameScores,
    });
  };

  // handle image clicks

  const handleClick = (index) => {
    let i = +index;
    let startNewGame = false;

    const newGameStats = gameState.gameStats.map((cardClicked) => {
      if (cardClicked.id === i) {
        if (!cardClicked.clicked) {
          console.log("+ 1 point and make this card clicked ");
          return {
            ...cardClicked,
            clicked: true,
          };
        } else {
          console.log("run new game function with a start new game button");
          startNewGame = true;
        }
      } else {
        return cardClicked;
      }
    });

    const newGamePosition = () => {
      if (startNewGame === false) {
        return gameState.gamePosition;
      } else {
        return {
          ...gameState.gamePosition,
          gameFailed: true,
        };
      }
    };

    setGameState({
      gamePosition: newGamePosition(),
      gameStats: newGameStats,
      gameScores: gameState.gameScores,
    });
  };

  // handle score logic

  return (
    <>
      <div className="md:container md:mx-auto flex flex-col">
        <h1 className="mb-5 text-center text-5xl text-blue-400 font-semibold">
          <span className="text-7xl text-purple-500">YOUR</span>
          FAVOURITE <br></br>
          MEMORY
          <span className="text-7xl text-purple-500">GAME</span>
        </h1>
        <SearchBar searchFunction={searchFunction}></SearchBar>
        <Score></Score>
        <GameScreen
          gameState={gameState}
          handleClick={handleClick}
          startWithDog={startWithDog}
        ></GameScreen>
      </div>
    </>
  );
}

export default App;
