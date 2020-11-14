import React from 'react'

export type Skills = Record<string, string[]>

const skillsCategories: Record<string, string> = {
  software_desing: "Diseño de Software",
  programming_language: "Lenguajes de Programación",
  development_frameworks: "Frameworks de Desarrollo",
  platforms_tools: "Plataformas",
  databases: "Bases de Datos",
  software_dev_mngmnt: "Metodologías de Desarrollo",
  operating_systems: "Sistemas Operativos",
  idioms: "Idiomas"
}

const SkillCategory: React.FunctionComponent<{ skillName: string, skillValues: string[] }> = ({ skillName, skillValues }) => {
  return (
    <div>
      <h3>{skillsCategories[skillName]}</h3>
      <ul>
        {skillValues.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export const SkillsView: React.FunctionComponent<{ skills: Skills }> = ({ skills }) => {
  return (
    <div className="skills">
      <h2>HABILIDADES</h2>
      {Object.keys(skills).map(skill => (
        <SkillCategory key={skill} skillName={skill} skillValues={skills[skill]} />
      ))}
    </div>
  )
}