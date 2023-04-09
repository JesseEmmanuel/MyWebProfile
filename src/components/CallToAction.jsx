import {useState} from 'react'
import PopForm from './PopForm'

const CallToAction = () => {
  const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
  return (
    <div className='w-full bg-white py-10 px-4'>
      <div className='max-w-[800px] mt-[-80px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className="w-full p-4 text-center">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Looking for a developer?</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">I’m always open to discussing project works or partnership opportunities.</p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <button onClick={handleShow} type="button" class="text-[#00df9a] hover:text-white border-2 border-[#00df9a] hover:bg-[#00df9a] focus:ring-4 focus:outline-none focus:ring-[#00df9a] 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-[#00df9a] dark:text-[#00df9a] dark:hover:text-white dark:hover:bg-[#00df9a] 
                dark:focus:ring-[#00df9a]">
                    Let's Talk
                </button>
            </div>
        </div>
      </div>
      {show ? (<PopForm handleClose={handleClose} />) : null }
    </div>
  )
}

export default CallToAction