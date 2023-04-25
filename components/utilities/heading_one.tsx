import { motion } from "framer-motion"
import React, { useState } from "react";
 
  import { ContextData,actions } from "../../pages";


const HeadingOne = ({ content, style }: { content: string, style: string }) => {
  const {setValue,value} = React.useContext(ContextData);
  const [replay, setReplay] = useState(true);
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const arrayOfContent=content.split(" ");

 const words=  arrayOfContent.map((value)=>`${value} `);
 
   const item = {
    hidden: {
      y: "200%",
      
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
     
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };
  return (

    <motion.div whileInView={replay ? "visible" : "hidden"}  initial="hidden" variants={container} onHoverStart={(e)=>{
      console.log(e);
      console.log(setValue);
      console.log(value)
      return setValue({type:actions.HOVER_START})
    }} onHoverEnd={(e)=>setValue({type:actions.HOVER_END})}>


      <motion.h1 className={`text-5xl font-bold ${style} text-black `}   >{words.map((value,index)=><span
                  style={{
                    overflow: "hidden",
                    display: "inline-block"
                    
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block",paddingRight:'7px' }}
                    variants={item} key={index}
                  >
                    {value}
                  </motion.span>
                </span>)}</motion.h1>
    </motion.div>
  )
}

export default HeadingOne



