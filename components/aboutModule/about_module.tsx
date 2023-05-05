import HeadingModule from "../utilities/heading_module";
import AboutContainer from "./utilities/about_container";



function About() {
    
    return <div className="mb-10" id="about">
     <HeadingModule contentHeading={""} mainHeading={"About Mee"}/>
      <AboutContainer/>
    </div>;
}

export default About;