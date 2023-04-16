import Image from 'next/image'
import testImage from '../../../assets/test.png'
import { motion } from "framer-motion"
import { IconDefinition, faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ServiceCard=({heading,content,icon}:{heading:string,content:string,icon:IconDefinition})=>{
return <motion.div

className="flex p-7 mb-4 shadow items-center rounded-sm gap-10">
<section >
<FontAwesomeIcon icon={icon} className='text-black h-10 w-10' />
</section>

<section className="flex-1">
<h3  className='text-2xl font-bold pb-1'>{heading}</h3>
    <p className='text-xs'>{content}</p>
</section>
</motion.div>

};


export default ServiceCard;