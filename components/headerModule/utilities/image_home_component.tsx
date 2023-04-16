

import user from '../../../assets/my_image/animation_me.png'

import Image from "next/image";

export default function ImageHomeComponent

  
() {

  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }


  return (
    <div className="flex-1 bg-top relative overflow-hidden h-96">
 
 <div className='w-full h-full'>
 <div  className='w-full h-full flex items-center justify-center bg-cover rounded-3xl'>
            <Image className='rounded-full'  src={user.src} alt='index'  layout='fill' 
   objectFit='contain'/>
          
          </div>
    </div>
    </div>
)
}
