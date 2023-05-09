import React,{useState} from 'react'
import useGIF from '../useGIF';

const Tag_V2 = () => {
    const [tag,setTag] = useState("dog");
    const {gif,fetchGif} = useGIF(tag);

    
      return (
        <>
          <div className="container">
            <h1>Random {tag} GIF</h1>
            <img src={gif} width="500" alt="Random GIF" />
            <input type="text" value={tag} onChange={(e)=>setTag(e.target.value)}/>
            <button onClick={()=>fetchGif(tag)}>Click for new</button>
          </div>
        </>
      );
}

export default Tag_V2
