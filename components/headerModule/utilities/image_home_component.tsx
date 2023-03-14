import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../../../assets/sliderImages/image_1.png'
import image2 from '../../../assets/sliderImages/image_2.png'

import image3 from '../../../assets/sliderImages/image_3.png'

import image4 from '../../../assets/sliderImages/image_4.png'

import image5 from '../../../assets/sliderImages/image_5.png'


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
  const fadeImages = [
    {
      url: image1.src,
    
    },
    {
      url: image2.src,
    
    },
    {
      url: image3.src,
    
    },
    {
      url: image4.src,
    
    },
    {
      url: image5.src,
    
    },

  ];

  return (
    <div className="flex-1 bg-top relative overflow-hidden h-96">
 
 <div className='w-full h-full'>
      <Fade
      canSwipe={false}
      arrows={false}
      duration={2000}
      autoplay={true}

       >
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className='w-full h-96 flex items-center justify-center bg-cover '>
            <Image  src={fadeImage.url} alt='index'  layout='fill' 
   objectFit='fill'/>
          
          </div>
        ))}
      </Fade>
    </div>
    </div>
  )
}
