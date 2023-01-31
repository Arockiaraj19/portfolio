
import React from 'react'
import Footer from '../../components/footer/footer_module'
import About from '../../components/aboutModule/about_module'
import Skills from '../../components/skillModule/skill_module'
import ProjectModule from '../../components/projectModule/project_module'
import Home from '../../components/projectModule/project_module'


const Page = () => {
  return (
 <div >
<Home/>
<ProjectModule/>
<Skills/>
<About/>
<Footer/>
 </div>
  )
}

export default Page
