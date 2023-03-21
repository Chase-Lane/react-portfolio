import React from 'react'
import Movie from '../assets/movieproject.png'

const Projects = () => {
  return (
    <div className='bg-[#0a192f] text-gray-300 flex flex-col  left-5 justify-between px-8 '>
          <h2 className='text-4xl sm:text-6xl text-pink-600 my-4 '>Movie Night</h2>  
          <img src={Movie} alt="project sample" />
          <a className='my-4' href="https://github.com/calebcarnett/Movie-Night">Link to Project</a>
          <p className='my-4'>Project that allows the user a place to view movie information and trailers through the use of the YouTube API.</p>
    </div>
  )
}

export default Projects