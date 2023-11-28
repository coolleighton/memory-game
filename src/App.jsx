import { forceUpdate, useState } from "react";
import Images from "./Components/Images.jsx";
import Score from "./Components/Score.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import "./App.css";

function App() {
  // handle search input change

  const [searchState, setSearchState] = useState({
    searchTerm: "cat",
    searchAmount: 5,
  });

  const searchFunction = (value) => {
    setAppState({
      searchTerm: value,
      searchAmount: 5,
    });
  };

  // handle gameState

  const [gameState, setGameState] = useState([
    { clicked: false, id: 0 },
    { clicked: false, id: 1 },
    { clicked: false, id: 2 },
    { clicked: false, id: 3 },
    { clicked: false, id: 4 },
  ]);

  // handle image clicks

  const handleClick = (index) => {
    let i = +index;

    const newGameState = gameState.map((cardClicked) => {
      if (cardClicked.id === i) {
        if (!cardClicked.clicked) {
          return {
            ...cardClicked,
            clicked: true,
          };
        } else {
          console.log("game finishes");
          return {
            ...cardClicked,
            clicked: true,
          };
        }
      } else {
        return cardClicked;
      }
    });
    setGameState(newGameState);
    console.log(newGameState);
  };

  return (
    <>
      <div className="md:container md:mx-auto mt-10 flex flex-col">
        <h1 className="mb-5 text-center text-5xl text-blue-400 font-semibold">
          <span className="text-7xl text-purple-500">YOUR</span>
          FAVOURITE <br></br>
          MEMORY
          <span className="text-7xl text-purple-500">GAME</span>
        </h1>
        <SearchBar searchFunction={searchFunction}></SearchBar>
        <Score></Score>
        <div id="imagesDiv">
          <Images
            gameState={gameState}
            searchState={searchState}
            handleClick={handleClick}
          ></Images>
        </div>
      </div>
    </>
  );
}

export default App;
