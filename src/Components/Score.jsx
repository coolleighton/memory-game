

function Score({gameState, resetScores}) {
    
  return (
    <div className="flex justify-center mx-3">
      <p className="min-[360px]:p-3 min-[360px]:text-base cursor-default text-xs min-[360px]:m-3 m-2 shadow-xl text-white font-semibold bg-blue-600 text-center align-middle w-18 p-2 rounded-xl">
        Current Score: <span id="currentScore">0</span>
      </p>
      <p className="min-[360px]:p-3 min-[360px]:m-3 min-[360px]:text-base cursor-default text-xs m-2 shadow-xl text-white font-semibold bg-blue-600 text-center align-middle w-18 p-2 rounded-xl">
        Best Score: <span id="highScore">{gameState.gameScores.highScore}</span>
      </p>
      <button onClick={() => resetScores()} className="min-[360px]:m-3 min-[360px]:p-3 min-[360px]:text-base bg-blue-600 rounded-xl hover:cursor-pointer hover:scale-110 shadow-xl duration-200 text-xs w-18 p-2 m-2 shadow-xl text-white font-semibold">
        Reset Score
      </button>
    </div>
  );
}

export default Score;
