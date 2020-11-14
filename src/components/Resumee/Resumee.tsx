import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Header } from './Header'
import { PersonalInfo, PersonalData } from './PersonalInfo'
import { Loading } from './../Loading'
import { Error as ErrorView } from './../Error'

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

export const Resumee: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>()
  const [resumee, setResumee] = useState<ResumeeInfo | undefined>(undefined)
  const [error, setError] = useState<Error | undefined>(undefined)

  useEffect(() => {
    fetch(`http://localhost:3000/user/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Server error')
        }
        return res.json()
      })
      .then(resumeeData => setResumee(resumeeData))
      .catch(error => {
        console.error(error)
        setError(error)
      })
  }, [])

  if (error) {
    return <ErrorView />
  }

  return resumee ? (
    <section className="container">
      <Header name={resumee.personalData.name} keyTerms={resumee.keyTerms} />
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
  ) : (<Loading />)
}
