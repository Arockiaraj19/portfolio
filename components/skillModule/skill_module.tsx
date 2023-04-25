import { useEffect } from "react";
import SkillsContainer from "./utilities/skills_container";
import HeadingModule from '../utilities/heading_module'


function Skills() {
    
    return <div id="skills">
        <HeadingModule contentHeading={"These are selection of my recent works"} mainHeading={"My Extensive List of Skills"}/>
      
       <SkillsContainer/>

       <div className="relative w-full">
<div className="h-40 w-40 bg-secondary animate-scroll">

</div>
       </div>
    </div>;
}

export default Skills;