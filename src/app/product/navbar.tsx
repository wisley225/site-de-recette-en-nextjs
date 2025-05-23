import React from 'react';
import { GiCook } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';

const Navbar = () => {
    return (
  
              <ul className=' flex  justify-between px-10   items-baseline py-2 text-green-400 text-xl   w-full bg-white '>
                        <li className=' flex items-baseline text-2xl font-bold font-serif '> <GiCook/> RecipeRoom</li>
                        <li className=' w-1/3'>
                           <ul  className=' flex  justify-between  '>
                     
                     <li className=' flex items-center cursor-pointer hover:text-green-700 ' >  <FaBookOpen  className='mr-2'/> Recipes</li>
                        <li className=' flex items-center cursor-pointer hover:text-green-700 ' ><MdFavorite  className='mr-2'/> Favorites </li>
                        <li className=' flex items-center cursor-pointer hover:text-green-700 ' >  <Link href='/profile' className='flex items-center'> <CgProfile  className='mr-2'/> Profile </Link>  </li>
            
                           </ul>
                        </li>
                       
                      </ul>

    );
}

export default Navbar;



