import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Index from './Pages/Index'
import Courses from './Pages/Courses'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Signup from './components/Signup'

function App() {
  return (
    <>
   
   <div className="dark:bg-slate-900 dark:text-white">

    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    </div>
    </>
  )
}

export default App