import { instagram,github,linkedIn } from "../../../constants/web_links";

import { useRouter } from "next/router";
export const LinkHomeComponent=()=>{
  const router=useRouter();
return (
     <ul className="mt-10  flex  space-x-4 child:text-xs child:font-normal child:cursor-pointer ">
    <li className="underline" onClick={(e:any)=>{
      router.push(github);
    }}>Github</li>
  <li>/</li>
    <li className="underline" onClick={(e:any)=>{
      router.push(linkedIn);
    }}>LinkedIn</li>
    <li>/</li>
    <li className="underline" onClick={(e:any)=>{
      router.push(instagram);
    }} >Instagram</li>
    
</ul> 
);
}