import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button=({text,onTap}:{text:string,onTap:any})=>{
    return (   <div onClick={()=>onTap()}  className="cursor-pointer mr-14 flex before:inline group relative z-[2] before:z-[-10] before:absolute before:w-0 before:h-0 before:content-'' transition-all before:bg-white before:rounded-full group-hover:before:h-full group-hover:before:w-full hover:before:h-full hover:before:w-full px-3">
    <div className="h-10 w-10 my-auto  bg-grey group-hover:scale-0  rounded-full"></div>
  <div className='-ml-12 pl-6 flex items-center '>
  <div className="text-xs font-semibold mr-4 uppercase text-black">{text}</div>
  <FontAwesomeIcon icon={faArrowRight} className='text-black ' />
  </div>
   
    </div> 
);
}
export default Button