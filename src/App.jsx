import { useState } from 'react'
import MainCard from './Components/MainCard'
import './App.css'
import VideoAssets from './Components/VideoAssets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <MainCard/>
      <VideoAssets/>
    </div>
  )
}

export default App
