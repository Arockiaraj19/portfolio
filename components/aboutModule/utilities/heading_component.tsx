import HeadingOne from "../../utilities/heading_one";
import Paragraph from "../../utilities/paragraph";

 
const AboutHeading = () => {
    return (  <div className="bg-white">
    <section  className="m-24">
    <div className="flex items-center">
    <HeadingOne content="About Mee" style="mb-3"/>
    <div className="ml-3 h-[2px] w-10 bg-secondary"></div>
    </div>
    <Paragraph style="mb-8" content='These are selection of my recent works'/>    
    </section>
    
        </div>);
}
 
export default AboutHeading;