import HeadingOne from "../../utilities/heading_one";

 
const AboutHeading = () => {
    return (  <div className="bg-white">
    <section  className="m-24">
    <div className="flex items-center">
    <HeadingOne content="About Mee" style="leading-[50px] mb-3"/>
    <div className="ml-3 h-[2px] w-10 bg-secondary"></div>
    </div>
          <p className="text-xs mb-8 leading-7">These are selection of my recent works</p>
    </section>
    
        </div>);
}
 
export default AboutHeading;