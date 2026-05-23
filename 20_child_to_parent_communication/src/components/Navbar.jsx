
const Navbar = (props) => {

    function changeTheme(){
        props.setTheme('dark')
        
    }

  return (
    <div>
      <button onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default Navbar
