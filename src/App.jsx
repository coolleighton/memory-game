import { useState } from "react";
import Score from "./Components/Score.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import GameScreen from "./Components/GameScreen.jsx";
import "./App.css";

function App() {
  // Get game state from local storage and check for high score

  let localStorageData = JSON.parse(window.localStorage.getItem("gameState"));

  const highScoreValue = (localStorageData) => {
    if (!localStorageData) {
      return 0;
    } else {
      return localStorageData.gameScores.highScore;
    }
  };

  const onLoadGameState = {
    gamePosition: {
      searchTerm: "dogs",
      searchAmount: 5,
      started: false,
      gameFailed: false,
      imagesAbove5: true,
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
      highScore: highScoreValue(localStorageData),
    },
  };

  const [gameState, setGameState] = useState(onLoadGameState);

  // handle game starting with "dog"

  const startWithDog = () => {
    const newGamePosition = {
      searchTerm: "dogs",
      searchAmount: 5,
      started: true,
      gameFailed: false,
      imagesAbove5: true,
    };

    const newGameStats = [
      { clicked: false, id: 0 },
      { clicked: false, id: 1 },
      { clicked: false, id: 2 },
      { clicked: false, id: 3 },
      { clicked: false, id: 4 },
    ];

    const newGameScores = {
      currentScore: 0,
      ...gameState.gameScores,
    };

    const newgameState = {
      gamePosition: newGamePosition,
      gameStats: newGameStats,
      gameScores: newGameScores,
    };

    setGameState(newgameState);
    localStorage.setItem("gameState", JSON.stringify(newgameState));

    document.querySelector("#currentScore").textContent = 0;
    document.querySelector("#highScore").textContent =
      gameState.gameScores.highScore;
    document.querySelector("#searchData").value = "dogs";
  };

  // handle game starting with a new search term

  const searchFunction = (value) => {
    const newGamePosition = {
      searchTerm: value,
      searchAmount: 5,
      started: true,
      gameFailed: false,
      imagesAbove5: true,
    };

    const newGameStats = [
      { clicked: false, id: 0 },
      { clicked: false, id: 1 },
      { clicked: false, id: 2 },
      { clicked: false, id: 3 },
      { clicked: false, id: 4 },
    ];

    const newGameScores = {
      currentScore: 0,
      ...gameState.gameScores,
    };

    const newgameState = {
      gamePosition: newGamePosition,
      gameStats: newGameStats,
      gameScores: newGameScores,
    };

    setGameState(newgameState);
    localStorage.setItem("gameState", JSON.stringify(newgameState));

    document.querySelector("#currentScore").textContent = 0;
    document.querySelector("#highScore").textContent =
      gameState.gameScores.highScore;
  };

  // handle image clicks

  const handleClick = (index) => {
    let i = +index;
    let startNewGame = false;

    // creates new game stats

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
          return {
            ...cardClicked,
            clicked: true,
          };
        }
      } else {
        return cardClicked;
      }
    });

    // creates new games position

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

    // adds up how many objects where clicked = ture

    function sumClicked(array) {
      return array.reduce((sum, obj) => sum + (obj.clicked ? 1 : 0), 0);
    }

    // creates new high score

    function checkForHighScore(scores) {
      if (scores.highScore === 0) {
        return 1;
      } else if (sumClicked(newGameStats) > scores.highScore) {
        return sumClicked(newGameStats);
      } else {
        return scores.highScore;
      }
    }

    // creates new games scores

    const newGameScores = {
      currentScore: sumClicked(newGameStats),
      highScore: checkForHighScore(gameState.gameScores),
    };

    document.querySelector("#currentScore").textContent =
      newGameScores.currentScore;
    document.querySelector("#highScore").textContent = newGameScores.highScore;

    const newgameState = {
      gamePosition: newGamePosition(),
      gameStats: newGameStats,
      gameScores: newGameScores,
    };

    setGameState(newgameState);
    localStorage.setItem("gameState", JSON.stringify(newgameState));
  };

  // handle if images array is below 5 

  const handleImageCount = (imagesArray) => {

    console.log(imagesArray.length)
    if (imagesArray.length < 5) {
      const newGamePosition = {
        ...gameState.gamePosition,
        imagesAbove5: false,
      }

      const newgameState = {
        gamePosition: newGamePosition,
        gameStats: gameState.gameStats,
        gameScores: gameState.gameScores,
      };
  
      setGameState(newgameState);
      localStorage.setItem("gameState", JSON.stringify(newgameState));
    }
  }

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
        <Score gameState={gameState}></Score>
        <div
          id="imagesDiv"
          className="flex flex-col justify-center items-center"
        >
          <GameScreen
            gameState={gameState}
            handleClick={handleClick}
            startWithDog={startWithDog}
            handleImageCount={handleImageCount}
          ></GameScreen>
        </div>
      </div>
    </>
  );
}

export default App;
