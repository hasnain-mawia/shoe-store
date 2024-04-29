import { useEffect, useState } from 'react';
import Headroom from 'react-headroom';
import { FaArrowTurnUp, FaFacebook, FaInstagram, FaSnapchat, FaYoutube, FaArrowRightLong  } from "react-icons/fa6";  
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Home() {
  const [toTop, settoTop] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const CloseMenu = () =>{
      setToggleMenu(!toggleMenu)
    }
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        settoTop(true)
      }else{
        settoTop(false)
      }
    })
  },[])
  
  const ScrollTop = () =>{
    window.scrollTo({
      top:0 , behavior: "smooth"
    })
  }
  return (
    <>
    {
      toggleMenu &&
    <div className={`relative top-0 left-0 h-[100vh] w-full z-100 ${toggleMenu ? "bg-[#a6a2a2]" : "bg-transparent"}`}></div>
    }
    <div className={`block sm:hidden w-[50%] h-[300px] bg-[#737373] fixed right-0 top-0 rounded-lg mt-3 z-50 mr-3 duration-200 ${toggleMenu ? "translate-x-0": "translate-x-[500px]"}`}>
    <button>
    <FaArrowRightLong onClick={()=> CloseMenu()} className={`absolute text-[white] top-[30px] right-[20px] text-[30px] pointer `}/> 
    </button>
    <div className='flex flex-col justify-center gap-5 items-center h-full'>
    <ul className='flex flex-col justify-end gap-5 sm:gap-5 text-[16px] text-[white] sm:text-[17px]'>
          <Link to={'/'}>Home</Link>
          <a href="#how-its-works">How its Works?</a>
          <a href="#about-us">About</a>
          <a href="#testimonails">Testimonails</a>
          <a href="#contact">Contact us</a>
          </ul>
          </div>
    </div>
    <Headroom>
      <div className='bg-[#000]'>
      <div className='max-w-[1400px] mx-auto flex items-center justify-between px-3 sm:px-4'>
        <div>
          <Link to={'/'}>
          <img className='h-[120px]' src="../../public/Images/Logo.png" alt="" />
          </Link>
        </div>
        <div className='flex justify-end gap-5 items-center'>
        <IoMenu onClick={setToggleMenu} className='pointer sm:hidden text-[32px] text-white'/>
          <ul className='sm:flex justify-end gap-5 sm:gap-5 text-[16px] sm:text-[17px] text-white hidden '>
          <Link to={'/'}>Home</Link>
          <a href="#how-its-works">How its Works?</a>
          <a href="#about-us">About</a>
          <a href="#testimonails">Testimonails</a>
          <a href="#contact">Contact us</a>
          </ul>
        </div>
      </div>
    </div>
    </Headroom>
                {/* -------------------- Hero Section ----------------------------- */}
    <div className="max-w-[1400px] flex flex-col sm:flex-row justify-center sm:items-center sm:justify-between h-[70vh] sm:h-[700px] mx-auto px-3">
        <div>
            <h2 className='text-[28px] leading-[30px] sm:text-[60px] md:text-[90px] font-bold sm:leading-[105px] text-left text-white'>THE <br/> SHOES <br/> COMPANY <br/></h2>
        </div>
        <div className="h-full bg-[url('../../public/Images/background-shoe-road.jpg')] bg-no-repeat bg-center bg-contain sm:bg-right">
            <img className='max-h-[300px] sm:max-h-[650px] mx-auto' src="../../public/Images/Banner-shoe.png" alt="" />
        </div>
      </div>
                {/* -------------------- Hero Section ----------------------------- */}
                {/* -------------------- HowitsWorks ----------------------------- */}
    <div id='how-its-works' className='max-w-[1400px] mx-auto'>
      <section>
        <h2 className='sm:text-[50px] text-[30px] sm:leading-[50px] text-center my-5'>Have they finally made <br/> the perfect workout shoe?</h2>
        <div className='relative h-[40vh] sm:h-full flex items-center justify-center px-3 '>
          <span className='absolute left-0 top-0'>
            <div className='sm:w-[200px] w-[150px] relative'>
              <h3 className='sm:text-[26px] text-[16px] font-bold'>THE HEEL</h3>
              <p className='sm:text-[18px] text-[13px]'>The heel is well-built, has appropriate elevation and is not too rigid.</p>
            </div>
            <img className='h-[80px] absolute right-[60px] sm:right-0 sm:h-[150px] rotate-50' src="../../public/Images/arrow-1.png" alt="" /></span>
          <span className='absolute right-0 top-0'>
          <div className='sm:w-[200px] w-[150px] relative'>
            <img className='h-[65px] sm:h-[150px] absolute left-[10px] sm:left-[-80px] bottom-[-70px] sm:top-[-50px] rotate-[140deg] sm:rotate-0' src="../../public/Images/arrow-2.png" alt="" />
              <h3 className='sm:text-[26px] text-[16px] font-bold'>THE FRONT</h3>
              <p className='sm:text-[18px] text-[13px]'>The front is comfortable and adjusts well to the shape of your foot.</p>
            </div>
            </span>
          <span className='absolute bottom-0 left-[23%]'>
            <img className='sm:h-[150px] h-[80px]' src="../../public/Images/arrow-3.png" alt="" />
          <div className='sm:w-[200px] w-[150px]'>
              <h3 className='sm:text-[26px] text-[16px] font-bold'>TRACTION</h3>
              <p className='sm:text-[18px] text-[13px]'>The shoe has good traction and doesn't slip easily.</p>
            </div>
            </span>

          <img className='mx-auto sm:h-full h-[200px]' src="../../public/Images/how-it-works.png" alt="" />

        </div>

      </section>
    </div>
                {/* -------------------- /HowitsWorks ----------------------------- */}

                {/* -------------------- About us ----------------------------- */}
    <div id='about-us' className="max-w-[1400px] mx-auto my-10">
      <section className='sm:grid grid-cols-2 gap-11 items-center justify-between p-3'>
        <div className="bg-[url('../../public/Images/about-us-background.png')] bg-no-repeat sm:h-[850px]"><img src="../../public/Images/about-shoe-company.png" alt="" /></div>
        <div>
        <h2 className='text-[28px] leading-[30px] sm:text-[60px] md:text-[90px] font-bold sm:leading-[105px] text-left text-white my-5'>About us<br/></h2>
        <p className='text-[16px] sm:text-[20px]'>For each one of those shoe sweethearts out there, THE SHOE COMPANY offer the one-stop goal to pick the correct match of footwear. 
        <br/>
        <br/>
        Gone are the days when you needed to go from store to store to locate the correct style and size for yourself.
        <br/>
        <br/>
        At THE SHOE COMPANY,  you can locate a vast accumulation of dashing footwear in all sizes and styles, all inside a couple of snaps.
        <br/>
        <br/>
        Simple right? Not just we are here to spare your time, we are putting forth you the most dazzling footwear alternatives from all the first-rate brands like DAVINCHI, PRINCESS, and SIGNATURE. At ‘Organization Name’, we offer men, ladies, and child’s shoes perfect for any and each event.</p>
        </div>
      </section>
    </div>
                {/* -------------------- /About us ----------------------------- */}

                {/* -------------------- Testimonails ----------------------------- */}
    <div id='testimonails' className="max-w-[1400px] mx-auto sm:mt-[100px] bg-[url('../../public/Images/Testimonail_bg.jpg')] bg-cover bg-no-repeat sm:h-[500px]">
      <section className='sm:grid grid-cols-3 mx-auto gap-11 items-center justify-between p-3 sm:h-[500px]'>
        <div className='max-w-[300px] text-center flex flex-col items-center justify-center gap-10'>
          <img className='rounded-[300px] h-[250px]' src="../../public/Images/Person 1.png" alt="" />
        <span>
          <p>“Looking for shoes that are built just for you? THE SHOE COMPANY is the way to go. Love the design and build quality.”</p>
        </span>
        </div >
        <div className='max-w-[300px] text-center flex flex-col items-center justify-center gap-10'>
          <img className='rounded-[300px] h-[250px]' src="../../public/Images/Person 2.png" alt="" />
        <span>
          <p>“Looking for shoes that are built just for you? THE SHOE COMPANY is the way to go. Love the design and build quality.”</p>
        </span>
        </div>
        <div className='max-w-[300px] text-center flex flex-col items-center justify-center gap-10'>
          <img className='rounded-[300px] h-[250px]' src="../../public/Images/Person 3.png" alt="" />
        <span>
          <p>“Looking for shoes that are built just for you? THE SHOE COMPANY is the way to go. Love the design and build quality.”</p>
        </span>
        </div> 
      </section>
    </div>
                {/* -------------------- Testimonails ----------------------------- */}

                {/* -------------------- Contact ----------------------------- */}
    <div id='contact' className='max-w-[1400px] mx-auto my-5'>
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
                  {/* -------------------- /Contact ----------------------------- */}


    </div>
                  {/* -------------------- Footer ----------------------------- */}
    {
      toTop &&
      <button onClick={ScrollTop} className='bg-white fixed bottom-[20px] animate-bounce right-[20px] p-3 rounded-[30px] shadow-2xl border-[2px] border-black'>
      <FaArrowTurnUp className=' text-black text-[30px]'/>
    </button>
}
                    {/* -------------------- /Footer ----------------------------- */}
    </>
  )
}

export default Home
