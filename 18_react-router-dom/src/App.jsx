import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import Product from './pages/Product'
// Routes is a container that will contain all the routes in the application

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} /> 
          {/* This is the default route */}
          {/* Route will work for all the routes in the application, it will render the component that matches the path */}

          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
        </Routes>
    </div>
  )
}

export default App
