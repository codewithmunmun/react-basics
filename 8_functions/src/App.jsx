
const App = () => {
  
  const pageScrolling=(elem) => {
      if(elem > 0){
      console.log('Bottom to up scrolling');
      }else{
      console.log('Up to bottom scrolling');
      }
  }
  return (
  <div onWheel={(elem) => 
  pageScrolling(elem.deltaY)
  }
  >
    <div className='page1'></div>
    <div className='page2'></div>
    <div className='page3'></div>
    
  </div>
  )
}
export default App

