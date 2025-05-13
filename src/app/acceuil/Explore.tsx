import React from 'react';
import Image from 'next/image';
const Expore = () => {
    return (

        <>
        <div className=' '>
        <div  className='pt-10 '>
            <div className=''>
            <Image
      src={`/cuillere_epice.png`}
        height={200}
        width={200}
        alt='cuillere a epice'


     />
            </div>
     

<div className=' absolute right-0'>
<Image
      src={`/oignon_tomate.png`}
        height={200}
        width={200}
        alt='cuillere a epice'
 

     />
</div>
        </div>
        <div className='   flex h-[400px] p-10 items-center'>
    <div className='   w-xl flex flex-col  justify-around  '>
        <h1 className='text-5xl font-black w-xl mb-5'> Take a taste Come join us. </h1>
        <p className='text-2xl font-bold'>Life is so endlessly delicious</p>
        <p className='mb-5 w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem id unde sequi distinctio earum, aliquid aliquam dolorem 
             voluptas dolores sit labore modi, dolore accusantium.</p>
              <a href="#" className=' bg-orange-600 text-white h-12 block w-44 cursor-pointer hover:bg-orange-700  place-content-center text-center rounded-full  ' > Explore Now</a>
    </div>

 

     <div className=' relative rotate-40 left-20'>
        <Image
        src={'/fouchette.png'} 
        height={100}
        width={100}
        alt='plat de boeuf'
        />
     </div>

     <div className='  relative left-40'>
        <Image
        src={'/boeuf_saignant.png'} 
        height={200}
        width={200}
        alt='plat de boeuf'
      
     quality={100}
        />
     </div>
   
    <div>

    </div>
        </div>

        </div>
       
        </>
       
    );
}

export default Expore;



