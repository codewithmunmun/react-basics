import axios from 'axios'
import { useState } from 'react'
const App = () => {

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }


  // since json data is asynchronous so if we directly "console.log(response.json())", then it will return Promise(pending)
  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   
  //   const data = await response.json()
  //   console.log(data);
    
  // }


    //     Instead of writing: 
    //     const response = await axios.get(url) 
    //     console.log(response.data)
          
    //     we directly extracted data using:
    //     const {data} = response
          
    //     This is called: Object Destructuring
  
  //   const getData = async() => {
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')

  //   console.log(data);
    
  // }

  const [data, setData] = useState([])

  const getData = async() => {
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data);
    
  }

  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function(elem, idx){
          return <h3 key={idx}>{idx+1}. Hello {elem.author}</h3>
        })}
      </div>
    </div>
  ) 
}

export default App



