import { Skill, SkillsTitle } from "./style";
import { Cpu, CheckCircle } from 'phosphor-react'
import { skills } from './skillData'

export function Skills() {
  return ( 
    <>
      <SkillsTitle id='skills'>
        <Cpu size={40}/>
        <h1>Skills &amp; Technologies</h1>
        <p>Here are a few technologies I’ve been working on my projects.</p>
      </SkillsTitle>
      <Skill>
        {
          skills.map((skill) => (
            <div key={skill.tecnology}>
            <CheckCircle size={24}/>
            <p>{skill.tecnology}</p>
            </div>
          ))
        }
      </Skill>
    </>
  );
    
}

