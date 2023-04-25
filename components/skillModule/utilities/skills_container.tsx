import SkillsCard from "./skill_card";
import html from '../../../assets/skills/html.png'
import css from '../../../assets/skills/css.png'

import js from '../../../assets/skills/js.png'
import react from '../../../assets/skills/react.png'
import { useInView } from "framer-motion"
import { IconDefinition, faComputer,faMobile ,faServer,faDatabase,faCloud} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useRef,useState,useEffect} from 'react'

const SkillsContainer = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    // useEffect(() => {
    // console.log("ithu trigger aakuthaa");
    
   
    // }, [isInView])
    
    return (<div ref={ref} className="w-full   grid grid-cols-4 sm:gap-10 sm:grid-cols-1">

        <section className={`bg-black h-80 sm:w-full  flex flex-col justify-center items-center transition-all delay-4000 duration-2000 col-start-2 sm:col-start-1 rounded-3xl border-white`}>
        <FontAwesomeIcon icon={faMobile} className='text-white h-20 w-20 mb-10' />
         <div className="text-3xl font-bold text-white">
        Flutter
        </div>

        <div className="h-[4px] my-5 w-36 bg-white"></div>
        <div className="text-3xl font-bold text-white text-center">
       React Native
        </div>
        </section>


        <section className={`bg-black h-80 sm:w-full col-start-4 sm:col-start-1  flex flex-col justify-center items-center  rounded-3xl transition-all delay-4000 duration-2000`}>
        <FontAwesomeIcon icon={faComputer} className='text-white h-20 w-20 mb-10' />
        <div className="text-3xl font-bold text-white">
       React Js
        </div>

        <div className="h-[4px] my-5 w-36 bg-white"></div>
        <div className="text-3xl font-bold text-white text-center">
      Next Js
        </div>
        </section>


        <section className={`bg-black h-80 sm:col-start-1 sm:w-full  flex flex-col justify-center items-center  rounded-3xl transition-all delay-4000 duration-2000`}>
        <FontAwesomeIcon icon={faServer} className='text-white h-20 w-20 mb-10' />
        <div className="text-3xl font-bold text-white text-center">
     Node Js
        </div>
        <div className="h-[4px] my-5 w-36 bg-white"></div>
        <div className="text-3xl font-bold text-white text-center">
    DevOps
        </div>
        </section>


        <section className={`bg-black h-80 sm:col-start-1 sm:w-full  col-start-3 col-end-4 flex flex-col justify-center items-center  rounded-3xl transition-all delay-4000 duration-2000`}>
        <FontAwesomeIcon icon={faCloud} className='text-white h-20 w-20 mb-10' />
        <div className="text-3xl font-bold text-white">
       AWS
        </div>

        <div className="h-[4px] my-5 w-36 bg-white"></div>
        <div className="text-3xl font-bold text-white text-center">
     Firebase
        </div>
        </section>


        <section className={`bg-black h-80 sm:col-start-1 sm:w-full  col-start-2 flex flex-col justify-center items-center  rounded-3xl transition-all delay-4000 duration-2000`}>  <FontAwesomeIcon icon={faDatabase} className='text-white h-20 w-20 mb-4' />
        <div className="text-3xl font-bold text-white">
    Databases
        </div>

        {/* <div className="h-[4px] my-5 w-36 bg-white"></div>
        <div className="text-3xl font-bold text-white text-center">
        Postgresql
        </div>
        <div className="h-[4px] my-5 w-36 bg-white"></div>
        <div className="text-3xl font-bold text-white text-center">
        Mongodb
        </div> */}
        </section>
        {/* <section className={`bg-black h-80 ${isInView?"col-start-4":""} flex flex-col justify-center items-center`}>
        <div className="text-3xl font-bold text-white text-center">
 Learning...
        </div>
        </section> */}
        {/* <section className="bg-black h-80">
        </section>
        <section className="bg-black h-80 col-start-3">
        </section> */}
       
      

    </div>);
}

export default SkillsContainer;