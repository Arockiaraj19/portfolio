
import logo from '../../../assets/mukila_logo.png'
import Image from "next/image";
export const HeaderComponent= () => {


  return (
    <div className="w-full fixed z-[999] px-10 py-3 bg-primary flex justify-end">



<div>
<ul className="flex justify-end child:p-3 child:ml-4 child:text-xs child:font-medium child:cursor-pointer child:overflow-hidden

child:relative child:before:absolute child:before:left-0 child:before:w-full child:before:h-[2px] child:before:bg-secondary child:before:content-'' child:before:opacity-0 child:before:transition-all child:before:top-0 child:before:translate-y-[10px] hover:child:before:translate-y-0 hover:child:before:opacity-[1]
child:after:absolute child:after:left-0 child:after:w-full child:after:h-[2px] child:after:bg-secondary child:after:content-'' child:after:opacity-0 child:after:transition-all child:after:bottom-0 child:after:translate-y-[-10px] hover:child:after:translate-y-0 hover:child:after:opacity-[1]">
    <li className="hover:font-semibold"><a href="#home">Home</a></li>
    <li className="hover:font-semibold" ><a href="#project">Projects</a></li> <li className="hover:font-semibold"><a href="#skills">Skills</a></li>  <li className="hover:font-semibold"><a href="#certificate">Certificate</a></li>
    <li className="hover:font-semibold"><a href="#about">About us</a></li>
</ul>
</div>
    </div>
  )
}
