import { motion } from "framer-motion"
import { useState } from "react";

const Paragraph = ({ content, style }: { content: string, style: string }) => {
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

    <motion.div  whileInView={replay ? "visible" : "hidden"}  initial="hidden" variants={container}>


      <motion.p className={`text-xs ${style}`}   >{words.map((value,index)=><span
                  style={{
                    overflow: "hidden",
                    display: "inline-block"
                    
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block",paddingRight:'7px'}}
                    variants={item} key={index}
                  >
                    {value}
                  </motion.span>
                </span>)}</motion.p>
    </motion.div>
  )
}

export default Paragraph