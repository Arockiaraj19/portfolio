
import React from 'react'
import Home from '../components/headerModule/home_module'

import ProjectModule from '../components/projectModule/project_module'
import Skills from '../components/skillModule/skill_module'
import About from '../components/aboutModule/about_module'
import Footer from '../components/footer/footer_module'
import Cursor from '../components/utilities/cursor'
import Certificate from '../components/certificateModule/certificate_module'
import ServiceModule from '../components/service/service_module'
import  {createContext,  useContext,useReducer,useEffect,useState } from 'react'

export const actions = {
  HOVER_START: "HOVER_START",
  HOVER_END: "HOVER_END",
 
};
type MyContextProps = {
  value: any;
  setValue: React.Dispatch<any>;
};

export const  ContextData = createContext<MyContextProps>({ value: null, setValue: () => null });

const Page = () => {
  const initialState ="default";
  
 

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const reducer = (state:any, action:any) => {
    switch (action.type) {
      case actions.HOVER_START:
        console.log("function triggered");
        return "text";
      case actions.HOVER_END:
        return "default";
      
  
      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const variantsData:any = {
    default: {
      height:40,
      width:40,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
  }



  useEffect(() => {
    const mouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  return (
    <ContextData.Provider   value={{ value:state, setValue:dispatch }}>
<div className='sm:overflow-hidden'>
 <Cursor cursorVariant={state} variantsData={variantsData}/>
<Home/>
<ServiceModule/>
<ProjectModule/>

<Skills/>
{/* <Certificate/> */}
<About/>
<Footer/>
 </div>
 </ContextData.Provider>
  )
}

export default Page
