'use client'

import React from 'react';
import Image from 'next/image';
import { url } from "inspector";
import { CiTimer } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { GiRiceCooker } from "react-icons/gi";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useEffect, useState, useRef } from 'react';
import { MdFavorite } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import Navbar from '../product/navbar'; 


const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const refCarousel = useRef(null);

  const tab = [
    {
      image: { img1: '/brocoly.png', img2: '/carrote.png' },
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fugit veniam nam perspiciatis possimus eos!'
    },
    {
      image: { img1: '/brocoly.png', img2: '/carrote.png' },
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam qui, reiciendis consequuntur accusamus veritatis quia.'
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tab.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tab.length) % tab.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <>
    <Navbar/>
      <div className="bg-[url('/vegetables.jpg')] bg-cover h-svh  ">
        <h1 className='text-white text-6xl font-extrabold text-center mb-10 font-serif pt-20'>Tarte Tatin aux Pommes</h1>
        <nav>
          <ul className='text-white flex justify-evenly text-2xl'>
            <li className='flex items-center justify-center font-bold font-serif'><CiTimer className='mr-4 font-extrabold text-3xl' />chef:elise martrin</li>
            <li className='flex items-center justify-center font-bold font-serif'><CiTimer className='mr-4 font-extrabold text-3xl' />prep:3min</li>
            <li className='flex items-center justify-center font-bold font-serif'><FaUserFriends className='mr-4 font-extrabold text-3xl' />Service:8</li>
            <li className='flex items-center justify-center font-bold font-serif'><GiRiceCooker className='mr-4 font-extrabold text-3xl' />Difficulty:Medium</li>
          </ul>
        </nav>

        <div className="relative overflow-hidden  h-[500px] place-content-center ">
          <div 
            ref={refCarousel}
            className="flex transition-transform duration-500 ease-in-out "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {tab.map((recip_tab, index) => (
              <div 
                key={index} 
                className="flex items-center min-w-full px-4 flex-col"
              >

                <div className='flex'>
                    
                {recip_tab.image.img1 && (
                  <Image
                    src={recip_tab.image.img1}
                    alt='image'
                    height={200}
                    width={200}
                    className="object-cover"
                  />
                )}
                {recip_tab.image.img2 && (
                  <Image
                    src={recip_tab.image.img2}
                    alt='image'
                    height={200}
                    width={200}
                    className="object-cover"
                  />
                )}

                </div>
              
                <p className='text-3xl text-white font-bold font-serif ml-4 text-center w-1/2'>
                  {recip_tab.description}
                </p>
              </div>
            ))}
          </div>

          <div className='absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2'>
            <button 
              onClick={prevSlide}
              className='text-white text-4xl cursor-pointer hover:text-green-200 transition-colors'
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={nextSlide}
              className='text-white text-4xl cursor-pointer hover:text-green-200 transition-colors'
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
          
          <ul className='text-white   flex justify-center text-4xl'  >
            <li className=' mr-10  cursor-pointer  '><AiFillLike /> </li>
            <li className='  cursor-pointer  '><MdFavorite/></li>
          </ul>
      </div>

      <div className=' border  p-10 '>
        <h1 className='text-2xl font-stretch-75% font-serif '>commentaire (3)</h1>
        <div  className=' flex flex-col'>
        <h1 className='text-xl font-semibold my-5'>ajouter un commentaire</h1>
        <div className=' flex  '>
          <div className=' relative size-10 rounded-full border mr-5 '>
            <Image
             src="/profile3.jpg"
              alt='image'
              fill
              className='rounded-full '
            />

      
          </div>
          <textarea name="comment"  placeholder='ecrire un commentaire' className='w-full h-20 mb-5 bg-gray-200 rounded-lg p-2 text-black' >

          </textarea>

      
        </div>

        <button className='ml-auto block border py-2 px-10 rounded-sm text-2xl text-white bg-green-600 font-serif hover:bg-green-700 cursor-pointer'> publier</button>


        </div>

        <div>
       <h3 className='text-2xl font-stretch-75% font-serif mb-10'>discution(3)</h3>
       <div>
           <div className=' relative size-10 rounded-full border mr-5 '>
            <Image
             src="/profile3.jpg"
              alt='image'
              fill
              className='rounded-full '
            />

      
          </div>
          <div>
            <h1 className='text-xl font-semibold my-5'>elise martrin</h1>
            <div className='flex justify-between'>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. </p>
             <span> Nov 15 ,2025</span>
            </div>
            <div className='flex items-center'> <span className='mr-5 flex text-xl items-center'><AiFillLike/> <strong className='ml-2 '>12</strong></span> <span> repondre</span></div>
          </div>
       </div>
     
      </div>
    
      </div>

      
    </>
  );
}

export default Page;


