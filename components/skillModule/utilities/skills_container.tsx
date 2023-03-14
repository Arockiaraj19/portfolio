import SkillsCard from "./skill_card";
import html from '../../../assets/skills/html.png'
import css from '../../../assets/skills/css.png'

import js from '../../../assets/skills/js.png'
import react from '../../../assets/skills/react.png'



 
const SkillsContainer = () => {
    return (  <div className="w-full flex p-4 flex-wrap">
   <SkillsCard title={"Html"} image={html.src}/>
   <SkillsCard title={"Css"} image={css.src}/>
   <SkillsCard title={"Javascript"} image={js.src}/>

   <SkillsCard title={"React"} image={react.src}/>

        </div>);
}
 
export default SkillsContainer;