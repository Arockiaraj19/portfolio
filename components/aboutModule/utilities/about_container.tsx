import Image from "next/image";
import userImage from "../../../assets/my_image/mine.jpg";

const AboutContainer=()=>{
    return (
    <div className="container flex h-96 relative px-9">
       <div className="h-full w-1/3 overflow-hidden box-border relative"> <Image src={userImage.src} className="overflow-hidden box-border"   alt="test"   layout='fill'
   objectFit='contain'/> </div>
   <div className="flex-1 flex-col justify-center items-center">
    <p className="mb-2">Hi, my name is Punitha Arockiaraj, and Im a software developer with 3 years of experience in the field. I have a passion for creating high-quality software that solves complex problems and provides a seamless user experience.</p>
    <p className="mb-2">Throughout my career, I have worked on a variety of projects ranging from enterprise applications to mobile apps. I have experience in a range of programming languages such as [list of programming languages], and have a strong foundation in software development principles such as Agile methodology, design patterns, and version control.</p>
    <p className="mb-2">In my spare time, I enjoy keeping up with the latest technology trends and exploring new tools and frameworks to improve my skills. Im excited about the potential of technology to transform industries and improve peoples lives, and Im always looking for new opportunities to make a positive impact through software development.</p>
    <p>Thank you for taking the time to learn more about me. Im excited about the opportunity to work with your organization and contribute to your software development efforts.</p>
   </div>
    </div>
  );
}


export default AboutContainer