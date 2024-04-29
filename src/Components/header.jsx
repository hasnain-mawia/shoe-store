import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import Headroom from 'react-headroom';
import { CgSpinnerTwoAlt } from "react-icons/cg";

function Header() {
  const [clickbtn , setClickbtn] = useState(false);
  return (
    <Headroom>
      <div className='bg-[#000]'>
      <div className='max-w-[1400px] mx-auto flex items-center justify-between px-3 sm:px-4'>
        <div>
          <Link to={'/'}>
          <img className='h-[120px]' src="../../public/Images/Logo.png" alt="" />
          </Link>
        </div>
        <div className='flex justify-end gap-5 items-center'>
        <IoMenu className=' sm:hidden text-[32px] text-white'/>
          <ul className='sm:flex justify-end gap-5 sm:gap-5 text-[16px] sm:text-[17px] text-white hidden '>
          <Link to={'/'}>Home</Link>
          <Link to={'#HowitsWorks'}>How it Works?</Link>
          <Link to={'#about'}>About</Link>
          <Link to={'#testimonail'}>Testimonail</Link>
          <Link to={'#contact'}>Contact us</Link>
          </ul>
          <div>
            <button onClick={setClickbtn} className='bg-white text-black p-2 px-5 rounded-lg flex items-center gap-2'><CgSpinnerTwoAlt className={`text-[30px] ${clickbtn ? "animate-spin" : "hidden"}`}/> {!clickbtn && "Contact us"}</button>
          </div>
        </div>
      </div>
    </div>
    </Headroom>
  )
}

export default Header
