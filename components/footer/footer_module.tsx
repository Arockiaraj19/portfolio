import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../utilities/button";
import HeadingOne from "../utilities/heading_one";
import Paragraph from "../utilities/paragraph";
import HeadingTwo from "../utilities/heading_two";


import { useRouter } from "next/router";
import { instagram,github,linkedIn } from "../../constants/web_links";
import { link } from "fs";
 
const Footer = () => {
  const router=useRouter();
    return (  <div className="bg-black w-full h-auto pt-14 flex  flex-col   items-center">
  
  <HeadingTwo content="Let us work Together" style="text-4xl font-semibold text-center text-white mb-10"/>     
 
   
    {/* <Paragraph style="mb-12 text-white" content='These are selection of my recent works'/>     */}
          <Button   text='SEE MY PROJECT' onTap={(e:any)=>{
            router.push('#project')
          }}/>

         <ul className="my-6 flex space-x-4 child:text-xs child:font-normal child:cursor-pointer child:text-white">
    <li className="underline" onClick={(e:any)=>{
            router.push(github)
          }}>Github</li>
  <li>/</li>
    <li className="underline" onClick={(e:any)=>{
            router.push(linkedIn)
          }}>LinkedIn</li>
    <li>/</li>
    <li className="underline" onClick={(e:any)=>{
            router.push(instagram)
          }}>Instagram</li>
    
</ul> 
        </div>);
}
 
export default Footer;