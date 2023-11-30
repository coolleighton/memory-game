import { useState } from "react";
import Images from "./Components/Images.jsx";
import Score from "./Components/Score.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import StartScreen from "./Components/StartScreen.jsx";
import "./App.css";

function App() {
  // useState for gameState

  const [gameState, setGameState] = useState({
    gamePosition: {
      searchTerm: "car",
      searchAmount: 5,
      started: false,
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
    const newSearchState = {
      searchTerm: "dog",
      searchAmount: 5,
      started: true,
    };

    setGameState({
      gamePosition: newSearchState,
      gameStats: gameState.gameStats,
      gameScores: gameState.gameScores,
    });
  };

  // handle game starting with a new search term

  const searchFunction = (value) => {
    const newGamePosition = {
      searchTerm: value,
      searchAmount: 5,
      started: true,
    };
    setGameState({
      gamePosition: newGamePosition,
      gameStats: gameState.gameStats,
      gameScores: gameState.gameScores,
    });
  };

  // handle image clicks

  const handleClick = (index) => {
    let i = +index;

    const newGameState = gameState.gameStats.map((cardClicked) => {
      if (cardClicked.id === i) {
        if (!cardClicked.clicked) {

          console.log("+ 1 point and make this card clicked ")
          return {
            ...cardClicked,
            clicked: true,
          };
        } else {
          console.log("run new game function with a start new game button");
          return {
            ...cardClicked,
            clicked: true,
          };
        }
      } else {
        return cardClicked;
      }
    });
    setGameState({
      gamePosition: gameState.gamePosition,
      gameStats: newGameState,
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
        <div
          id="imagesDiv"
          className="flex flex-col justify-center items-center"
        >
          {gameState.gamePosition.started ? (
            <Images
              gameState={gameState.gameStats}
              searchState={gameState.gamePosition}
              handleClick={handleClick}
            />
          ) : (
            <StartScreen startWithDog={startWithDog} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
