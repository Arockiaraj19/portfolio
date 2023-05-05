
 import user from "../../../assets/test.png";
 import Image from "next/image";
const SkillsCard = ({imageSrc}:{imageSrc:any}) => {
    return ( <div className="h-40 w-40 p-10 rounded-md bg-secondary">
    <Image src={imageSrc} height={200} width={200} alt="html" layout='cover'/>
    </div>);
}
 
export default SkillsCard;