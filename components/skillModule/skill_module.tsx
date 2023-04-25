import { useEffect } from "react";
import HeadingModule from '../utilities/heading_module'
import Image from "next/image";
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import javascript from '../../assets/skills/javascript.png';
import ts from '../../assets/skills/ts.png';
import react from '../../assets/skills/react.png';
import reactnative from '../../assets/skills/react_native.png';
import flutter from '../../assets/skills/flutter.png';
import node from '../../assets/skills/node.png';
import firebase from '../../assets/skills/firebase.png';
import aws from '../../assets/skills/aws.png';
import mysql from '../../assets/skills/mysql.png';

import mongodb from '../../assets/skills/mongodb.png';

import postsql from '../../assets/skills/postsql.png';

import { actions,ContextData } from '../../pages/index';
import SkillsCard from "./utilities/skill_card";
import React from "react";
import HeadingOne from "../utilities/heading_one";
function Skills() {
    const {setValue,value} = React.useContext(ContextData);
    return <div id="skills">
        <HeadingModule contentHeading={"These are selection of my recent works"} mainHeading={"My Extensive List of Skills"}/>
      
      

       <div className="relative w-full overflow-hidden bg-black py-20 ">
<div className="h-auto w-auto flex translate-x-full animate-scroll space-x-10 items-center mb-5">
<SkillsCard imageSrc={html.src}/>
<SkillsCard imageSrc={css.src}/>
<SkillsCard imageSrc={javascript.src}/>
<SkillsCard imageSrc={ts.src}/>
<SkillsCard imageSrc={react.src}/>
<h2 className="text-5xl font-bold text-primary" onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})}>Web Tech</h2>
</div>
 
       <div className="h-auto w-auto flex -translate-x-full animate-scrollone space-x-10 items-center mb-5">
       <h2 className="text-5xl font-bold text-primary" onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})}>Mobile Tech</h2>
<SkillsCard imageSrc={flutter.src}/>
<SkillsCard imageSrc={reactnative.src}/>


</div>
<div className="h-auto w-auto flex translate-x-full animate-scroll space-x-10 items-center mb-5">
<SkillsCard imageSrc={node.src}/>
<SkillsCard imageSrc={aws.src}/>
<SkillsCard imageSrc={firebase.src}/>

<h2 className="text-5xl font-bold text-primary" onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})}>Server Technology</h2>
</div>
<div className="h-auto w-auto flex -translate-x-full animate-scrollone space-x-10 items-center ">
       <h2 className="text-5xl font-bold text-primary" onMouseEnter={() =>setValue({type:actions.HOVER_START})}
        onMouseLeave={() =>setValue({type:actions.HOVER_END})}>Databases</h2>
<SkillsCard imageSrc={postsql.src}/>
<SkillsCard imageSrc={mysql.src}/>
<SkillsCard imageSrc={mongodb.src}/>

</div>
   </div>    
    </div>;
}

export default Skills;