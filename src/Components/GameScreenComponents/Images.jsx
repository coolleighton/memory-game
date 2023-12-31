import { useEffect, useState } from "react";

function Images({ gameState, handleClick, handleImageCount, checkRounds, setIds }) {
  const [imagesData, setImagesData] = useState([]);

  // clean up gif titles

  const removeTextAfterGif = (inputString) => {
    const gifIndex = inputString.toLowerCase().indexOf("gif");

    if (gifIndex !== -1) {
      return inputString.substring(0, gifIndex - 1);
    }

    return inputString;
  };

  // fetch images

  useEffect(() => {
    const imageAmount = gameState.gamePosition.searchAmount;
    const searchFor = gameState.gamePosition.searchTerm;
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=MgJzg2AwpRJBo5C7rMNvNc2cc28Dytax&q=${searchFor}&limit=${imageAmount}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    const fetchGif = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // check if there is atleast 5 images
        handleImageCount(data.data);

        setImagesData(data.data);

        // set card id's
        let newGameIds = [];

        for (let id of data.data) {
          newGameIds.push(id.id);
        }

        let newGameScores = [];

        for (let i = 0; i < gameState.gameStats.length; i++) {
          newGameScores.push({
            clicked: false,
            id: newGameIds[i],
          });
        }

        setIds(newGameScores, gameState.gamePosition.searchTerm)
      } catch (error) {
        console.error("Error fetching data from Giphy:", error);
      }
    };

    fetchGif();
  }, [gameState.gamePosition]);

  // randomise images data order on score change

  useEffect(() => {
    function randomizeArray() {
      const randomizedArray = [...imagesData];

      for (let i = randomizedArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        [randomizedArray[i], randomizedArray[j]] = [
          randomizedArray[j],
          randomizedArray[i],
        ];
      }

      setImagesData(randomizedArray);
    }
    randomizeArray();
    checkRounds(gameState.gameScores)
  }, [gameState.gameScores.currentScore]);

  // render images on screen

  return (
    <div className="grid gap-4 grid-cols-2 my-5 min-[500px]:grid-cols-3 md:grid-cols-5 md:gap-6">
      {imagesData.map((item) => {
        let title = removeTextAfterGif(item.title);

        // add search term as title if no title exists
        if (!title) {
          title = gameState.gamePosition.searchTerm;
        }

        return (
          <div
            id={item.id}
            key={item.id}
            className="flex flex-col justify-between h-18 w-18 md:p-5 min-[360px]:p-3 p-2 bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl hover:cursor-pointer"
            onClick={(e) => handleClick(e.target.id)}
          >
            <img
              id={item.id}
              className="resize h-18 w-18 rounded-xl "
              src={item.images.original.url}
            ></img>
            <p
              id={item.id}
              className="text-xs shadow-lg text-white font-semibold bg-blue-900 text-center align-middle p-1 mt-3 rounded-xl"
            >
              {title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Images;
