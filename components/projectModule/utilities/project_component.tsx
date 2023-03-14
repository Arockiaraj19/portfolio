
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

 import rose from "../../../assets/try.jpg";
 import Image from "next/image";
 import { useState } from 'react';
import Button from '../../utilities/button';
import Modal from 'react-modal'



const ProjectComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const customStyles = {
     overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex :"10000"
     },
     content: {
      padding:'0',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height:"75%",
        width:"75%",
        
     }
  }
  const openModel=()=>{
    setIsOpen(true)
  }
    return ( <div className="bg-primary w-full h-48 group hover:bg-white relative">
    <section className="h-full w-full  flex justify-between items-center">
    <main className=" flex items-center h-full">
    <div className="h-[2px] w-36 bg-grey mr-6"></div>
    <p className="text-xs mr-5 text-dark_grey  transition-all">01</p>
    <div className="flex flex-col relative">
    <div className="absolute z-0  scale-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-xs mr-5 text-dark_grey font-bold group-hover:mx-12 group-hover:scale-[8] transition-all">01</div>
  <div className='relative '>  
  <h1 className="text-xl font-semibold text-dark_grey transition-all group-hover:text-black group-hover:text-3xl">Project One</h1>
    <p className="text-xs text-dark_grey ">UI/UX</p>
  </div>
   
    </div>
    
    </main>
    
   
  <section className='flex-1 flex items-center justify-end  relative h-full'>
<Button onTap={ openModel} text='VIEW PROJECT'/>

         <div className=" h-0 w-0 right-0 top-0 origin-right group-hover:h-44  group-hover:w-44 group-hover:scale-[2] absolute my-auto skew-y-3 transition-all ">
  <Image  src={rose.src} alt="Logo"
   layout='fill'
   objectFit='contain'/>
  </div>

  </section>
   
    
    </section>
    <Modal  isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
            <div className='w-full h-full flex'>
              <section className='flex-1 h-full'>
                put your content
              </section>  <section className='flex-1 h-full relative'>
              <Image  src={rose.src} alt="Logo"
   layout='fill'
   objectFit='fill'/>
              </section>
            </div>
         </Modal>
    </div> );
}
 
export default ProjectComponent;