import SkillsCard from "./skill_card";
import html from '../../../assets/skills/html.png'
import css from '../../../assets/skills/css.png'

import js from '../../../assets/skills/js.png'
import react from '../../../assets/skills/react.png'
import { useInView } from "framer-motion"

import {useRef} from 'react'

const SkillsContainer = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (<div className="w-full  grid grid-cols-4 gap-4">
        <section className="bg-black h-80 col-start-2 transition-all hover:animate-bounce">
        </section>
        <section className="bg-black h-80 col-start-4">
        </section>
        <section className="bg-black h-80">
        </section>
        <section className="bg-black h-80 col-start-3 col-end-4">
        </section>
        <section className="bg-black h-80 col-start-2">
        </section>
        <section className="bg-black h-80 col-start-4">
        </section>
        <section className="bg-black h-80">
        </section>
        <section className="bg-black h-80 col-start-3">
        </section>
       
      

    </div>);
}

export default SkillsContainer;