import Image from 'next/image';
import React from 'react';

const Comment = () => {
    return (
        <>

 <div className=' mb-20'>
 <Image
 src={`/grain_epice.png`}
 height={100}
 width={100}
 alt={ "grain d'epice "}
  className='absolute right-10'
 />


 <div  className=' pt-32 flex  border justify-center'>

<div className='  flex justify-center items-center border w-xl '>
<Image
src={`/bol_spagetti.png`}
height={300}
width={300}
alt='bol de spaguetti'
className=' '
/>

<Image
 src={`/percile.png`}
 height={100}
 width={200}
 alt={ "grain d'epice "}
  className=' absolute translate-y-32 -z-10 translate-x-20 rotate-10'
 />





</div>
<div className=' w-xl border  h-auto '>
    <h1 className=' text-4xl font-serif font-black'> let's see what other says</h1>
    <p className='mb-10'>Please serve yourself without any hesitate</p>
    <p className=' mb-10 '>
<strong className=' font-extrabold  '>"</strong>
     <span>
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Assumenda eaque animi, velit error ab aut fugiat inventore 
id quidem non obcaecati vero accusamus excepturi 
dolorum! Similique repudiandae dolore quas fuga!
        </span> 
<strong className=' font-extrabold '> " </strong>   </p>

    <div className=' flex  w-1/2 justify-around '>
        <div className=' size-20 '>
        <Image
src={`/profile1.jpeg`}
height={80}
width={80}
alt='profile'
quality={100}
className='aspect-square object-cover object-center rounded-full'
/>
        </div>
        <div>
        <Image
src={`/profile2.jpeg`}
height={100}
width={80}
alt='profile'
className='  aspect-square object-cover object-top   rounded-full  '

/>
        </div>
        <div>
        <Image
src={`/profile3.jpg`}
height={80}
width={80}
quality={100}
alt='profile'
className='aspect-square object-cover object-top rounded-full  '

/>
        </div>
    </div>
</div>

</div>

<div className='  mt-10 '>
<Image
 src={`/fourchette.png`}
 height={200}
 width={200}
 alt={ "grain d'epice "}
  className=' absolute rotate-24 z-10 translate-y-10 '
 />

<Image
 src={`/carrote.png`}
 height={100}
 width={100}
 alt=' carrote'
  className=' absolute translate-y-10'
 />
 <Image
 src={`/tomate.png`}
 height={100}
 width={100}
 alt={ "tomate "}
  className='absolute'
 />


<Image
 src={`/sac_legume.png`}
 height={400}
 width={400}
 alt={ "sac legume "}
  className='  -rotate-90 translate-x-[1000px]  '
 />

</div>



 </div>
 
        
        </>
       
    );
}

export default Comment;








