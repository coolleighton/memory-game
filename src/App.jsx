import { useState } from "react";
import Score from "./Components/Score.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import GameScreen from "./Components/GameScreen.jsx";
import "./App.css";

function App() {
  // create arrays for new game stats
  function repeat(item, times) {
    return new Array(times).fill(item);
  }

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
      firstRoundComplete: false,
      secondRoundComplete: false,
      finalRoundComplete: false,
    },

    gameStats: repeat({ clicked: false, id: 0 }, 5),

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
      firstRoundComplete: false,
      secondRoundComplete: false,
      finalRoundComplete: false,
    };

    const newGameStats = repeat({ clicked: false, id: 0 }, 5);

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
      firstRoundComplete: false,
      secondRoundComplete: false,
      finalRoundComplete: false,
    };

    const newGameStats = repeat({ clicked: false, id: 0 }, 5);

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

  // set image id's

  const setNewGameStats = (data) => {
    const newgameState = {
      gamePosition: gameState.gamePosition,
      gameStats: data,
      gameScores: gameState.gameScores,
    };

    setGameState(newgameState);
    localStorage.setItem("gameState", JSON.stringify(newgameState));
  };

  // handle image clicks

  const handleClick = (index) => {

    let didTheGameFail = false;

    // creates new game stats

    const newGameStats = gameState.gameStats.map((cardClicked) => {
      if (cardClicked.id === index) {

        if (cardClicked.clicked === false) {
          return {
            ...cardClicked,
            clicked: true,
          };
        } else if (cardClicked.clicked === true) {
          didTheGameFail = true;
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
      if (didTheGameFail === false) {
        
        return gameState.gamePosition;
        
      } else {
        
        console.log(didTheGameFail)
        
        return {
          ...gameState.gamePosition,
          gameFailed: true,
          
        };
      }
    
    };

    // adds up how many objects where clicked = true

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

    console.log(newGamePosition())

    setGameState(newgameState);
    localStorage.setItem("gameState", JSON.stringify(newgameState));
  };

  // handle if images array is below 5

  const handleImageCount = (imagesArray) => {
    if (imagesArray.length < 5) {
      const newGamePosition = {
        ...gameState.gamePosition,
        imagesAbove5: false,
        
      };

      const newgameState = {
        gamePosition: newGamePosition,
        gameStats: gameState.gameStats,
        gameScores: gameState.gameScores,
      };

      

      setGameState(newgameState);
      localStorage.setItem("gameState", JSON.stringify(newgameState));
    }
  };

  // reset high scores to 0

  function resetHighScore() {
    const newGameScores = {
      ...gameState.gameScores,
      highScore: 0,
    };

    const newgameState = {
      gamePosition: gameState.gamePosition,
      gameStats: gameState.gameStats,
      gameScores: newGameScores,
    };

    setGameState(newgameState);
    localStorage.setItem("gameState", JSON.stringify(newgameState));
  }

  // check if rounds completed

  function checkForRound(scores) {
    if (
      scores.currentScore === 5 &&
      gameState.gamePosition.firstRoundComplete === false
    ) {
      const newGamePosition = {
        searchTerm: gameState.gamePosition.searchTerm,
        searchAmount: 10,
        started: true,
        gameFailed: false,
        imagesAbove5: true,
        firstRoundComplete: true,
        secondRoundComplete: false,
        finalRoundComplete: false,
      };

      const newGameStats = repeat({ clicked: false, id: 0 }, 10);

      const newGameScores = {
        currentScore: 0,
        ...gameState.gameScores,
      };

      const newgameState = {
        gamePosition: newGamePosition,
        gameStats: newGameStats,
        gameScores: newGameScores,
      };
      console.log("you won");
      console.log(newgameState);

      setGameState(newgameState);
      localStorage.setItem("gameState", JSON.stringify(newgameState));
    } else if (
      scores.currentScore === 10 &&
      gameState.gamePosition.secondRoundComplete === false
    ) {
      const newGamePosition = {
        searchTerm: gameState.gamePosition.searchTerm,
        searchAmount: 20,
        started: true,
        gameFailed: false,
        imagesAbove5: true,
        firstRoundComplete: true,
        secondRoundComplete: true,
        finalRoundComplete: false,
      };

      const newGameStats = repeat({ clicked: false, id: 0 }, 20);

      const newGameScores = {
        currentScore: 0,
        ...gameState.gameScores,
      };

      const newgameState = {
        gamePosition: newGamePosition,
        gameStats: newGameStats,
        gameScores: newGameScores,
      };
      console.log("you won");
      console.log(newgameState);

      setGameState(newgameState);
      localStorage.setItem("gameState", JSON.stringify(newgameState));
    } else if (
      scores.currentScore === 10 &&
      gameState.gamePosition.secondRoundComplete === false
    ) {
      const newGamePosition = {
        searchTerm: gameState.gamePosition.searchTerm,
        searchAmount: 20,
        started: true,
        gameFailed: false,
        imagesAbove5: true,
        firstRoundComplete: true,
        secondRoundComplete: true,
        finalRoundComplete: true,
      };

      const newGameStats = repeat({ clicked: false, id: 0 }, 20);

      const newGameScores = {
        currentScore: 0,
        ...gameState.gameScores,
      };

      const newgameState = {
        gamePosition: newGamePosition,
        gameStats: newGameStats,
        gameScores: newGameScores,
      };
      console.log("you won");
      console.log(newgameState);

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
        <Score gameState={gameState} resetScores={resetHighScore}></Score>
        <div
          id="imagesDiv"
          className="flex flex-col justify-center items-center  container"
        >
          <GameScreen
            setIds={setNewGameStats}
            checkRounds={checkForRound}
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
