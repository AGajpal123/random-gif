import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const Tag_V1 = () => {

  const [gif, setGif] = useState("");
  const [tag,setTag] = useState("dog");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imgSRC = data.data.images.downsized_large.url;
    setGif(imgSRC);
    // console.log(imgSRC)
  };
  useEffect(() => {

    fetchGif(tag);
  }, [tag]);

  const handleClick = () => {
    fetchGif(tag);
  }

  return (
    <>
      <div className="container">
        <h1>Random {tag} GIF</h1>
        <img src={gif} width="500" alt="Random GIF" />
        <input type="text" value={tag} onChange={(e)=>setTag(e.target.value)}/>
        <button onClick={handleClick}>Click for new</button>
      </div>
    </>
  );
};

export default Tag_V1;
