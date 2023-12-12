

function Score({gameState, resetScores}) {
    
  return (
    <div className="flex justify-center">
      <p className="cursor-default text-mg mx-5 m-7 shadow-xl text-white font-semibold bg-blue-600 text-center align-middle px-5 py-2 rounded-xl">
        Current Score: <span id="currentScore">0</span>
      </p>
      <p className="cursor-default text-mg mx-5 m-7 shadow-xl text-white font-semibold bg-blue-600 text-center align-middle px-5 py-2 rounded-xl">
        Best Score: <span id="highScore">{gameState.gameScores.highScore}</span>
      </p>
      <button onClick={() => resetScores()} className="bg-blue-600 rounded-xl hover:cursor-pointer hover:scale-110 shadow-xl duration-200 text-mg mx-5 m-7 px-5 py-2 shadow-xl text-white font-semibold">
        Reset Score
      </button>
    </div>
  );
}

export default Score;
