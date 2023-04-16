
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import { useState } from 'react';
import Button from '../../utilities/button';
import Modal from 'react-modal'
import projectOne from '../../../assets/projects/blackroad.png'


const ProjectCard=()=>{
  return <div className='flex w-full h-72 my-20 px-20 gap-10'
  
  >
<section  className='h-full flex-1 bg-black relative'>
<Image   src={projectOne.src} alt='blackroad'  layout='fill' 
   objectFit='contain'/>
</section>

<section className='h-full flex-1 flex flex-col justify-center'>
<h3 className='font-bold text-3xl mb-2'>
  BlackRoad - Travel App
</h3>
<ul className="flex space-x-4 child:text-xs child:font-normal child:cursor-pointer mb-2">
    <li className="underline" >Figma</li>
  <li>/</li>
    <li className="underline" >Flutter</li>
    <li>/</li>
    <li className="underline" >Node Js</li>
    <li>/</li>
    <li className="underline" >Aws</li>
    <li>/</li>
    <li className="underline" >Postgresql</li>
    
</ul> 
<div  className='flex'>
  <p className='text-sm mr-3'>See Detail Project</p>
  <FontAwesomeIcon icon={faArrowRight} className='text-black h-5 w-5' />
</div>
</section>

  </div>
}

export default ProjectCard;