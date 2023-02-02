import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect,useState } from 'react';
import {useRouter} from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
     
      const main = document.getElementById('main');
      const line = document.getElementById('line');
      const para = document.getElementById('para');
     line?.addEventListener("animationend", function() {
      console.log('inga varutha');
      main!.style.display="block";
      line?.remove();
      para?.remove();
    });
    // loader?.addEventListener("animationend", function() {
    //   loader.remove();
    // });
    
    const myTimeout = setTimeout(()=>{
      const loader = document.getElementById('globalLoader');
      loader?.remove();
      clearTimeout(myTimeout);
    }, 8000);

    }
  }, [])

  return   <>
  {loading? <div>Loading..</div>:
  <Component {...pageProps} />}
</>
}

export default MyApp
