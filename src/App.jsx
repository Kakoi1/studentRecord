import { useState } from 'react'
import Student from './components/student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Student></Student>
    </div>
  )
}

export default App
