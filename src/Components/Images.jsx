import { useEffect, useState } from "react";

function Images({gameState, searchState, handleClick }) {
  const [imagesData, setImagesData] = useState([]);

  const removeTextAfterGif = (inputString) => {
    const gifIndex = inputString.toLowerCase().indexOf("gif");

    if (gifIndex !== -1) {
      return inputString.substring(0, gifIndex - 1);
    }

    return inputString;
  };

  useEffect(() => {
    const imageAmount = 5;
    const searchFor = searchState.searchTerm;
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=MgJzg2AwpRJBo5C7rMNvNc2cc28Dytax&q=${searchFor}&limit=${imageAmount}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    const fetchGif = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setImagesData(data.data);
      } catch (error) {
        console.error("Error fetching data from Giphy:", error);
      }
    };

    fetchGif();
  }, [searchState.searchTerm, gameState]);

  return (
    <div className="flex justify-center">
      {imagesData.map((item, i) => {
        const title = removeTextAfterGif(item.title);

        return (
          <div
            id={i}
            key={i}
            className="w-48 p-5 mx-5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl hover:scale-110 hover:cursor-pointer"
            onClick={(e) => handleClick(e.target.id)}
          >
            <img
              id={i}
              className="h-48 w-48 rounded-2xl "
              src={item.images.original.url}
            ></img>
            <p
              id={i}
              className="text-sm shadow-lg text-white font-semibold bg-blue-900 text-center align-middle p-2 mt-5 rounded-xl"
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
