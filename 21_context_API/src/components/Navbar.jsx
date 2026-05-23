import Nav2 from './Nav2'

const Navbar = (props) => {

  console.log(props.children);

  return (
    <div className='nav'>
        <h2>Munmun</h2>
        <Nav2 theme={props.theme}/>
    </div>
  )
}

export default Navbar
// it will print array of 2 children in the console


// instead of above, we can also write like:

// import Nav2 from './Nav2'

// const Navbar = (children, theme) => {

//   console.log(children);

//   return (
//     <div className='nav'>
//         <h2>Munmun</h2>
//         <Nav2 theme={theme}/>
//     </div>
//   )
// }

// export default Navbar

// it is called destructuring, due to which both 
// 1) theme is shown in server, and 
// 2) array of 2 children gets printed on console