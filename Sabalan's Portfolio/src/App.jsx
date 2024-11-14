import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="title">
            <h1>Welcome To Sab's Portfolio</h1>
        </div>
        <Card>ben</Card>
    </>
  )
}

export default App
