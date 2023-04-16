import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
      const [cursorVariant, setCursorVariant] = useState("default");
      const variantsData:any = {
        default: {
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        },
        text: {
          height: 150,
          width: 150,
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
          backgroundColor: "yellow",
          mixBlendMode: "difference"
        },
      }
    
      const textEnter = () => setCursorVariant("text");
      const textLeave = () => setCursorVariant("default");
    
      useEffect(() => {
        const mouseMove = (e: { clientX: any; clientY: any; }) => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
      }, []);
    
    
 return ( <motion.div
    className='bg-black h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none z-[999]'
    
   
    
    animate={cursorVariant}
    variants={variantsData}
  >{}</motion.div>)  ;
}

export default Cursor