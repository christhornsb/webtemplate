import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPersonCircle } from 'react-icons/bs'
import { images } from '../assets'
import {FiMenu} from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = React.useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex w-full justify-between items-center h-20 p-4 z-10'>

        <div>
          <img src={images.logo} className='flex'></img>
        </div>

        <ul className='flex text-lg gap-3'>
          <li className='hover:text-[#f000ff] transition ease-in-out duration-300 cursor-pointer'>Home</li>
          <li className='hover:text-[#f000ff] transition ease-in-out duration-300 cursor-pointer'>Locations</li>
          <li className='hover:text-[#f000ff] transition ease-in-out duration-300 cursor-pointer'>Trending</li>
          <li className='hover:text-[#f000ff] transition ease-in-out duration-300 cursor-pointer'>Menu</li>
        </ul>

        <div className='hidden md:flex p-3 gap-5'>
          <BiSearch size={20}/>
          <BsPersonCircle size={20}/>

        </div>

        <div onClick={handleNav} className='md:hidden z-10'>
          {nav ? 
          <AiOutlineClose style={{ color: "black"}} size={20} />
          :
          <FiMenu size={20}/>
          }
        </div>

        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul>
            <img src={images.logo} className=''/>
            <li className='border-b text-xl'>Home</li>
            <li className='border-b text-xl'>Locations</li>
            <li className='border-b text-xl'>Trending</li>
            <li className='border-b text-xl'>Menu</li>
          </ul>
          <div className='flex flex-col my-4'>
            <button className='text-white rounded-lg flex justify-center'>
              <span className='self-center mr-1'>
                <BsPersonCircle />
              </span>
              Account
            </button>
          </div>
        </div>

    </div>
  )
}

export default Navbar;
