import React from 'react'

function Herosection() {
  return (
    <div>
        <div className="max-w-[1400px] flex flex-col sm:flex-row justify-center sm:items-center sm:justify-between h-[70vh] sm:h-[700px] mx-auto px-3">
        <div>
            <h2 className='text-[28px] leading-[30px] sm:text-[60px] md:text-[90px] font-bold sm:leading-[105px] text-left text-white'>THE <br/> SHOES <br/> COMPANY <br/></h2>
        </div>
        <div className="h-full bg-[url('../../public/Images/background-shoe-road.jpg')] bg-no-repeat bg-center bg-contain sm:bg-right">
            <img className='max-h-[300px] sm:max-h-[650px] mx-auto' src="../../public/Images/Banner-shoe.png" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Herosection
