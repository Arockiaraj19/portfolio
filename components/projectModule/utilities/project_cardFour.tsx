
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import { useState } from 'react';
import Button from '../../utilities/button';
import Modal from 'react-modal'
import projectOne from '../../../assets/projects/myresume.png'
import { actions,ContextData } from '../../../pages';
import React from 'react';

const ProjectCardThree=()=>{
  const {setValue,value} = React.useContext(ContextData);
  return <div className='flex sm:flex-col w-full h-72 my-20 px-20 gap-10 sm:h-96 sm:px-10 sm:gap-0'
  
  >


<section className='h-full flex-1 flex flex-col justify-center'>
<h3 className='font-bold text-3xl mb-2 sm:mb-5 text-black' onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})}>
  My Portfolio Website
</h3>
<ul className="flex space-x-4 child:text-xs child:font-normal child:cursor-pointer mb-2 sm:mb-5">
    <li className="underline" >Figma</li>
  <li>/</li>
    <li className="underline" >Next Js</li>
   
    
</ul> 
<div  className='flex'>
  {/* <p className='text-sm mr-3'>See Detail Project</p>
  <FontAwesomeIcon icon={faArrowRight} className='text-black h-5 w-5' /> */}
</div>
</section>
<section  className='h-full flex-1 bg-black relative flex justify-center items-center'>
<Image   src={projectOne.src} alt='resume' className='h-fit w-fit'  height={500} width={500}/>
</section>
  </div>
}

export default ProjectCardThree;