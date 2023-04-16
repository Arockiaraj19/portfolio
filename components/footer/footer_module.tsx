import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../utilities/button";
import HeadingOne from "../utilities/heading_one";
import Paragraph from "../utilities/paragraph";
import HeadingTwo from "../utilities/heading_two";

 
const Footer = () => {
    return (  <div className="bg-black w-full h-auto pt-14 flex  flex-col   items-center">
  
  <HeadingTwo content="Let us work Together" style="text-4xl font-semibold text-center text-white"/>     
 
   
    <Paragraph style="mb-12 text-white" content='These are selection of my recent works'/>    
          <Button  text='SEE MY PROJECT' onTap={(e:any)=>{}}/>

         <ul className="my-6 flex space-x-4 child:text-xs child:font-normal child:cursor-pointer child:text-white">
    <li className="underline" >Github</li>
  <li>/</li>
    <li className="underline" >LinkedIn</li>
    <li>/</li>
    <li className="underline" >Instagram</li>
    
</ul> 
        </div>);
}
 
export default Footer;