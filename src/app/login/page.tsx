

'use client'

import {  useState } from 'react';
import { ChangeEvent,FormEvent } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function login() {

    const router=useRouter()

 const [user, setUsers] = useState({
email:'',
password:''

});


const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
const {value,name}=e.target
setUsers(prev=>({...prev,[name]:value}))

}

const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
e.preventDefault()

    try {
        
const response= await axios.post('/api/login',user)
    
     alert('connection reussi !!!')
      console.log(response.data)
      router.push('/product')
} catch (error) {
   console.error("une erreur est survenu lors de l'envoi:",error)
    }
  };

  return (
    <div>
      <h1>Formulaire d'utilisateur</h1>

      <form onSubmit={(e)=>handleSubmit(e)}>
     

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name='email'
            onChange={(e)=>handleChange(e) }
            required
          />
        </div>


        <div>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            name='password'
            onChange={(e)=>handleChange(e) }
            required
          />
        </div>
        <button type="submit" className=' cursor-pointer'>Envoyer</button>
      </form>

    </div>
  );
}



