import React from 'react'

function Hero() {
  return (
    <>
     <div className='w-full h-96 flex my-40 justify-evenly'>

        <div className=" flex flex-col w-2/3 h-full gap-10 p-10">

          <h1 className=' text-white text-6xl font-extrabold font-mono'>Discover The Best of All Categories</h1>
          <p className=' text-[#BABABA] text-3xl font-bold font-mono'>Browse by category, brand, or price range</p>
          <div className="flex gap-10">

            <input type="text" className=" w-3/5 border bg-[#373737] border-gray-300 rounded-3xl p-2 focus:outline-none focus:border-blue-500" placeholder="Enter your text..." />
            <button className="text-white text-lg font-helvetica no-underline border-2 border-white rounded-3xl transition duration-200  px-8 py-2 focus:outline-none focus:border-blue-500 hover:text-black hover:bg-white">Go</button>

          </div>

        </div>
        
        <div className='  w-1/2 h-full  bg-[url("./src/assets/logo.png")] object-cover bg-contain bg-no-repeat'>

        </div>
     </div>
    </>
   
  )
}

export default Hero


