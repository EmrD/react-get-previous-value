import './App.css'
import Value from './value'
import { useState } from 'react'

function App() {
  const [amount , setAmount] = useState(29.08)
  
  return (
    <>
      <Value amount={amount}/>
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
