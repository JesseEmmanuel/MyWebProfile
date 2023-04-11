import React from 'react'
import AnalyticGraphics from '../assets/me.json'
import Lottie from 'react-lottie'

const Intro = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AnalyticGraphics,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
  return (
    <div className='w-full bg-white py-10'>
        <div className='max-w-[1240px] h-screen mx-auto grid md:grid-cols-2'>
            <Lottie options={defaultOptions} width={400} />
            <div className="flex flex-col mx-8 justify-center">
                <p className="text-[#00df9a] font-bold text-center md:text-left sm:text-left">INTRODUCTION</p>
                <h1 className="sm:text-3xl md:text-4xl text-center md:text-left sm:text-left text-2xl text-[#1E293B] font-bold my-4">Who Am I?</h1>
                <p className='text-center md:text-left sm:text-left'>
                As an aspiring web developer, I am passionate about creating functional, responsive, and visually appealing websites. 
                I have experience with HTML, CSS, JavaScript, PHP, WordPress,  React, Codeigniter and Laravel. My goal is to create websites with an intuitive user experience that 
                meets the needs of the end-user. I am committed to staying up-to-date with the latest trends and technologies in the industry and am excited to continue growing my 
                skills and expertise as a web developer.
                </p>
                {/* <button className='bg-[#000300] py-3 px-5 rounded-lg mt-4 text-[#00df9a] w-[250px] text-sm font-bold'>Get Started</button> */}
            </div>
        </div>
    </div>
  )
}

export default Intro