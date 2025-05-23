
import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { RiStarSFill } from 'react-icons/ri';

const BlocFood = () => {
    return (
    <>
       
        <div className='  bg-white w-80 rounded-2xl  h-96 flex flex-col justify-between'>

      

     <div className=' relative h-52 '> 
                    <Image
                       src={`/paella.jpg`}
                       alt='paela nourriture espagnole'
                       fill
                    className='rounded-t-2xl '

                       />
                       <div className='  absolute   bg-gradient-to-b from-black/0 h-32  cursors-pointer   to-black px-2 flex shadow-2xl  w-full justify-between items-end bottom-0 text-white'>
                        <span> 35min</span>
                        <span>$15.00</span>
                       </div>

     </div>

     <div className=' flex  flex-col  items-center pb-5'>
    <h1 className=' text-xl font-bold font-serif  mb-2 '> the food sermon paella</h1>
    <p className=' flex items-center text-gray-600 mb-2'> <CiLocationOn/><span> Good Food riviera palmeraie</span></p>
     <p className='flex items-center mb-3'> <span className='text-white bg-green-700 px-1 mr-1' > <RiStarSFill className='inline'/> 45 </span> <span className='text-gray-600'> 30 Review</span></p>
      <button className=' hover:bg-red-700 cursor-pointer bg-red-600 text-white px-6 py-2 rounded-full '>voir le menu</button>
     </div>
 
            </div>
        </>
    )
}

export default BlocFood;

