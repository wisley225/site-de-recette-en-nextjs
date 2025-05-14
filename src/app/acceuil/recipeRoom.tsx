'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { AiFillLike, AiOutlineDislike } from "react-icons/ai";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Explore from './Explore';
import Menu from './menu';
import Comment from './comment';
import Footer from './footer';
import Slide from './slide';
import Link from 'next/link';
import { url } from "inspector";

const RecipeRoom =() => {
  const refRotation = useRef<HTMLDivElement>(null);
  const refCarousel = useRef<HTMLDivElement>(null);
  const [indexActuel, setIndexActuel] = useState(0);
  const [enAnimation, setEnAnimation] = useState(false);
  

  const plats = [
    {
      titre: 'gateau',
      image: '/gateau.png',
      nomChef: 'francois du pan',
      likes: '10k'
    },
    {
      titre: 'gateau au chocolat',
      image: '/petit_gateau.png',
      nomChef: 'azize moutaine',
      likes: '10k'
    },
    {
      titre: 'petit_gateau',
      image: '/brocoly.png',
      nomChef: 'Galene Hary',
      likes: '10k'
    },
    {
      titre: 'ratatouille',
      image: '/ratatouille.png',
      nomChef: 'francois du pan',
      likes: '10k'
    }
  ];

  const animerRotation = (direction: 'suivant' | 'precedent') => {
    if (!refRotation.current || enAnimation) return;
    
    setEnAnimation(true);
    const angleRotation = direction === 'suivant' ? 90 : -90;
    
    gsap.to(refRotation.current, {
      rotate: `+=${angleRotation}`,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => setEnAnimation(false)
    });
  };

  const mettreAJourCarousel = (nouvelIndex: number) => {
    if (!refCarousel.current) return;
    
    const elements = refCarousel.current.querySelectorAll('div');
    elements.forEach((element, i) => {
      if (i === nouvelIndex) {
        gsap.to(element, {
          scale: 1.5,
          borderColor: '#dc2626',
          duration: 0.3,
          ease: "power1.out"
        });
      } else {
        gsap.to(element, {
          scale: 1,
          borderColor: 'transparent',
          duration: 0.3,
          ease: "power1.out"
        });
      }
    });
  };

  const platSuivant = () => {
    if (enAnimation) return;
    
    setIndexActuel(prev => {
      const nouvelIndex = (prev + 1) % plats.length;
      mettreAJourCarousel(nouvelIndex);
      animerRotation('suivant');
      return nouvelIndex;
    });
  };

  const platPrecedent = () => {
    if (enAnimation) return;
    
    setIndexActuel(prev => {
      const nouvelIndex = (prev - 1 + plats.length) % plats.length;
      mettreAJourCarousel(nouvelIndex);
      animerRotation('precedent');
      return nouvelIndex;
    });
  };

  useEffect(() => {
    if (refCarousel.current) {
      mettreAJourCarousel(0);
    }
  }, []);

  return (
    <>
     <main className="h-screen text-white">
  <nav>
  <div className='  absolute z-50 flex justify-between items-center  w-full   p-4'>
   <h1 className=' text-4xl  font-serif'>Delice Room</h1>
       <ul className=' flex w-2xl  justify-around font-bold items-center '  >
        <li><a href="#">Home</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">Food Menu</a></li>
        <li><a href="#">About</a></li>
        <li className=' cursor-pointer border-4 px-6 py-2 rounded-full text-orange-200 border-orange-200 hover:text-orange-100 hover:border-orange-100 transition-colors '><a href="#">Login</a></li>
      <Link  href='/formulaire'>
      <li className=' cursor-pointer border-4 px-6 py-2 rounded-full text-orange-200 border-orange-200 hover:text-orange-100 hover:border-orange-100 transition-colors '>sign up</li>
      </Link>   
      </ul>
  </div>
</nav>

    <div className='flex size-full '>
      <div className='w-7/12  flex flex-col'>
        <div>
          {/*   carousel de rotation */}
          <div ref={refRotation} className='border-green-200 size-[800px] absolute border-[100px] rounded-full bottom-96 -left-16'>
            <Image
              src="/brocoly.png"
              alt="brocoly"
              height={200}
              width={200}
              className='-rotate-180 absolute border-4 translate-x-46 -translate-y-44'
            />
            <Image
              src="/ratatouille.png"
              alt="ratatouille"
              height={200}
              width={200}
              className='rotate-90 absolute top-44 -left-38'
            />
            <Image
              src="/gateau.png"
              alt="gateau"
              height={200}
              width={200}
              className='absolute border-4 -bottom-32 left-46'
            />
            <Image
              src="/petit_gateau.png"
              alt="petit gateau"
              height={200}
              width={200}
              className='-rotate-90 absolute border-4 top-44 -right-28'
            />
          </div>

          {/*  informaiton du plat */}
          <div className='w-96 text-center absolute left-96 top-40'>
            <strong># 4 Most loved dish</strong>
            <h1 className='text-6xl uppercase'>urap asli</h1>
            <h2 className='text-5xl font-black uppercase font-stretch-100%'>wonogiri</h2>
          </div>
        </div>
        {/*  carousel horizontale */}
        <div ref={refCarousel} className=' relative z-20 bottom-10 mt-auto h-28 flex justify-between items-center w-4/6'>
          <FaChevronLeft
            className='text-3xl relative z-20 cursor-pointer hover:text-amber-600 transition-colors'
            onClick={platPrecedent}
          />
          {plats.map((plat, index) => (
            <div
              key={index}
              className='rounded-3xl w-34 size-full flex justify-center items-center transition-all duration-300'
            >
              <Image
                src={plat.image}
                alt={plat.titre}
                height={100}
                width={100}
                className='object-cover blur-xs '
              />
            </div>
          ))}
          <FaChevronRight
            onClick={platSuivant}
            className='text-3xl relative z-20 cursor-pointer hover:text-amber-600 transition-colors'
          />
        </div>
     
      </div>
     <Slide/>

{/*  deuxieme parti ici */}
</div>
  </main>
  <Explore/>
  <Menu/>
  <Comment/>
  <Footer/>
    </>
   
  );
};

export default RecipeRoom;

