import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import url from 'url';



const Entete = () => {





  const Images = [

    'photo2.png',
    'petit_gateau.png',
    'photo8.png'

  ]


  return (
    <div className="h-screen  relative px-5   ">
      <Image
        src='/header3.jpg'
        alt='table de nourriture'
        fill
        className=' object-cover relative -z-20 brightness-75  '
      />

      <div className='absolute w-full '>

        <nav>
          <div className=' flex justify-between items-center  w-full   p-4'>
          <h1 className=' text-4xl  font-serif'>Delice Room</h1>
          <ul className=' flex w-2xl  justify-around font-bold items-center '  >
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Food Menu</a></li>
            <li><a href="#">About</a></li>
            <li className=' cursor-pointer px-6 py-2 rounded-full text-green-200 border-green-200 hover:text-orange-100 hover:border-orange-100 transition-colors '><a href="#">Login</a></li>
            <Link href='/formulaire'>
              <li className=' cursor-pointer border-4 px-6 py-2 rounded-full text-green-200 border-green-200 hover:text-orange-100 hover:border-orange-100 transition-colors '>sign up</li>
            </Link>
          </ul>

        </div>
        </nav>

        <div>

  


          <Image
            src='/photo1.png'
            alt='plat de nourriture'
            width={200}
            height={200}
            className='rounded-full absolute -z-10'
          />
          <Image
            src='/photo3.png'
            alt='plat de nourriture'
            width={400}
            height={400}
            className='rounded-full  absolute right-20 top-30 -z-10  '
          />


           <Image
            src='/farine.png'
            alt='farine'
            width={200}
            height={200}
            className='rounded-full  absolute top-96 -z-20 -right-10 rotate-45  '
          /> 

           <Image
            src='/taxefruit.png'
            alt='farine'
            width={200}
            height={200}
            className='rounded-full   absolute top-96 -z-20  rotate-45  '
          /> 
           <Image
            src='/oeuf.png'
            alt='oeuf'
            width={200}
            height={200}
            className='rounded-full absolute -z-10 left-[600px] border'
          /> 

           <div className=' w-1/2  relative top-40  left-80  ' >
            <h1 className=' my-8 text-5xl font-black font-serif  text-center'>teste the Best that Suprise you</h1>
            <p className=' mb-8 text-xl font-semibold text-center'> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. A repellat soluta ducimus quas,
              molestias voluptate velit quasi ratione excepturi
              voluptatem, harum sit consectetur,
              exercitationem dolorem error blanditiis voluptates adipisci deserunt?</p>
            <div className='   flex justify-center items-center '>
              <button className=' bg-rose-500 w-44 mr-5 text-center py-2 text-lg font-semibold  rounded-full cursor-pointer hover:bg-rose-600' >  Voir les recettes</button>
              <button className='border w-44 py-2 text-lg  backdrop-blur-md rounded-full  text-center cursor-pointer hover:backdrop-blur-2xl'>See Menu</button>

            </div>

          </div> 

          <div>

          </div>

        </div>








      </div>
      
    </div>
  );
}

export default Entete;


