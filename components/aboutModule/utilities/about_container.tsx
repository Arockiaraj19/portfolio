import Image from "next/image";
import user from "../../../assets/test.png";

const AboutContainer=()=>{
    return (
    <div className="container flex h-96 relative px-9">
       <div className="h-full w-3/5 overflow-hidden box-border relative"> <Image src={"https://i.redd.it/b3esnz5ra34y.jpg"} className="overflow-hidden box-border"   alt="test"   layout='fill'
   objectFit='fill'/> </div>
   <div className="flex-1 ml-4">
    <p>Your “About Me” page is an essential element of your online portfolio website, as it is often the first place that visitors, clients, and readers will go to learn more about you and your work. It’s important to strike a balance between sharing personal and professional information, and to avoid coming across as unprofessional or boastful</p>
    <p>Your “About Me” page is an essential element of your online portfolio website, as it is often the first place that visitors, clients, and readers will go to learn more about you and your work. It’s important to strike a balance between sharing personal and professional information, and to avoid coming across as unprofessional or boastful</p>
   </div>
    </div>
  );
}


export default AboutContainer