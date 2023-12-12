import Images from "./GameScreenComponents/Images";
import MessageScreen from "./GameScreenComponents/MessageScreen";

function GameScreen({
  gameState,
  handleClick,
  startWithDog,
  handleImageCount,
  checkRounds,
  setIds,
}) {
  const startScreenMessage = {
    messageText:
      "To start 'Your Favourite Memory Game' enter your favourite thing into the search bar above and press enter. We recommend entering one word search terms but almost anything works. If you can't decide, use the button below to play the game with dogs.",
    buttonText: "Play the memory game with dogs",
    messageFunction: startWithDog,
  };

  const failedScreenMessage = {
    messageText:
      "You failed. Either press the button below to start again with dogs, or enter something above.",
    buttonText: "Play the memory game with dogs",
    messageFunction: startWithDog,
  };

  const notEnoughGifsMessage = {
    messageText:
      "We could not find enough gifs to match your search term. Either press the button below to start with dogs, or enter something more popular.",
    buttonText: "Play the memory game with dogs",
    messageFunction: startWithDog,
  };

  if (
    (gameState.gamePosition.started === false) &
    (gameState.gamePosition.gameFailed === false)
  ) {
    return (
      <MessageScreen
        startWithDog={startWithDog}
        message={startScreenMessage}
      ></MessageScreen>
    );
  }
  if (gameState.gamePosition.imagesAbove5 === false) {
    return (
      <MessageScreen
        startWithDog={startWithDog}
        message={notEnoughGifsMessage}
      ></MessageScreen>
    );
  } else if (
    (gameState.gamePosition.started === true) &
    (gameState.gamePosition.gameFailed === true)
  ) {
    return (
      <MessageScreen
        startWithDog={startWithDog}
        message={failedScreenMessage}
      ></MessageScreen>
    );
  } else if (
    (gameState.gamePosition.started === true) &
    (gameState.gamePosition.gameFailed === false)
  ) {
    return (
      <Images
        setIds={setIds}
        gameState={gameState}
        handleClick={handleClick}
        handleImageCount={handleImageCount}
        checkRounds={checkRounds}
      ></Images>
    );
  }
}
export default GameScreen;
