import { useEffect, useState } from "react";
import Images from "./Components/Images.jsx";
import Score from "./Components/Score.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="md:container md:mx-auto mt-10 flex flex-col">
        <h1 className="mb-5 text-center text-5xl text-blue-400 font-semibold">
          <span className="text-7xl text-purple-500">YOUR</span>
          FAVOURITE <br></br>
          MEMORY
          <span className="text-7xl text-purple-500">GAME</span>
        </h1>
        <SearchBar></SearchBar>
        <Score></Score>
        <Images></Images>
      </div>
    </>
  );
}

export default App;
