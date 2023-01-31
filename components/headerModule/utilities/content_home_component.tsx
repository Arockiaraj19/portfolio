
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import HeadingOne from '../../utilities/heading_one'
import Paragraph from '../../utilities/paragraph'
export default function  ContentHomeComponent() {
  return (
    <main className="flex-1 flex-col justify-end">


     <HeadingOne content='Creative developer @ designer' style='mb-3  leading-[50px]'/>
      <Paragraph style="mb-8" content='Hi i am Arockia loosu koothi developer dreamer fucking website Hi i am Arockia loosu koothi developer dreamer fucking website'/>

     <div className="relative ">
     <div className="relative h-14 w-14 my-auto  bg-white  rounded-full"></div>
   <div className='absolute top-5 pl-6 flex items-center'>
   <div className="text-sm font-semibold mr-4 uppercase">See My Works</div>
   <FontAwesomeIcon icon={faArrowRight} />
   </div>
    
     </div>
     
     
    </main>
  )
}
