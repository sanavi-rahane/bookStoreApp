import React from 'react'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';

import Index from './Pages/Index'
import Courses from './Pages/Courses'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Signup from './components/Signup'
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
   
   <div className="dark:bg-slate-900 dark:text-white">

    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/course' element={authUser?<Courses/>:<Navigate to='/signup'/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Toaster />
      {/* <Footer/> */}
    </BrowserRouter>

    </div>
    </>
  )
}

export default App