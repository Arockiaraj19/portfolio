

import HeadingModule from "../utilities/heading_module"
import ProjectCard from "./utilities/project_component"

function ProjectModule() {
  return (
  <div id="project">
   <HeadingModule contentHeading={"These are selection of my recent works"} mainHeading={"Project"}/>

<ProjectCard/>
<ProjectCard/>
<ProjectCard/>
  </div>
  )
}



export default ProjectModule
