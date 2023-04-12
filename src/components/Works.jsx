import React from 'react'

const Works = () => {
  return (
    <div className='bg-white'>
        <div className='w-full bg-[#1E293B] py-10 px-4'>
            <div className='mx-auto max-w-[800px] h-[400px] text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>PROJECTS</p>
                <h1 className='md:text-4xl sm:text-3xl text-4xl text-white font-bold my-2'>Some of the projects I work with</h1>
                <div>
                    <p className='text-md mt-3 text-white'>
                    I've worked with WordPress for a year, designing websites using Elementor plugin and even added custom post types through Jet Engine. But then I felt like it was time to level up and switch to coding with React and Laravel to boost my career.
                    </p>
                </div>
            </div>
        </div>
        <div className='-mt-16'>
            <div className="grid grid-cols-1 gap-2 px-10 sm:grid-cols-1 md:grid-cols-4">
                {/* <div className="mx-auto grid md:grid-cols-4 grid-cols-1 p-6 max-w-[1240px] rounded-xl shadow-lg items-start py-16 -mt-36"> */}
                <div className="max-w-sm bg-white border text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-6 mb-4">
                    <a href="/#">
                        <img className="rounded-t-lg" src={process.env.PUBLIC_URL + "/assets/img/visitiloilo.png"} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="/#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Visit Iloilo Website</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">My first Wordpress development experience: a website for Iloilo LGU providing city information.</p>
                    </div>
                    <div>
                        <a href="https://visitiloilocity.com/" target={"_blank"} rel="noreferrer">
                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Visit Website
                            </button>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white border text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-6 mb-4">
                    <a href="/#">
                        <img className="rounded-t-lg" src={process.env.PUBLIC_URL + "/assets/img/totalvision.png"} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="/#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Vision Products</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A business that provides backup camera systems, connectors, and accessories to enhance drivers' safety, comfort, and convenience while on the road.</p>
                        <a href="https://totalvisionproducts.com/" target={"_blank"} rel="noreferrer">
                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Visit Website
                            </button>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white border text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-6 mb-4">
                    <a href="/#">
                        <img className="rounded-t-lg" src={process.env.PUBLIC_URL + "/assets/img/asianhomes.png"} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="/#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Asian Home Builders</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Asian Home Builders specializes in ready-to-move-in properties, home design, construction, and real estate services.</p>
                        <a href="https://asianhomebuilders.com/" target={"_blank"} rel="noreferrer">
                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Visit Website
                            </button>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white border text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-6 mb-4">
                    <a href="/#">
                        <img className="rounded-t-lg" src={process.env.PUBLIC_URL + "/assets/img/wearestellar.png"} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="/#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Stellar MLM Web App</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">My First <strong>React + Laravel</strong> Project: "We Are Stellar" was established as a sister company of "We Provide" to target financially capable market segments.</p>
                        <a href="https://wearestellar.net/" target={"_blank"} rel="noreferrer">
                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Visit Website
                            </button>
                        </a>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default Works