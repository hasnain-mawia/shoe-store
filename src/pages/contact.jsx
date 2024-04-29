import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram,FaSnapchat,FaYoutube } from "react-icons/fa";




function Contact() {
 
  return (
    <div className='max-w-[1400px] mx-auto my-5'>
      <div className="sm:grid grid-cols-2 justify-between items-center">
        <div className='p-3 sm:p-0'>
          <div >
          <h2 className='text-[40px]'>Contact Us</h2>
          <p className='text-[20px]'>THE SHOE COMPANY, <br/>Dallas, Texas, USA <br/>+1 5590 1120 9910</p>
          </div>
          <div className='flex gap-5 my-3'>
          <Link className='text-[30px]' to={'https://www.facebook.com'}> <FaFacebook /> </Link>
          <Link className='text-[30px]' to={'https://www.instagram.com'}> <FaInstagram /> </Link>
          <Link className='text-[30px]' to={'https://www.snapchat.com'}> <FaSnapchat /> </Link>
          <Link className='text-[30px]' to={'https://www.youtube.com'}> <FaYoutube /> </Link>

          </div>
        </div>
        <div className='h-[500px]'>
        <iframe className='w-full h-full' src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14478.092714761691!2d67.0550888893799!3d24.88012994143236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33edc8e0a1b45%3A0x95854329956118e7!2sThe%20Aga%20Khan%20University%20Hospital%20(AKUH)!5e0!3m2!1sen!2s!4v1714032209479!5m2!1sen!2s" width="800" height="600" style="border:0;" allowFullScreen Loading="lazy" referrerPolicy="no-referrer-when-downgrade'></iframe>
          </div>
      </div>
    </div>
  )
}

export default Contact
