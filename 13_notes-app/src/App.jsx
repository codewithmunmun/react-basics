import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    const copyTask = [...task];

    copyTask.push({title, details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  // for this copyTask is new variable, not as above where we are mutating the state directly, here we are creating a new variable and then pushing the new task into it and then setting the state with the new variable, this way we are not mutating the state directly and we are following the immutability principle of react.

  const deleteNote = (idx) => {
    const copyTask =  [...task];
    console.log(copyTask[idx]);
    
    copyTask.splice(idx, 1)
    
    setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      
      <form onSubmit={(e)=> {
        submitHandler(e)
      }} className='flex flex-col lg:w-1/2 gap-4 items-start p-10'>

        <h1 className='text-3xl font-bold'>Add notes</h1>

        {/* first input for heading */}
        <input 
          type="text" 
          placeholder='Enter Notes Heading'
          className='px-5 py-2 w-full border-2 outline-none font-medium rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* second input for details */}
        <textarea 
          type="text"
          className='px-5 py-2 flex flex-row items-start w-full h-32 border-2 outline-none font-medium rounded'
          placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button className='bg-white active:scale-95 w-full outline-none font-medium text-black px-5 py-2 rounded'>Add note</button>

  

      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2 '>
        <h1 className='text-4xl font-bold'>Recent notes</h1>
        <div className='flex flex-wrap gap-5 items-start justify-start h-[90%] overflow-auto'>
          {task.map(function(elem, idx){
            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-2xl py-4 pl-6 pr-3 mt-5 text-black bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/709/non_2x/sticky-note-paper-background-free-png.png")]'>

              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>

                <p className='mt-4 leading-tight text-xs font-semi text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full py-1 text-xs rounded font-bold bg-red-500 text-white cursor-pointer active:scale-95'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
