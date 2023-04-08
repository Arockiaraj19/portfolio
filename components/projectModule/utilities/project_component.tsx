
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

 import rose from "../../../assets/try.jpg";
 import Image from "next/image";
 import { useState } from 'react';
import Button from '../../utilities/button';
import Modal from 'react-modal'

const ProjectCard=()=>{
  return <div className='flex w-full h-72 my-20 px-20 gap-10'
  
  >
<section  className='h-full flex-1 bg-black'>

</section>

<section className='h-full flex-1 flex flex-col justify-center'>
<h3>
  Project Name
</h3>
<h4>
  Project Platform
</h4>
<div  className='flex'>
  <p>See Details</p>
  <div>Icon</div>
</div>
</section>

  </div>
}

export default ProjectCard;