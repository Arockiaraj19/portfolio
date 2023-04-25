

import user from '../../../assets/my_image/animation_me.png'

import Image from "next/image";

export default function ImageHomeComponent

  
() {



  return (
    <div className="flex-1 bg-top relative overflow-hidden sm:w-full">
 

 <div  className='w-full h-full flex items-center justify-center bg-cover rounded-3xl'>
            <Image className='rounded-full m-10 sm:m-0 sm:mt-20'  src={user.src} alt='index' layout='responsive' height={250} width={250}
   objectFit='contain'/>
          
     
    </div>
    </div>
)
}
