
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

 import rose from "../../../assets/try.jpg";
 import Image from "next/image";
 import { useState } from 'react';

const ProjectComponent = () => {
  
    return ( <div className="bg-primary w-full h-48 group hover:bg-white relative">
    <section className="h-full w-full  flex justify-between items-center">
    <main className=" flex items-center h-full">
    <div className="h-[2px] w-36 bg-grey mr-6"></div>
    <p className="text-xs mr-5 text-dark_grey  transition-all">01</p>
    <div className="flex flex-col relative">
    <div className="absolute z-0  scale-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-xs mr-5 text-dark_grey font-bold group-hover:mx-12 group-hover:scale-[8] transition-all">01</div>
  <div className='relative '>  
  <h1 className="text-xl font-semibold text-dark_grey transition-all group-hover:text-black group-hover:text-3xl">Project One</h1>
    <p className="text-xs text-dark_grey ">UI/UX</p>
  </div>
   
    </div>
    
    </main>
    
   
  <section className='flex-1 flex items-center justify-end  relative h-full'>
  <div  className="cursor-pointer mr-14 flex before:inline  relative z-[2] before:z-[-10] before:absolute before:w-0 before:h-0 before:content-'' transition-all before:bg-white before:rounded-full group-hover:before:h-full group-hover:before:w-full px-3">
         <div className="h-10 w-10 my-auto  bg-grey group-hover:scale-0  rounded-full"></div>
       <div className='-ml-12 pl-6 flex items-center '>
       <div className="text-xs font-semibold mr-4 uppercase text-black">VIEW PROJECT</div>
       <FontAwesomeIcon icon={faArrowRight} className='text-black ' />
       </div>
        
         </div> 

         <div className=" h-0 w-0 right-0 top-0 origin-right group-hover:h-44  group-hover:w-44 group-hover:scale-[2] absolute my-auto skew-y-3 transition-all ">
  <Image  src={rose.src} alt="Logo"
   layout='fill'
   objectFit='contain'/>
  </div>

  </section>
   
    
    </section>
  
    </div> );
}
 
export default ProjectComponent;