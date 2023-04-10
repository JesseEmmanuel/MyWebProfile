import React from 'react'
import Frontend from '../assets/frontend.json'
import Backend from '../assets/backend.json'
import DevTools from '../assets/tools.json'
import Lottie from 'react-lottie'

const Skills = () => {
    const frontedLottie = {
        loop: true,
        autoplay: true,
        animationData: Frontend,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const backendLottie = {
        loop: true,
        autoplay: true,
        animationData: Backend,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const toolsLottie = {
        loop: true,
        autoplay: true,
        animationData: DevTools,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
  return (
    <div className='w-full bg-white py-16'>
        <div className='mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>DEVELOPMENT SKILLS</p>
            <h1 className='md:text-4xl sm:text-3xl text-4xl text-[#1E293B] font-bold my-2'>My Technology Stacks</h1>
        </div>
        <div class="mx-auto grid md:grid-cols-3 grid-cols-1 p-6 max-w-[1240px] bg-white rounded-xl shadow-lg items-start py-16 mt-8">
            <div className='mx-auto text-center flex flex-col justify-center px-6'>
                <div className='self-center py-4'>
                    {/* <BsIcons.BsFront size={50} color={'#00df9a'} /> */}
                    <Lottie options={frontedLottie} width={200} />
                </div>
               <h1 className='md:text-2xl sm:text-xl text-2xl text-[#1E293B] font-bold my-4'>Frontend-Development</h1>
               <div className='py-8 border-t-2 border-gray-300'>
                    <p className='text-[#2E4EA5] text-xl mb-3 font-bold'>Basics: </p>
                    <div className='pb-4'>
                            <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-cyan-700 dark:text-white">HTML/CSS</span>
                                <span class="text-sm font-medium text-cyan-700 dark:text-white">95%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="text-xs font-medium text-center bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl dark:focus:ring-green-800 h-2 rounded-full" style={{width: '90%'}}>    
                                </div>
                            </div>   
                    </div>   
                    <div className='pb-4'>
                            <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-cyan-700 dark:text-white">Javascript</span>
                                <span class="text-sm font-medium text-cyan-700 dark:text-white">75%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
                                    dark:focus:ring-green-800 h-2 rounded-full" style={{width: '75%'}}></div>
                            </div> 
                    </div>
                    <div className='pb-4'>
                            <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-cyan-700 dark:text-white">Bootstrap</span>
                                <span class="text-sm font-medium text-cyan-700 dark:text-white">80%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
                                    dark:focus:ring-green-800 h-2 rounded-full" style={{width: '80%'}}></div>
                            </div>
                        </div>
                    <div className='pb-4'>
                        <p>Tailwind</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
                                    dark:focus:ring-green-800 h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                    </div>
               </div>
               <div className='py-8 border-t-2'>
                    <p className='text-[#2E4EA5] text-xl mb-3 font-bold'>Framework/Library: </p>  
                    <div className='pb-4'>
                        <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-cyan-700 dark:text-white">React JS</span>
                                <span class="text-sm font-medium text-cyan-700 dark:text-white">75%</span>
                            </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
                                    dark:focus:ring-green-800 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>   
                    </div> 
               </div>
               <div className='py-8 border-t-2'>
                    <p className='text-[#2E4EA5] text-xl mb-3 font-bold'>Content Management Systems: </p>  
                    <div className='pb-4'>
                        <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-cyan-700 dark:text-white">Wordpress</span>
                                <span class="text-sm font-medium text-cyan-700 dark:text-white">90%</span>
                            </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
                                    dark:focus:ring-green-800 h-2 rounded-full" style={{width: '90%'}}></div>
                        </div>   
                    </div>
                    <div className='pb-4'>
                            <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-cyan-700 dark:text-white">Joomla</span>
                                <span class="text-sm font-medium text-cyan-700 dark:text-white">60%</span>
                            </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
                                    dark:focus:ring-green-800 h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>   
                    </div> 
               </div>
            </div>
            <div className='mx-auto text-center flex flex-col justify-center px-8'>
                <div className='self-center py-4'>
                <Lottie options={backendLottie} width={250} />
                </div>
                <h1 className='md:text-2xl sm:text-xl text-2xl text-[#1E293B] font-bold my-4'>Backend-Development</h1>  
                <div className='py-8 border-t-2'>
                    <p className='text-[#2E4EA5] text-xl mb-3 font-bold'>Native: </p>
                    <div className='pb-4'>
                        <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-cyan-700 dark:text-white">PHP</span>
                                <span class="text-sm font-medium text-cyan-700 dark:text-white">85%</span>
                            </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
                                    dark:focus:ring-green-800 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>   
                    </div>
                </div>
                <div className='py-8 border-t-2'>
                    <p className='text-[#2E4EA5] text-xl mb-3 font-bold'>Frameworks: </p>
                    <div className='pb-4'>
                        <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-cyan-700 dark:text-white">Codeigniter 3</span>
                                <span class="text-sm font-medium text-cyan-700 dark:text-white">85%</span>
                            </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
                                    dark:focus:ring-green-800 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>   
                    </div>
                    <div className='pb-4'>
                        <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-cyan-700 dark:text-white">Larave 8/9</span>
                                <span class="text-sm font-medium text-cyan-700 dark:text-white">80%</span>
                            </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
                                    dark:focus:ring-green-800 h-2 rounded-full" style={{width: '80%'}}></div>
                        </div>   
                    </div>
                </div>
                <div className='py-8 border-t-2'>
                    <p className='text-[#2E4EA5] text-xl mb-3 font-bold'>Database: </p>
                    <div className='pb-4'>
                        <div class="flex justify-between mb-1">
                                <span class="text-base font-medium text-cyan-700 dark:text-white">MySQL</span>
                                <span class="text-sm font-medium text-cyan-700 dark:text-white">75%</span>
                            </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
                                    dark:focus:ring-green-800 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>   
                    </div>
                </div>  
            </div>
            <div className='mx-auto text-center flex flex-col justify-center px-6'>
                <div className='self-center py-4'>
                    <Lottie options={toolsLottie} width={140} />
                </div>
                <h1 className='md:text-2xl sm:text-xl text-2xl text-[#1E293B] font-bold my-4'>Development Tools</h1>
                <div className='py-8 border-t-2'>
                    <p className='text-[#2E4EA5] text-xl mb-3 font-bold'>Local Environment: </p>
                    <div className='pb-4'>
                        <p>Xampp</p>
                        <p>MySQL WorkBench</p>
                        <p>Mailtrap.io (Email Integrations)</p>  
                    </div>
                </div> 
                <div className='py-8 border-t-2'>
                    <p className='text-[#2E4EA5] text-xl mb-3 font-bold'>Designing: </p>
                    <div className='pb-4'>
                        <p>Canva</p>
                        <p>Visily (For Mock Ups)</p>
                    </div>
                </div>
                <div className='py-8 border-t-2'>
                <p className='text-[#2E4EA5] text-xl mb-3 font-bold'>Repository: </p>
                    <div className='pb-4'>
                        <p>GitHub</p>
                    </div>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Skills