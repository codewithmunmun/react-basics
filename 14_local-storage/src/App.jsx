const App = () => {

  localStorage.setItem('user', 'John')
  localStorage.setItem('age', 21)
  
  const user = localStorage.getItem('user')
  const age = localStorage.getItem('age')
  console.log(user, age);

  localStorage.removeItem('user')
  localStorage.removeItem('age')

  // since for objects and arrays we cannot directly store them in localStorage, we need to convert them into string format using JSON.stringify() method and then we can store them in localStorage

  const user2 = {
    username: 'Aman',
    age: 27,
    city: 'Roorkee'
  }
  localStorage.setItem('user', JSON.stringify(user2))

  const user3 = JSON.parse(localStorage.getItem('user'))
  console.log(user3);
  // it will give data in object format as we have parsed it back into its original format using JSON.parse() method.

  return (
    <div>
      App
    </div>
  )
}

export default App
