import React from 'react'
import useGIF from '../useGIF';

const Random_V2 = () => {
   
    const {gif,fetchGif} = useGIF();

    
      return (
        <>
          <div className="container">
            <h1>Random GIF</h1>
            <img src={gif} width="500" alt="Random GIF" />
            <button onClick={fetchGif}>Click for new</button>
          </div>
        </>
      );
}

export default Random_V2 
