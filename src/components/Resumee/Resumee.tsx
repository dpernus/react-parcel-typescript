import React from 'react'
import { useParams } from 'react-router-dom'

import { Header } from './Header'
import { Error } from './../Error'

import './resumee.scss'

export interface PersonalData {
  name: string
  age: number
  email: string
  address?: string
  phone?: number
  social?: string
}
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

export type Skills = Record<string, string[]>

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
  skills: {},
}

export const Resumee: React.FunctionComponent = () => {
  // const { id } = useParams<{ id: string }>()
  const { name, age, email, phone, address, social } = resumee.personalData
  return resumee ? (
    <section className="container">
      <Header name={name} keyTerms={resumee.keyTerms} />
      <div className="wrapper">
        <aside id="side-content">
          <div className="basic-info">
            <div className="logo"></div>
            <div id="age" className="item"><i className="fa fa-user"></i><span>{age}</span></div>
            {address && <div id="address" className="item"><i className="fa fa-map-marker"></i><span></span></div>}
            {phone && <div id="phone" className="item"><i className="fa fa-phone"></i><span></span></div>}
            <div id="email" className="item"><i className="fa fa-envelope"></i><span>{email}</span></div>
            {social && <div id="linkedin" className="item"><i className="fa fa-linkedin"></i><span></span></div>}
          </div>
          <div className="skills">
            <h2>HABILIDADES</h2>
            <div className="softw-dsng"></div>
            <div className="data-bases"></div>
            <div className="program-lang"></div>
            <div className="softw-dv-mng"></div>
            <div className="dev-frmwrk"></div>
            <div className="opertv-syst"></div>
            <div className="langs"></div>
          </div>
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
