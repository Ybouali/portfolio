/* eslint-disable jsx-a11y/img-redundant-alt */
import logo from '../assets/yassine.JPG'
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-scroll'


export default function Navbar() {

    const [showNav, setShowNav] = useState(false);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src={logo} alt='photo' style={{ width: '50px' }} />
        </div>
        {/* menu */}
        <ul className='hidden md:flex'> 
            <li>
                <Link to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to='skills' smooth={true} duration={500}>
                    Sklils
                </Link>
            </li>
            <li>
                <Link to='work' smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link to='contact' smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
        <div onClick={() => setShowNav(!showNav)} className='md:hidden z-10 cursor-pointer'>
            {!showNav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobile menu */}
        <ul className={!showNav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192fe4] flex flex-col justify-center items-center'}>
            <li className='py-6 text-3xl'>
                <Link onClick={() => setShowNav(!showNav)} to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-3xl'>
                <Link onClick={() => setShowNav(!showNav)} to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-3xl'>
                <Link onClick={() => setShowNav(!showNav)} to='skills' smooth={true} duration={500}>
                    Sklils
                </Link>
            </li>
            <li className='py-6 text-3xl'>
                <Link onClick={() => setShowNav(!showNav)} to='work' smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className='py-6 text-3xl'>
                <Link onClick={() => setShowNav(!showNav)} to='contact' smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-600'>
                    <a
                        className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#302e2e]'>
                    <a
                        className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#06c42fc7]'>
                    <a
                        className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-[#717171c9]'>
                    <a
                        className='flex justify-between items-center w-full text-gray-300'
                    href="/">
                        Contact <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}