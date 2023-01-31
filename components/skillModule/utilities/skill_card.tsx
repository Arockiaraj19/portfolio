
 import user from "../../../assets/test.png";
 import Image from "next/image";
const SkillsCard = () => {
    return (  <div className="h-72 w-72 shadow-md rounded-3xl cursor-pointer transition-all relative mr-5 hover:scale-90">
    <div className="h-full w-full rounded-3xl overflow-hidden box-border"> <Image src={"https://i.redd.it/b3esnz5ra34y.jpg"} className="rounded-3xl overflow-hidden box-border"  alt="test"   layout='fill'
   objectFit='fill'/> </div>
    <div className="absolute left-4 bottom-4 text-white font-semibold">
      <p>Flutter</p>
    </div>
  </div>);
}
 
export default SkillsCard;