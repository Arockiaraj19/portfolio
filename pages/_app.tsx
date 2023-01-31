import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect,useState } from 'react';
import {useRouter} from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
   router.events.on("routeChangeStart", (url)=>{
      alert('hi');
      setIsLoading(true)
    });

    // Router.events.on("routeChangeComplete", (url)=>{
    //   setIsLoading(false)
    // });

    // Router.events.on("routeChangeError", (url) =>{
    //   setIsLoading(false)
    // });

  }, [router.events])

  return   <>
  {loading? <div>Loading..</div>:
  <Component {...pageProps} />}
</>
}

export default MyApp
