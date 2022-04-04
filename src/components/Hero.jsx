import React from 'react'
import { images } from '../assets'
import { BiSearch } from 'react-icons/bi'


const Hero = () => {
  return (
    <div className="w-full h-screen relative">
        <video className="w-full h-full object-cover" autoPlay loop muted src={images.footage} />

        <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
        <div className="absolute w-full h-full top-0 flex flex-col justify-center text-center">
            <h1 className="text-4xl font-bold text-white">Keep the Party Going.</h1>
            <h2 className="text-4xl font-bold text-white py-4">Find the next drink near you:</h2>
            <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 my-5 rounded-xl text-black bg-gray-200/90">
                <div>
                    <input className='bg-transparent w-[300px] sm:w-[400px] font-sans text-xl p-2 focus:outline-none' type="text" placeholder="Search..."/>
                </div>
                <div>
                    <button className="rounded-xl"><BiSearch style={{ color: 'white' }}/></button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Hero