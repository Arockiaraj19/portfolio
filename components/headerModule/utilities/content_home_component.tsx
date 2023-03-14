
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import HeadingOne from '../../utilities/heading_one'
import Paragraph from '../../utilities/paragraph'
import Button from '../../utilities/button'
export default function  ContentHomeComponent() {
  return (
    <main className="flex-1 flex-col justify-end">


     <HeadingOne content='Creative Developer' style='mb-3'/>
      <Paragraph style="mb-8" content='Introduce yourself. Tell readers who you are in the first line of your portfolio introduction'/>

     <div className='flex'>
     <Button  text='SEE MY PROJECT' onTap={(e:any)=>{}}/>
     </div>
     
     
    </main>
  )
}
