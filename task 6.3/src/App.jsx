import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Counter from './Counter'
import './counter.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Counter></Counter>
    </div>
  )
}

export default App
