import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFIllPersonalLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import Projects from "./Projects"


const Navbar = () => {
   const [nav,setNav] =useState(false)
   const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt='logo' style={{width: '50px'}}/>
        </div>
            <ul className='hidden md:flex'> 
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
       

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/> }
            </div>

           <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4x'>Home</li>
                <li className='py-6 text-4x'>About</li>
                <li className='py-6 text-4x'>Skills</li>
                <li className='py-6 text-4x'>Projects</li>
                <li className='py-6 text-4x'>Contact</li>
           </ul>

              {/* icons */}
            <div className='hidden'></div>
           



    </div>
  )
}

export default Navbar