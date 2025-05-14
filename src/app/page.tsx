import Image from "next/image";
import RecipeRoom from "./acceuil/recipeRoom";

export default function Home() {
  return (
     <>
     <div className="overflow-x-hidden text-white bg-stone-900  ">
        <RecipeRoom/>
     </div>
     

     </>
  );
}
