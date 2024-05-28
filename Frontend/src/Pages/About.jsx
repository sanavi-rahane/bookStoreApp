import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const About = () => {
  return (
    <>
    <Navbar/>
    <div>
    <div className="carousel w-full mt-40">
  <div id="item1" className="carousel-item w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://t3.ftcdn.net/jpg/03/64/46/88/240_F_364468812_4A3M9kyuIcKGOKyY5sUtmwQ26WBoBCW5.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
    <Footer/>
    </>
  )
}

export default About