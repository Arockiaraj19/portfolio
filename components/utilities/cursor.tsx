import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = ({cursorVariant,variantsData}:{cursorVariant:any,variantsData:any}) => {

    
    
 return ( <motion.div
    className='bg-black h-10 w-10 rounded-full fixed top-0 left-0 pointer-events-none z-[999999]'
    
   
    
    animate={cursorVariant}
    variants={variantsData}
  >{}</motion.div>)  ;
}

export default Cursor