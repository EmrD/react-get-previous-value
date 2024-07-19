import './App.css'
import Dollar from './dollar'
import { useState } from 'react'

function App() {
  const [amount , setAmount] = useState(29.08)
  
  return (
    <>
      <Dollar amount={amount}/>
      <button onClick={() => setAmount(amount - 0.34)}>
        Down
    </button>
    <button onClick={() => setAmount(amount + 1.78)}>
        Up
    </button>
    </>
  )
}

export default App
