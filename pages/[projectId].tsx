
import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {

    const routes=useRouter();
    const query=routes.query.projectId;
  return (
 <div >


 </div>
  )
}

export default Page
