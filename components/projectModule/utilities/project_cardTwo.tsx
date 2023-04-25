
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import { useState } from 'react';
import Button from '../../utilities/button';
import Modal from 'react-modal'
import webOne from '../../../assets/projects/web-1.png'
import webTwo from '../../../assets/projects/web-2.png'
import webThree from '../../../assets/projects/web-3.png'
import webFour from '../../../assets/projects/web4.png'
import { actions,ContextData } from '../../../pages';
import React from 'react';

const ProjectCardTwo=()=>{
  const {setValue,value} = React.useContext(ContextData);
  return <div className='flex sm:flex-col w-full h-72 my-20 px-20 gap-10 sm:h-96 sm:px-10 sm:gap-0'
  
  >
<section  className='h-full flex-1 bg-black relative flex flex-wrap'>
<Image   src={webOne.src} alt='resume' className='h-1/2 w-1/2'  height={500} width={500}/>
<Image   src={webTwo.src} alt='resume' className='h-1/2 w-1/2'  height={500} width={500}/>
<Image   src={webThree.src} alt='resume' className='h-1/2 w-1/2'  height={500} width={500}/>
<Image   src={webFour.src} alt='resume' className='h-1/2 w-1/2'  height={500} width={500}/>
</section>

<section className='h-full flex-1 flex flex-col justify-center'>
<h3 className='font-bold text-3xl mb-2 sm:mb-5' onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})}>
  Software Development Company Website
</h3>
<ul className="flex space-x-4 child:text-xs child:font-normal child:cursor-pointer mb-2 sm:mb-5">
    <li className="underline" >Figma</li>
  <li>/</li>
    <li className="underline" >HTML</li>
    <li>/</li>
    <li className="underline" >CSS</li>
    <li>/</li>
    <li className="underline" >3D</li>
    <li>/</li>
    <li className="underline" >Javascript</li>
    
</ul> 
<div  className='flex'>
  <p className='text-sm mr-3'>See Detail Project</p>
  <FontAwesomeIcon icon={faArrowRight} className='text-black h-5 w-5' />
</div>
</section>

  </div>
}

export default ProjectCardTwo;