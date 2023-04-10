import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='max-w-[800px] my-12 w-full mx-auto text-center flex flex-col justify-center'>
            <div className='py-6'>
                <h1 className='flex text-3xl text-white font-bold justify-center'>Jesse<p className='text-[#00df9a]'>Dev</p></h1>
                <p className='text-[#00df9a]' >Code.Learn.Grow</p>
            </div>
            <div className='py-6'>
                <h2 className='text-md mt-3 text-white text-2xl'>
                Code is not just a language, it's a way of thinking.
                </h2>
                {/* <button className='bg-[#00df9a] py-3 px-5 rounded-lg mt-4 text-black text-sm font-bold'>Get Started</button> */}
            </div>
            <div class="inline-flex rounded-md shadow-sm justify-center py-8" role="group">
                <a href="https://github.com/JesseEmmanuel" target={"_blank"} rel="noreferrer">
                    <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-transparent border border-white rounded-l-lg hover:bg-white hover:text-black focus:z-10 focus:ring-2 focus:ring-white focus:bg-white focus:text-black dark:border-black dark:text-black dark:hover:text-black dark:hover:bg-white dark:focus:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/jesse-emmanuel-450a95194/" target={"_blank"} rel="noreferrer">
                    <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-transparent border-t border-b border-r border-white hover:bg-white hover:text-black focus:z-10 focus:ring-2 focus:ring-white focus:bg-white focus:text-black dark:border-black dark:text-black dark:hover:text-black dark:hover:bg-white dark:focus:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>
                    </button>
                </a>
                <a href="mailto:jesseemmanuel@gmail.com" target={"_blank"} rel="noreferrer">
                    <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-transparent border-t border-b border-white hover:bg-white hover:text-black focus:z-10 focus:ring-2 focus:ring-white focus:bg-white focus:text-black dark:border-black dark:text-black dark:hover:text-black dark:hover:bg-white dark:focus:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/> </svg>
                    </button>
                </a>
                <a href="https://web.facebook.com/jesse.emmanuel/" target={"_blank"} rel="noreferrer">
                    <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-transparent border border-white rounded-r-md hover:bg-white hover:text-black focus:z-10 focus:ring-2 focus:ring-white focus:bg-white focus:text-black dark:border-black dark:text-black dark:hover:text-black dark:hover:bg-white dark:focus:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> </svg>
                    </button>
                </a>
            </div>
            <div className='justify-end'>
                <div className='py-6'>
                    <h2 className='text-md mt-3 text-white'>
                        Handcrafted by me @twentytwentythree
                    </h2>
                    <br />
                    <p className='text-white'>Powered by Tailwind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer