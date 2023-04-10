import {useRef} from 'react'
import AnalyticGraphics from '../assets/me.json'
import Lottie from 'react-lottie'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const PopForm = ({handleClose}) => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_b5w22s9', 'template_tvbiuzb', form.current, 'q3v_zG6YvFy3jUbci')
          .then((result) => {
              console.log(result.text);
              toast.success('Email sent suuccessfully')
          }, (error) => {
              console.log(error.text);
              toast.error('Oops! Something went wrong...')
          });
          e.target.reset()
      };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AnalyticGraphics,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

  return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <ToastContainer position='top-center' hideProgressBar='true'/>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
                <div id='formBox' className="border-solid border-[#00df9a] rounded-lg relative flex flex-col w-full transition duration-150 ease-in-out bg-white outline-none focus:outline-none shadow dark:bg-gray-700">
                    {/*header*/}
                    <div className="flex items-center justify-between p-5 rounded-t">
                        <Lottie options={defaultOptions} width={250} />
                    <h3 className="text-3xl text-center">
                        Thanks for taking the time to reach out. <br /> How can I help you today?
                    </h3>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={handleClose}
                    >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </button>
                    </div>
                    {/*body*/}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='p-8'>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className='relative z-0 w-full mb-6 group'>
                                    <input type="text" name="user_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00df9a] focus:outline-none focus:ring-0 focus:border-[#00df9a] peer" placeholder=" " required />
                                    <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00df9a] peer-focus:dark:text-[#00df9a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Name
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="email" name="user_email" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00df9a] focus:outline-none focus:ring-0 focus:border-[#00df9a] peer" placeholder=" " required />
                                    <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00df9a] peer-focus:dark:text-[#00df9a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Email
                                </label>
                                </div>
                            </div>
                            <label for="message" className="block mb-2 text-sm text-gray-900 dark:text-white">Your message</label>
                            <textarea id="message" rows="4" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-800 focus:ring-[#00df9a] focus:border-[#00df9a] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#00df9a] dark:focus:border-[#00df9a]"></textarea>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 rounded-b">
                            <button
                                className="text-white bg-[#1E293B] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                type="button"
                                onClick={handleClose}
                            >
                                Close
                            </button>
                            <button className="text-white bg-gradient-to-br from-green-400 to-[#00df9a] hover:bg-gradient-to-bl
                                dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default PopForm