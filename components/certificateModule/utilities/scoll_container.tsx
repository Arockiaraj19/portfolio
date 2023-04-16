import Image from "next/image";
import certificateOne from '../../../assets/certificates/certificate_1.jpeg'
import certificateTwo from '../../../assets/certificates/certificate_2.jpeg'

import certificateThree from '../../../assets/certificates/certificate_3.jpeg'



const ScrollContainer=()=>{

    return (
    <div className="container flex px-8 h-96 justify-between overflow-hidden">
     <Image src={certificateOne.src} alt="index"   height={50} width={400}/> 
     <Image src={certificateTwo.src} alt="index"  height={50} width={400}/> 
     <Image src={certificateThree.src} alt="index"  height={50} width={400}/> 

     
    </div>
  );
}


export default ScrollContainer