
const App = () => {
  return (
    // instead of using a div to wrap the elements, we can use React.Fragment or the shorthand syntax <>
    <>
      <div id="dad">
        <h1 id = 'child1'>Hello</h1>
        <h2 id = 'child2'>Hi</h2>
      </div>
      <div id="mom"></div>
    </>
  )
}

export default App