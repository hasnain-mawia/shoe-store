import React from 'react'

function Testimonails() {
  return (
    <div className="max-w-[1400px] mx-auto sm:mt-[100px] bg-[url('../../public/Images/Testimonail_bg.jpg')] bg-cover bg-no-repeat sm:h-[500px]">
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
  )
}

export default Testimonails
