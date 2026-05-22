import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/courses' element={<Courses />}/>

          {/* Dynamic Routing is used here for path='/courses/:id' , which means anything written after route /courses  like "/hhbshhcb" will open CourseDetail page always (instead of Page not found | 404 Error) */}
          <Route path='/courses/:courseId' element={<CourseDetail />}/>
          {/* Here :id is a URL parameter. */}

          <Route path='/product' element={<Product />}>
            {/* nested Routing */}
            <Route path='men' element={<Men />}/>
            <Route path='women' element={<Women />}/>
            <Route path='kids' element={<Kids />}/>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
