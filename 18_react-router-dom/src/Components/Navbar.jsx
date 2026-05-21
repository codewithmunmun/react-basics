import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h3>Munmun</h3>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/product'>Product</Link>

          {/* Link is a component that is used to navigate to different routes in the application, it is similar to anchor tag but it will not refresh the page, it will only change the url and render the component that matches the url */}
        </div>
    </div>
  )
}

export default Navbar
