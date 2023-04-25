import { MotionConfig } from "framer-motion";
import ServiceCard from "./utilities/service_card";
import { motion } from "framer-motion"
import HeadingOne from "../utilities/heading_one";
import { IconDefinition, faComputer,faMobilePhone ,faServer} from "@fortawesome/free-solid-svg-icons";
const ServiceModule=()=>{
return <div className="flex m-28 sm:m-10 gap-10 sm:flex-col">
<section  className="flex-1 flex flex-col justify-center">
<HeadingOne content={"What service do I provide"} style="mb-4"/>

</section>
<motion.div
transition={{ ease: "easeOut", duration: 1,  }}
initial={{ opacity: 0,x:"-50%" }}
whileInView={{ opacity: 1 ,x:"0" }}
className="flex-1 flex flex-col">
<ServiceCard heading="Web Development" content="5 Projects" icon={faComputer} />
<ServiceCard  heading="Mobile Development" content="12 Projects" icon={faMobilePhone}/>
<ServiceCard heading="Backend Development" content="6 Projects" icon={faServer}/>
</motion.div>
</div>
}

export default ServiceModule;