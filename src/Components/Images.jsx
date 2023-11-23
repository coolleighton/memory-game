import { useEffect, useState } from "react";

function Images() {
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    const imageAmount = 10;

    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=MgJzg2AwpRJBo5C7rMNvNc2cc28Dytax&q=memes&limit=${imageAmount}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

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
  }, []);

  return (
    <div>
      {imagesData.map((item, i) => {
        return (
          <div
            style={{
              width: "200px",
              height: "200px",
              marginBottom: "100px"
            }}
            key={i}
          >
            <img
              style={{
                width: "200px",
              }}
              src={item.images.original.url}
            ></img>
            <p className="text-blue-500">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Images;
