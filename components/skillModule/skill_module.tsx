import { useEffect } from "react";
import SkillsContainer from "./utilities/skills_container";
import HeadingModule from '../utilities/heading_module'


function Skills() {
    
    return <div id="skills">
        <HeadingModule contentHeading={"These are selection of my recent works"} mainHeading={"Skills."}/>
      
       <SkillsContainer/>
    </div>;
}

export default Skills;