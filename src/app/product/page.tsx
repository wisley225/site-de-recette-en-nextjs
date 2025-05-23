import React from 'react';
import { CiLocationOn } from 'react-icons/ci'; 
import Image from 'next/image';
import { RiStarSFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import BlocFood from './blocFood';

import Navbar from './navbar';


const Page = () => {
    return (
        <>

         <Navbar/>

         <div className=" relative border  h-[600px]  place-content-center ">
           
            <Image
              src={`/arrierePlan_publication2.jpg`}
              fill
               alt='image'
               className=' brightness-[20%]'
            />

           <div className=' absolute  w-full  text-center text-white'>
                       <div> <input type="text"  placeholder=' rechercher une vos reccette preferer'
                        className=' bg-white placeholder:text-gray-500 h-10 w-96 rounded-s-xl placeholder:pl-5 text-black outline-none pl-5' />
                         <button className=' bg-red-600 h-10 w-24 rounded-e-xl'> search</button> 
                         </div>

            <p className='text-4xl font-black font-serif   '>  24 Resultat in your zone</p>
            <p className='flex items-center justify-center '>
            <CiLocationOn/>
            <span>abidjan palmerais rue simplon</span></p>
           </div>
        </div>


       <div>

       <div className=' flex'>
        
        <div className='w-1/4  p-5'>
        <h1 className=' text-xl mb-4 font-black font-serif flex p-5 border-b-1 border-b-gray-400  justify-between uppercase'> filter <IoIosArrowDown className='inline'/> </h1>
         <span className='text-2xl  font-bold font-serif'> Type Food</span>
    {/*   */}

       <div className=' border-b-2  pb-5 border-b-gray-400'>

        
    <div className='mt-4 flex justify-between'>
        <label className='text-xl flex justify-center'>
             <input type="checkbox" className=' size-6 mr-2' />
               <span className='  font-semibold text-gray-400 '> All</span>
        </label>
       <span className=' text-gray-400'>100</span>
    </div>

         <div className='mt-4 flex justify-between'>
        <label className='text-xl flex justify-center'>
             <input type="checkbox" className=' size-6 mr-2' />
               <span className='  font-semibold text-gray-400 '> Afrique</span>
        </label>
       <span className=' text-gray-400'>50</span>
        </div>

         <div className='mt-4 flex justify-between'>
        <label className='text-xl flex justify-center'>
             <input type="checkbox" className=' size-6 mr-2' />
               <span className='  font-semibold text-gray-400 '> nigeria</span>
        </label>
       <span className=' text-gray-400'>17</span>
        </div>

         <div className='mt-4 flex justify-between'>
        <label className='text-xl flex justify-center'>
             <input type="checkbox" className=' size-6 mr-2' />
               <span className='  font-semibold text-gray-400 '> Burkina</span>
        </label>
       <span className=' text-gray-400'>200</span>
        </div>


         <div className='mt-4 flex justify-between'>
        <label className='text-xl flex justify-center'>
             <input type="checkbox" className=' size-6 mr-2' />
               <span className='  font-semibold text-gray-400 '> France</span>
        </label>
       <span className=' text-gray-400'>400</span>
        </div>

         <div className='mt-4 flex justify-between'>
        <label className='text-xl flex justify-center'>
             <input type="checkbox" className=' size-6 mr-2' />
               <span className='  font-semibold text-gray-400 '> Italie</span>
        </label>
       <span className=' text-gray-400'>250</span>
        </div>
       </div>

     

  <h1 className=' mb-5 font-extrabold text-2xl  font-serif mt-5'> Rating</h1>

<div className='  flex items-center mb-5'>
       
<input type="checkbox" className=' size-6 mr-2  ' />
   <RiStarSFill className='text-yellow-500 text-4xl cursor-pointer'/>
   <RiStarSFill className='text-yellow-500 text-4xl cursor-pointer'/>
   <RiStarSFill className='text-yellow-500 text-4xl cursor-pointer'/>
   <RiStarSFill className='text-yellow-500 text-4xl cursor-pointer'/>
   <RiStarSFill className='text-yellow-500 text-4xl cursor-pointer'/>

</div>

<div className='  flex items-center mb-5'>
       
<input type="checkbox" className=' size-6 mr-2  ' />
   <RiStarSFill className='text-yellow-500 text-4xl cursor-pointer'/>
   <RiStarSFill className='text-yellow-500 text-4xl cursor-pointer'/>
   <RiStarSFill className=' text-4xl cursor-pointer'/>
   <RiStarSFill className=' text-4xl cursor-pointer'/>
   <RiStarSFill className=' text-4xl cursor-pointer'/>

</div>


<div className='  flex items-center mb-5'>
       
<input type="checkbox" className=' size-6 mr-2  ' />
   <RiStarSFill className='text-yellow-500 text-4xl cursor-pointer'/>
   <RiStarSFill className='text-yellow-500 text-4xl cursor-pointer'/>
   <RiStarSFill className='text-yellow-500 text-4xl cursor-pointer'/>
   <RiStarSFill className=' text-4xl cursor-pointer'/>
   <RiStarSFill className=' text-4xl cursor-pointer'/>

</div>


        </div>

        <div className=' p-5 ml-auto  gap-5  w-3/4 h-svw overflow-y-auto bg-gray-200 '>
      <ul className='mb-10 cursor-pointer flex justify-between px-4 py-2 font-semibold bg-white'>
         <li>24 Results Found</li>
         <li>Sort by: ranking <IoIosArrowDown className='inline'/></li>
      </ul>


    <div className=' flex justify-center flex-wrap gap-5  '>
   <BlocFood/>
   <BlocFood/>
   <BlocFood/>
   <BlocFood/>
   <BlocFood/>
   <BlocFood/>
   <BlocFood/>
   <BlocFood/>
   <BlocFood/>
   <BlocFood/>
   <BlocFood/>
    </div>

   
            
       
       
        </div>
         </div>

        

        </div> 

       
        
        
        </>
       
    );
}

export default Page;






