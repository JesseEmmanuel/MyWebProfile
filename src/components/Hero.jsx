import React from 'react'
import ReactTyped from 'react-typed'

const Hero = () => {
  return (
    <div>
        <div className='max-w-[800px] mt-[-80px] py-8 w-full h-screen mx-auto text-center flex flex-col justify-center sm:pt-4'>
            <p className='text-[#00df9a] font-bold p-2'>WEB DEVELOPER</p>
            <h1 className='md:text-5xl sm:text-4xl text-4xl text-white font-bold my-2'>Hi, I'm Jesse. Nice to meet you :)</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[#00df9a]'>
                <ReactTyped 
                    strings={['Code','Learn','Grow']} 
                    typeSpeed={140} 
                    backSpeed={140} 
                    loop={Infinity} />
                </p>
                <h2 className='text-md mt-3 text-white mx-8'>
                I am Highly invested in building websites and API-Driven Web Apps with JavaScript and PHP language/frameworks. Willing to learn more Application Development not limited in Web Applications.
                </h2>
                {/* <button className='bg-[#00df9a] py-3 px-5 rounded-lg mt-4 text-black text-sm font-bold'>Get Started</button> */}
            </div>
        </div>
          <div className="light x1"></div>
          <div className="light x2"></div>
          <div className="light x3"></div>
          <div className="light x4"></div>
          <div className="light x5"></div>
          <div className="light x6"></div>
          <div className="light x7"></div>
          <div className="light x8"></div>
          <div className="light x9"></div>
    </div>
  )
}

export default Hero