import React from 'react';
import Image from 'next/image';
import { TbMushroomFilled } from "react-icons/tb";



const Page = () => {
    return (

<>
 <div className=' bg-white h-[900px] '>
    <h1 className=' border text-center text-[200px] font-black font-serif text-gray-100  h-auto relative bottom-22'> Signup</h1>
      <div className=' bground relative bottom-54 h-[800px] m-auto   w-11/12 border  bg-white'>
          <Image
           src={`/logo.png`}
           height={200}
           width={200}
           alt='logo'
           className="  "
            />

            <Image
           src={`/recette_equilibrer.png`}
           height={200}
           width={200}
           alt='plat equilibre'
           className=" absolute right-1 -top-16 "
          />
 
            <Image
           src={`/recette_equilibrer2.png`}
           height={300}
           width={200}
           alt='logo'
           className="absolute bottom-10 z-10"
          />
           {/* 
            <Image
           src={`/fruits1.png`}
           height={200}
           width={200}
           alt='fruits'
           className="absolute"
          />

          
            <Image
           src={`/fruit2.png`}
           height={200}
           width={200}
           alt='fruits'
           className="absolute"
          />


          
            <Image
           src={`/fruits3.png`}
           height={200}
           width={200}
           alt='fruits'
           className=" absolute"
          />


         <Image
           src={`/percile2.png`}
           height={200}
           width={200}
           alt='fruits'

           className=" absolute right-5 top-28"
          /> */}
       
   <div className=' relative z-20  border border-black  w-9/12 m-auto  flex  '>


    <div className='  border w-2/5 py-10 text-white flex flex-col justify-center items-center  '>
          <div  className='bg-gray-100 py-2 w-8/12 mb-5 h-14  flex flex-col justify-center rounded-full border    ' >
        <label htmlFor="" className=' text-gray-400 ml-5  '> Nom complet</label>
        <input type="text" className=' placeholder:pl-2-5 w-full h-6 pl-5 rounded-full outline-none  '  />
     </div>

           <div  className='bg-gray-100 py-2 w-8/12 mb-5 h-14  flex flex-col justify-center rounded-full border    ' >
        <label htmlFor="" className=' text-gray-400 ml-5  '> Nom complet</label>
        <input type="text" className=' placeholder:pl-2-5 w-full h-6 pl-5 rounded-full outline-none  '  />
     </div>

           <div  className='bg-gray-100 py-2 w-8/12 mb-5 h-14  flex flex-col justify-center rounded-full border    ' >
        <label htmlFor="" className=' text-gray-400 ml-5  '> Nom complet</label>
        <input type="text" className=' placeholder:pl-2-5 w-full h-6 pl-5 rounded-full outline-none  '  />
     </div>

           <div  className='bg-gray-100 py-2 w-8/12 mb-5 h-14  flex flex-col justify-center rounded-full border    ' >
        <label htmlFor="" className=' text-gray-400 ml-5  '> Nom complet</label>
        <input type="text" className=' placeholder:pl-2-5 w-full h-6 pl-5 rounded-full outline-none  '  />
     </div>



     
     
{/* 
     <div className='bg-white'>
        <label htmlFor="" className=' text-gray-400'>Email</label>
        <input type="email" />
     </div>
     <div className='bg-white'>
        <label htmlFor="" className=' text-gray-400'>password</label>
        <input type="password" />
     </div>

     <div className='bg-white'>
        <label htmlFor="" className=' text-gray-400'> password comfirm</label>
        <input type="text" />
     </div> */}

     
     
     <button className='mb-5 border w-8/12 rounded-full py-3 bg-rose-600 text-white font-bold cursor-pointer'> CREATE ACCOUNT</button>

  <p className=' text-center '>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem ipsam accusamus rerum at exercitationem?
  </p>

    </div>

     <div className='w-3/5 border text-white  flex flex-col justify-center'>
       <h1  className='text-5xl font-black font-serif mb-2'> Create  Account </h1>
       <p className='font-semibold text-xl mb-4'> what you will get</p>

       <ul  >
        <li className=' flex  items-center mb-8 font-semibold' > <TbMushroomFilled/> <span className='ml-2' >Manager your recipes the easy way </span> </li>
        <li className=' flex  items-center mb-8 font-semibold' > <TbMushroomFilled/> <span className='ml-2' > share recipes with your friends and discover new others </span> </li>
        <li className=' flex  items-center mb-8 font-semibold' > <TbMushroomFilled/> <span className='ml-2' > More than 15,000 recipes from around the world !</span> </li>
        <li className=' flex  items-center mb-8 font-semibold' ><TbMushroomFilled/> <span className='ml-2' > Organize recipes by tag, share it with your friends </span> </li>
        <li className=' flex  items-center mb-8 font-semibold' ><TbMushroomFilled/> <span className='ml-2' ></span> invite your friend to join and start sharing your recipes in a flash </li>
       </ul>
     </div>


   </div>

     </div> 
 </div>



</>


       
    );
}

export default Page;
