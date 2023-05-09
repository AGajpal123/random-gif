
import React from 'react'
import './App.css'
import Random_V1 from './components/Random_V1'
import Tag_V1 from './components/Tag_V1'
import Random_V2 from './components/Random_V2'
import Tag_V2 from './components/Tag_V2'

const App = () => {
  return (
    <div>
      <h1>Random GIF!!</h1>
      <div className='main-container'>
         <Random_V2/>
         <Tag_V2/>
      </div>
    </div>
  )
}

export default App
