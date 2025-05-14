

import React from 'react';
import Image from 'next/image';


const Slide = () => {




    return (
        <div className='   w-5/12 place-content-center place-items-center'>


            <div className=' '>
            <Image
              src={`/cuisinier4.png`}     
              width={400}
              height={400}
              alt=' cuisinier'
              className='reflected rounded-b-sm '
            
            />

            </div>
         

        </div>
    );
}

export default Slide;
