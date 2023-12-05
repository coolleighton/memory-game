import FailedScreen from "./GameScreenComponents/FailedScreen";
import StartScreen from "./GameScreenComponents/StartScreen";
import Images from "./GameScreenComponents/Images";

function GameScreen({ gameState, handleClick, startWithDog }) {
  if (
    (gameState.gamePosition.started === false) &
    (gameState.gamePosition.gameFailed === false)
  ) {
    return (
      <div id="imagesDiv" className="flex flex-col justify-center items-center">
        <StartScreen startWithDog={startWithDog}></StartScreen>
      </div>
    );
  } else if (
    (gameState.gamePosition.started === true) &
    (gameState.gamePosition.gameFailed === false)
  ) {
    return (
      <div id="imagesDiv" className="flex flex-col justify-center items-center">
        <Images gameState={gameState} handleClick={handleClick}></Images>
      </div>
    );
  } else if (
    (gameState.gamePosition.started === true) &
    (gameState.gamePosition.gameFailed === true)
  ) {
    return (
      <div id="imagesDiv" className="flex flex-col justify-center items-center">
        <FailedScreen startWithDog={startWithDog}></FailedScreen>
      </div>
    );
  }
}
export default GameScreen;
