import Image from "next/image";
import { url } from "inspector";
const Menu = () => {
    return (
        <div className="mt-20 p-10   " >
<div className="  size-20 relative left-20">
            <Image
      src={`/sauce_tomate.png`}
      height={50}
      width={50}
      alt="sauce tomate"
      className=" shadow-2xl rounded-full border relative z-10"
    
    />
     <Image
      src={`/taxe_the.png`}
      height={50}
      width={50}
      alt="taxe de the"
     className=" shadow-2xl rounded-full border relative bottom-4"
    />
     <Image
      src={`/feuille.png`}
      height={50}
      width={50}
      alt="feulle d'epice"
      className=" shadow-2xl rounded-full border relative -z-10 bottom-20 left-5"
    
    />
</div>
<Image
   src={`/crevette.png`}
   height={200}
   width={200}
   alt="crevette"
   className="absolute right-20  "

/>
   

    <h1  className='text-4xl text-center font-black font-serif'> What's on our Plate</h1>
    <p className='text-center'> please serve  yourself without hesitate </p>
      <ul className=' mt-10 m-auto flex  w-58 justify-between '> 
        <li>Appertizer</li>
        <li className=' border-b-2 border-b-orange-600'>Main Dish </li>
        <li>Desert</li>
      </ul>

     <div className="flex  mt-20  min-h-[500px] justify-center items-center bg" >
        <div className=" p-5 flex flex-col justify-center items-center  w-[400px] "> 
           <Image
            src={`/images__9_-removebg-preview.png`}
            width={200}
            height={200}
            alt="plat"
            className=" mb-15   rounded-full "
           /> 
           <h2  className=" mb-4 text-center text-xl font-black font-serif"> Stirred  Egg</h2>
           <p className=" text-center">
           Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Expedita iste repudiandae 
            laudantium odio sequi blanditiis.
           </p>
          

          
        </div>

        <div className=" p-5 flex flex-col justify-center items-center  w-[400px] "> 
          
           <Image
            src={`/images__8_-removebg-preview.png`}
            width={200}
            height={200}
            alt="plat"
            className=" mb-15  rounded-full "
           
           /> 
          
      <Image
            src={`/fourchette.png`}
            width={100}
            height={100}
            alt="plat"
            className=" mb-15  absolute -translate-y-16 translate-x-14"
           />
       

           <h2  className=" mb-4 text-center text-xl font-black font-serif">Kung Pao Chicken</h2>
           <p className=" text-center">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam beatae, impedit porro alias facilis exercitationem!
           </p>
          

          
        </div>

        <div className=" p-5 flex flex-col justify-center items-center  w-[400px] "> 
           <Image
            src={`/images__10_-removebg-preview.png`}
            width={200}
            height={200}
            alt="plat"
            className=" mb-15   rounded-full "
           /> 
           <h2  className=" mb-4 text-center text-xl font-black font-serif">Sweet Pork chops</h2>
           <p className=" text-center">
           Lorem ipsum dolor sit amet 
            consectetur adipisicing elit.
             Inventore officia enim labore repellat, 
             excepturi dignissimos.
           </p>
          

          
        </div> 

       
     </div>
    
     <Image
   src={`/citron.png`}
   height={100}
   width={100}
   alt="crevette"
   className="  "

/>
 </div>
    );
}

export default Menu;






