import HeadingOne from './heading_one'
import Paragraph from './paragraph'
 
const HeadingModule = ({mainHeading,contentHeading}) => {
    return (  <div className="bg-white">
    <section  className="m-24 sm:m-10">
    <div className="flex items-center">
    <HeadingOne content={mainHeading} style="mb-3"/>
    <div className="ml-3 h-[2px] w-16 bg-secondary"></div>
    </div>
    <Paragraph style="mb-8" content={contentHeading}/>    
    </section>
    
        </div>);
}
 
export default HeadingModule;