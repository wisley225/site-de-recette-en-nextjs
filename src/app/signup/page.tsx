'use client'

import React from 'react';
import Image from 'next/image';
import { TbMushroomFilled } from "react-icons/tb";
import { useState,useEffect } from 'react';
import  axios from 'axios'
import { PassThrough } from 'stream';

const Page = () => {

 const [passwordConfirm, setPasswordConfirm] = useState('');
 const [users, setUsers]=useState({
 fullname:'',
 email:'',
 password:'',


});


const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
const {value,name}=e.target

if (name==='passwordConfirm') {
   setPasswordConfirm(value)

}
else{
setUsers(prev=>({...prev,[name]:value}))
}


}

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

    try {

      if (users.password !== passwordConfirm) {
        alert('Les mots de passe ne correspondent pas')
        return 
         
      }
        
      // Vérifier que tous les champs sont remplis
      if (!users.fullname || !users.email || !users.password) {
        alert('Veuillez remplir tous les champs');
        return;
      }

    //  const response= await axios.post('/api/users',users)
       const response=await axios.post('/api/users',users)
      alert('Inscription réussie !!!')
      console.log(response.data)
    } catch (error) {
      console.error("Une erreur est survenue lors de l'envoi:", error)
      alert('Une erreur est survenue l\'inscription')
    }
  };
   


    return (

<>
 <div className=' bg-gray-300 h-[900px] '>
    <h1 className='  text-center text-[200px] font-black font-serif text-gray-200  h-auto relative bottom-22'> Signup</h1>
      <div className=' shadow-2xl rounded-2xl bg-gray-100   relative bottom-48 h-[800px] m-auto   w-11/12   '>
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
           className=" absolute right-1 -top-16  "
          />
 
            <Image
           src={`/recette_equilibrer2.png`}
           height={300}
           width={200}
           alt='logo'
           className="absolute bottom-10 z-10 left-10"
          />
         
         

        
            <Image
           src={`/fruit2.png`}
           height={200}
           width={200}
           alt='fruits'
           className=" reflet absolute  "
          />

 
          
            <Image
           src={`/fruits3.png`}
           height={200}
           width={200}
           alt='fruits'
           className=" reflet absolute right-32 top-80"
          />


         <Image
           src={`/percile2.png`}
           height={200}
           width={200}
           alt='fruits'

           className=" reflet absolute right-5 top-28"
          /> 
       
   <div className=' relative z-20   border-black  w-9/12 m-auto  flex  '>


    <form 
      onSubmit={(e)=>handleSubmit(e)}
    className='bg-white shadow-2xl rounded-2xl   w-2/5 py-10  flex flex-col justify-center items-center  '>
          <div  className='bg-gray-100 py-2 w-8/12 mb-5  rounded-2xl border    ' >
        <label htmlFor="fullname" className=' text-gray-400 ml-5  '> Nom complet</label>
        <input type="text" id="fullname" name="fullname" className=' placeholder:pl-5 w-full  pl-5 rounded-full outline-none  ' onChange={(e)=>handleChange(e)} required  />
     </div>

           <div  className='bg-gray-100 py-2 w-8/12 mb-5    rounded-2xl border    ' >
        <label htmlFor="email" className=' text-gray-400 ml-5  '> Email</label>
        <input type="email" id="email" name="email" className=' placeholder:pl-5 w-full pl-5   rounded-full outline-none  ' onChange={(e)=>handleChange(e)} required  />
     </div>

        <div  className='bg-gray-100 py-2 w-8/12 mb-5    rounded-2xl border    ' >
        <label htmlFor="password" className=' text-gray-400 ml-5  '> mot de passe </label>
        <input type="password" id="password" name="password" className=' placeholder:pl-5 w-full  pl-5 rounded-full outline-none  ' onChange={(e)=>handleChange(e)} required  />
     </div>

     <div  className='bg-gray-100 py-2 w-8/12 mb-5    rounded-2xl border    ' >
        <label htmlFor="passwordConfirm" className=' text-gray-400 ml-5  '> Confirmer le mot de passe</label>
        <input type="password" id="passwordConfirm" name="passwordConfirm" className=' placeholder:pl-5 w-full  pl-5 rounded-full outline-none  ' onChange={(e)=>handleChange(e)} required  />
     </div>

  

     
     <button type='submit' className='mb-5 border w-8/12 rounded-full py-3 bg-rose-600 text-white font-bold cursor-pointer' > CREATE ACCOUNT</button>

  <p className=' text-center '>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem ipsam accusamus rerum at exercitationem?
  </p>

    </form>

     <div className='w-3/5    flex flex-col justify-center items-center'>
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
