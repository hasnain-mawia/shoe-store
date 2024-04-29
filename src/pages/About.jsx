import React from 'react'

function About() {
  return (
    <div>
     <div className="max-w-[1400px] mx-auto my-10">
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
    </div>
  )
}

export default About
