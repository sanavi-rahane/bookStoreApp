import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
    <Navbar/>
 
    {/* hero */}
    <div>
    <div className="hero h-[400px]" style={{backgroundImage: 'url(ttps://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5 font-size-300">There is no friend as loyal as book!!</p>
      <Link to={'/course'}><button className="btn btn-secondary">Explore New!!</button></Link>
    </div>
  </div>
</div>
    </div>
{/* countup */}
<div className='mt-10 mb-10'>
<div className="flex  items-center justify-center  ">
<div className="stats shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">Books Stocks</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc"></div>
  </div>
   
  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-secondary">4,200</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
</div>
</div>
 {/* careousel */}
 <div>
<div className="carousel carousel-end rounded-box">
  {
    list.map((item)=>{
      return(
        <>
      <div className="carousel-item">
        <div className='h-[200px]'></div>
        <img src={item.image} alt="Drink" className='w-[250px] h-[300px]' />
  </div> 
      </>)
    })
  }

</div>
</div>


{/* <div>
<div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink" />
  </div>
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink" />
  </div>
</div>
</div> */}


    <Footer/>
    </>
  )
}

export default About