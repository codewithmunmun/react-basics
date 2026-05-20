import { useState } from 'react'

const App = () => {

  const [num, setNumber] = useState(0)

  function increaseNum(){
    setNumber(num + 1)
  }
  
  function decreaseNum(){
    setNumber(num-1)
  }

  function jump5Num(){
    setNumber(num + 5)
  }

  return (
    <div className ='box'>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>Jump 5</button>
    </div>
  )
}

export default App
