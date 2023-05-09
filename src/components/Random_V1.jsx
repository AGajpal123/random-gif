import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const Random_V1 = () => {
  const [gif, setGif] = useState("");
  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imgSRC = data.data.images.downsized_large.url;
    setGif(imgSRC);
    // console.log(imgSRC)
  };
  useEffect(() => {

    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  }

  return (
    <>
      <div className="container">
        <h1>Random GIF</h1>
        <img src={gif} width="500" alt="Random GIF" />
        <button onClick={handleClick}>Click for new</button>
      </div>
    </>
  );
};

export default Random_V1;
