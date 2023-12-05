import { useState } from "react";

function Score() {
  return (
    <div className="flex justify-center">
      <p className="cursor-default text-mg mx-5 m-7 shadow-xl text-white font-semibold bg-blue-600 text-center align-middle px-5 py-2 rounded-xl">
        Current Score: <span id="currentScore">0</span>
      </p>
      <p className="cursor-default text-mg mx-5 m-7 shadow-xl text-white font-semibold bg-blue-600 text-center align-middle px-5 py-2 rounded-xl">
        Best Score: <span id="highScore">0</span>
      </p>
    </div>
  );
}

export default Score;
