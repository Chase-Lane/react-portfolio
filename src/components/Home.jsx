import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


  
const Home = () => {
  return (
    <div  name='home' className='w-full h-screen bg-[#0a192f]'>


        <div className='flex fixed flex-col top-[15%] left-5'>
                
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Hello my name is Chase</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Web Developer. </h2>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover: bg-pink-600 hover:border-pink-600'  > View Projects  
                        <span className='group-hover:rotate-90 duration-300'> 
                         <HiArrowNarrowRight className='ml-3'/>
                        </span>
                     </button>

                </div>
        </div>

    </div>
  )
}

export default Home