import { useEffect, useState } from "react";

async function API() {

  const [images, setImages] = useState([])
  const imageAmount = 5
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=MgJzg2AwpRJBo5C7rMNvNc2cc28Dytax&q=memes&limit=`
    + imageAmount +
    `&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  );
  response.json().then(function (response) {

    console.log(response.data)
    
  });

  
}

export default API;
