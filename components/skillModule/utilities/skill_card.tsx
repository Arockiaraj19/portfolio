
 import user from "../../../assets/test.png";
 import Image from "next/image";
const SkillsCard = ({title,image}:{title:string,image:string}) => {
    return (  <div className="h-52 w-52 shadow-md rounded-3xl cursor-pointer transition-all relative mr-5 hover:scale-90">
    <div className="h-full w-full rounded-3xl overflow-hidden box-border"> <Image src={image} className="rounded-3xl overflow-hidden box-border "  alt="test"   layout='fill'
   objectFit='fill'/> </div>
    {/* <div className="absolute left-4 bottom-4 text-white font-semibold">
      <p>{title}</p>
    </div> */}
  </div>);
}
 
export default SkillsCard;