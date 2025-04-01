import { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import './App.css'

export default function App() {
  const [progress, setProgress] = useState(0)
  function handleProgressButtonClick() {
    if (progress < 100) {
      setProgress(progress + 10)
    }
  }

  return (
    <div>
    <ProgressBar progress={progress}/>
    <button onClick={handleProgressButtonClick}>Increase Progress</button>
    </div>
    )
}

