import ProjectHeading from "./utilities/heading_component"
import ProjectComponent from "./utilities/project_component"


function ProjectModule() {
  return (
  <div>
 <ProjectHeading/>
 <ProjectComponent />
 <div className="h-[0.5px] w-full bg-grey"></div>
 <ProjectComponent />
 <div className="h-[0.5px] w-full bg-grey"></div>
 <ProjectComponent />

  </div>
  )
}



export default ProjectModule
