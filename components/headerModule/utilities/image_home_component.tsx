import user from "../../../assets/user.png";
import Image from "next/image";

export default function ImageHomeComponent
() {
  return (
    <div className="flex-1 bg-top relative overflow-hidden
    after:content-'' after:absolute after:top-0 after:right-0 after:w-full after:h-full after:bg-secondary after:translate-x--full after:animate-after 
    after:content-'' before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-primary before:translate-x-0 before:animate-before">
   <Image src={user.src} alt="Logo"
    objectFit="cover" width={550} height={550}/>
    </div>
  )
}
