import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 
const Footer = () => {
    return (  <div className="bg-black w-full h-auto pt-14 flex  flex-col   items-center">
  
   
    <h1 className=" text-4xl font-semibold text-white text-center">Let us Together</h1><div className="ml-3 h-[2px] w-10 bg-secondary"></div>
   
          <p className="text-xs mt-4 mb-12 text-white text-center">These are selection of my recent works</p>
          <div  className="flex mb-24">
         <div className="h-14 w-14 my-auto  bg-secondary  rounded-full"></div>
       <div className='-ml-12 pl-6 flex items-center'>
       <div className="text-sm font-semibold mr-4 uppercase text-white">VIEW PROJECT</div>
       <FontAwesomeIcon icon={faArrowRight} className="text-white" />
       </div>
        
         </div> 

         <ul className="mb-6 flex space-x-4 child:text-xs child:font-normal child:cursor-pointer child:text-white">
    <li className="underline" >Github</li>
  <li>/</li>
    <li className="underline" >LinkedIn</li>
    <li>/</li>
    <li className="underline" >Instagram</li>
    
</ul> 
        </div>);
}
 
export default Footer;