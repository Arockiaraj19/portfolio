import Sizedbox from "../../helpers/sizedbox"
import ContentHomeComponent from "./content_home_component"
import ImageHomeComponent from "./image_home_component"
import { motion } from "framer-motion"


export const HomeComponent = () => {
  return (
    <div className="w-full relative ">
    
<motion.div className="absolute  top-0 right-0  left-0 m-auto sm:h-[350px] sm:w-[350px]   h-[420px] w-[420px] bg-white  rounded-full" initial={{
  scale:0
}} whileInView={{scale:1}} transition={{ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }}></motion.div>
<section  className="flex items-center px-24 sm:px-10 mt-16 mb-7 relative sm:flex-col sm:overflow-hidden">
<ContentHomeComponent/>

<ImageHomeComponent/>


</section>

    </div>
  )
}
