import React from 'react'
import { useParams } from 'react-router-dom'

import { Header } from './Header'
import { PersonalInfo, PersonalData } from './PersonalInfo'
import { Error } from './../Error'

import './resumee.scss'
import { Skills, SkillsView } from './SkillsView'

export interface Institution {
  name: string
  description: string
  web?: string
}

export interface Job {
  date: string
  institution: Institution
  charge: string
  achivements: string[]
}

export interface Course {
  date: string
  title: string
  institution: Institution
  description?: string[]
}

export interface ResumeeInfo {
  personalData: PersonalData
  summary: string
  keyTerms: string[]
  workExperience: Job[]
  education: Course[]
  skills: Skills
}

const resumee: ResumeeInfo = {
  personalData: {
    age: 31,
    name: 'Diana Lourdes Pernús Alonso',
    email: 'dpernus@gmail.com',
  },
  summary:
    'Ingeniera Informática con 8 años de experiencia en la industria de desarrollo de software. Apasionada por la búsqueda de la excelencia y el trabajo colaborativo. Posee buenas habilidades comunicativas y capacidad para rápido aprendizaje y autopreparación. Con 3 años de experiencia desarrollando productos mediante metodologías ágiles en empresas con procesos de transformación digital. Con 5 años de experiencia en: despliegue, soporte y prueba de aplicaciones, manejo de bases de datos e implementación de scripts. Conoce las diferentes áreas del desarrollo de aplicaciones y tiene habilidades para trabajar como desarrolladora tanto en backend como frontend.',
  keyTerms: ['desarrollo de software', 'fullstack'],
  workExperience: [],
  education: [],
  skills: {
    "programming_language": [
      "JavaScript",
      "TypeScript",
      "C++",
      "Go",
      "Java",
      "SQL",
      "T-SQL",
      "HTML",
      "CSS",
      "Python",
      "PHP"
    ],
    "software_desing": [
      "POO",
      "Patrones de diseño",
      "Arquitecturas Limpias",
      "Microservicios",
      "Diseño Responsive",
      "REST",
      "DDD",
      "UML"
    ],
    "development_frameworks": [
      "NodeJS",
      "Express",
      "Koa",
      "Restify",
      "ReactJS",
      "Redux",
      "VueJS",
      "Jest",
      "Bootstrap",
      "Yii",
      "ExtJs4"
    ],
    "platforms_tools": [
      "Docker",
      "Docker Swarm",
      "Azure Cloud",
      "Drone CI",
      "Instana",
      "Kibana"
    ],
    "databases": [
      "SQL Server",
      "PostgresSQL",
      "MongoDB",
      "MySQL"
    ],
    "software_dev_mngmnt": [
      "Scrum",
      "Kanban",
      "RUP"
    ],
    "operating_systems": [
      "MacOS, Windows (XP, 7, 8, 10)",
      "Windows Server (2008, 2012)",
      "Linux (Proxmox VE)"
    ],
    "idioms": [
      "Español (nativo)",
      "Inglés (pre-intermedio)"
    ]
  },
}

export const Resumee: React.FunctionComponent = () => {
  // const { id } = useParams<{ id: string }>()
  const { name } = resumee.personalData

  return resumee ? (
    <section className="container">
      <Header name={name} keyTerms={resumee.keyTerms} />
      <div className="wrapper">
        <aside id="side-content">
          <PersonalInfo personalData={resumee.personalData} />
          <SkillsView skills={resumee.skills} />
        </aside>
        <section id="main-content">
          <div className="summary">
            <h2>RESUMEN</h2>
            <p>{resumee.summary}</p>
          </div>
          <div className="experience">
            <h2>EXPERIENCIA LABORAL</h2>
            <h3>GET (Empresa de Servicios Informáticos Especializados, Cuba) <a href="http://www.get.tur.cu">www.get.tur.cu</a></h3>
          </div>
          <div className="education">
            <h2>EDUCACIÓN</h2>
          </div>
          <hr />
          <div className="hobbies"></div>
        </section>
      </div>
    </section>
  ) : (<Error />)
}
