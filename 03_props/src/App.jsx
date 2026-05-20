import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      
      <Card user="Aman Singh" age={21} img='https://plus.unsplash.com/premium_photo-1774271492663-a7d50adbed56?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user="Anurag" age={22} img='https://plus.unsplash.com/premium_photo-1775450651387-2a2085698dad?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /> 
      <Card user="Aditya" age={24} img='https://plus.unsplash.com/premium_photo-1764691305643-81bffa53e848?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /> 
    </div>
  )
}

export default App
