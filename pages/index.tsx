
import React from 'react'
import Home from '../components/headerModule/home_module'

import ProjectModule from '../components/projectModule/project_module'
import Skills from '../components/skillModule/skill_module'
import About from '../components/aboutModule/about_module'
import Footer from '../components/footer/footer_module'
import Cursor from '../components/utilities/cursor'
import Certificate from '../components/certificateModule/certificate_module'
import ServiceModule from '../components/service/service_module'

const Page = () => {
  return (
 <div >
 {/* <Cursor/> */}
<Home/>
<ServiceModule/>
<ProjectModule/>

<Skills/>
{/* <Certificate/> */}
<About/>
<Footer/>

 </div>
  )
}

export default Page
