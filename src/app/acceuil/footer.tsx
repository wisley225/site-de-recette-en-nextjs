

import React from 'react';
import { url } from "inspector";
import Image from 'next/image';

const Footer = () => {
    return (
     
<> 

<div 
style={{background:"url('/footer3.avif') no-repeat center",
      backgroundSize:"cover"
    }} 
 className=" text-white ">

<Image
  src={`/oignon.png`}
  height={100}
  width={100}
  alt='oignon'
  className=' translate-x-24 translate-y-10'
/>

<Image
  src={`/brocoly2.png`}
  height={80}
  width={80}
  alt='brocoly'
  className='absolute right-16 z-10 translate-y-28  '
/>

<Image
  src={`/tomate_couper.png`}
  height={100}
  width={100}
  alt='tomate'
  className='absolute left-[700px] '

/>

<Image
  src={`/citron_coupe.png`}
  height={100}
  width={100}
  alt='oignon'
  className=' absolute right-64 translate-y-22'

/>

<Image
  src={`/percile.png`}
  height={100}
  width={100}
  alt='oignon'
  className=' absolute right-96 -translate-y-14'

/>



<Image
  src={`/poivron.png`}
  height={100}
  width={100}
  alt='oignon'
  className=' absolute  translate-y-44 left-[490px] z-1'

/>



<Image
  src={`/choux.png`}
  height={100}
  width={100}
  alt='oignon'
  className=' absolute translate-y-32  '

/>

<Image
  src={`/poele.png`}
  height={200}
  width={200}
  alt='poele'
  className=' absolute -right-10 rotate-[250deg] overflow-hidden '

/>




<div className='  pt-10 h-[400px]'>
        <h1 className='text-center text-5xl font-serif font-black '> Easy recipes will send to your inbox  </h1>
        <p className='text-center mt-2 font-semibold'>Get weekly updates on the chinese </p>
        <p className='text-center mt-2 font-semibold'>recipes in your malbox !</p>

<div className=' bg-white relative z-50  w-96  flex rounded-full m-auto py-1 mt-10 p-2'>
<input type="text" placeholder=' your email' className=' w-4/6  p-2  outline-none rounded-s-full placeholder:text-gray-400 text-black '  />
<button className='border w-2/6 rounded-full bg-orange-600 text-white cursor-pointer hover:bg-orange-700'> subsribe</button>
</div>

</div>
<Image
  src={`/coquillage.png`}
  height={100}
  width={100}
  alt='oignon'
  className=' absolute'

/>
<Image
  src={`/champignon.png`}
  height={100}
  width={100}
  alt='oignon'
  className=' absolute left-[800px]'

/>

<Image
  src={`/ail.png`}
  height={100}
  width={100}
  alt='oignon'
  className=' absolute right-40'

/>


 <div className=' flex relative z-20   w-1/2 justify-evenly  pb-10'>

<ul>
        <li   className='  font-extrabold text-2xl font-serif'>
            Get Cooking
        </li>

        
        <ul className=' mt-5'>
        <li>Easy Asian Takeout</li>
        <li> Recipe Gallery</li>
        <li> Ingredient Guide</li>
        <li> Conversation tool</li>
    </ul>
</ul> 

<ul>
    <li  className='  font-extrabold text-2xl font-serif '> Information
 </li>

    
    <ul className='  mt-5'>
        <li>About</li>
        <li> disclosure</li>
        <li> Privacy Police</li>
        <li>Contact</li>
    </ul>
</ul>

<ul>
        <ul>
            <li className='  font-extrabold text-2xl font-serif'> Follow Us
 </li>
 <ul className=' mt-5'>
            <li>RSS Feeds</li>
        <li> Facebook</li>
        <li>Instagram</li>
        <li>Pinterest</li>

            </ul>

        </ul>
        
</ul>

 </div>





</div>
</>




    );
}

export default Footer;
