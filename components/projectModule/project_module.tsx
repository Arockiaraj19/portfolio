
import ProjectComponent from "./utilities/project_component"
import HeadingModule from "../utilities/heading_module"

function ProjectModule() {
  return (
  <div id="project">
   <HeadingModule contentHeading={"These are selection of my recent works"} mainHeading={"Project"}/>
 <ProjectComponent />
 <div className="h-[0.5px] w-full bg-grey"></div>
 <ProjectComponent />
 <div className="h-[0.5px] w-full bg-grey"></div>
 <ProjectComponent />

  </div>
  )
}



export default ProjectModule
