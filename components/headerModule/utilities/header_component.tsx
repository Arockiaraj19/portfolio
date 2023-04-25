
import logo from '../../../assets/mukila_logo.png'
import {faBars,faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {useState} from 'react'
import { actions,ContextData } from '../../../pages';
import React from 'react';
export const HeaderComponent= () => {

  const {setValue,value} = React.useContext(ContextData);
const [nav,setNav]=useState(false);

  return (
    <div className={`w-full fixed z-[999] px-10 py-3 bg-primary flex justify-end sm:flex-col ${nav==false?"":'sm:h-full sm:justify-start'}`}>
     <div className={`${nav==true?"flex-1":"hidden"} transition-all flex-col justify-start`}>
 <div onClick={(e)=>setNav(false)} className='flex justify-end'>
   <FontAwesomeIcon icon={faXmark} className=' text-black h-10 w-10' />
   </div>
<ul className="flex-1 w-full  flex-col items-center justify-around child:sm:w-fit child:sm:text-center child:sm:text-2xl child:p-3 child:ml-4 child:mt-10 child:text-xs child:font-medium child:cursor-pointer child:overflow-hidden
child:relative child:before:absolute child:before:left-0 child:before:w-full child:before:h-[2px] child:before:bg-secondary child:before:content-'' child:before:opacity-0 child:before:transition-all child:before:top-0 child:before:translate-y-[10px] hover:child:before:translate-y-0 hover:child:before:opacity-[1]
child:after:absolute child:after:left-0 child:after:w-full child:after:h-[2px] child:after:bg-secondary child:after:content-'' child:after:opacity-0 child:after:transition-all child:after:bottom-0 child:after:translate-y-[-10px] hover:child:after:translate-y-0 hover:child:after:opacity-[1]">
    <li className="hover:font-semibold" onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})}><a href="#home">Home</a></li>
    <li className="hover:font-semibold" onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})} ><a href="#project">Projects</a></li>
     <li className="hover:font-semibold" onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})}><a href="#skills">Skills</a></li> 
    <li className="hover:font-semibold" onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})}><a href="#about">About us</a></li>
</ul>
 </div>


 
 <div className={`${nav==true?"hidden":""} sm:flex-col sm:justify-start`} >
 <div onClick={(e)=>setNav(true)}  className='hidden sm:flex sm:justify-end'>
   <FontAwesomeIcon icon={faBars} className=' text-black h-10 w-10' />
   </div>

<ul className="sm:hidden flex sm:flex-1 sm:flex-col sm:items-center sm:justify-around child:sm:w-fit child:sm:text-center child:sm:text-2xl child:p-3 child:ml-4 child:text-xs child:font-medium child:cursor-pointer child:overflow-hidden

child:relative child:before:absolute child:before:left-0 child:before:w-full child:before:h-[2px] child:before:bg-secondary child:before:content-'' child:before:opacity-0 child:before:transition-all child:before:top-0 child:before:translate-y-[10px] hover:child:before:translate-y-0 hover:child:before:opacity-[1]
child:after:absolute child:after:left-0 child:after:w-full child:after:h-[2px] child:after:bg-secondary child:after:content-'' child:after:opacity-0 child:after:transition-all child:after:bottom-0 child:after:translate-y-[-10px] hover:child:after:translate-y-0 hover:child:after:opacity-[1]">
    <li className="hover:font-semibold"  onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})}><a href="#home">Home</a></li>
    <li className="hover:font-semibold" onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})}><a href="#project">Projects</a></li>
     <li className="hover:font-semibold" onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})}><a href="#skills">Skills</a></li> 
    <li className="hover:font-semibold" onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})}><a href="#about">About us</a></li>
</ul>
 </div>
</div>
    
  )
}
