
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import HeadingOne from '../../utilities/heading_one'
import Paragraph from '../../utilities/paragraph'
import Button from '../../utilities/button'
import { useRouter } from 'next/router';
import { drive } from '../../../constants/web_links'
import { LinkHomeComponent } from './link_home_component'
export default function  ContentHomeComponent() {
  const router = useRouter();
  return (
    <main className="flex-1  sm:w-full flex-col justify-end">


     <HeadingOne content='Hi,I am Arockia... Professional Developer' style='mb-3'/>
      <Paragraph style="mb-8" content="I'm a software developer with 3 years of experience in the field. I have a passion for creating high-quality software that solves complex problems and provides a seamless user experience."/>

     <div className='flex'>

     <Button  text='RESUME' onTap={(e:any)=>{
     // e.preventDefault();
      router.push(drive)
     }}/>
     </div>
     
     <LinkHomeComponent/>
    </main>
  )
}
