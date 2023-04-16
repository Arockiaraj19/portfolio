

import HeadingModule from "../utilities/heading_module"
import ProjectCardThree from "./utilities/project_cardFour"
import ProjectCardOne from "./utilities/project_cardOne"
import ProjectCardTwo from "./utilities/project_cardTwo"
import ProjectCard from "./utilities/project_component"

function ProjectModule() {
  return (
  <div id="project">
   <HeadingModule contentHeading={"These are selection of my recent works"} mainHeading={"Project"}/>

<ProjectCard/>
<ProjectCardOne/>
<ProjectCardTwo/>
<ProjectCardThree/>
  </div>
  )
}



export default ProjectModule
