import React from 'react'
import { useParams } from 'react-router-dom'
import { Error } from './../Error'

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
  personalData: {
    name: string
    age: number
    email: string
    address?: string
    phone?: number
    social?: string
  }
  summary: string
  keyTerms: string[]
  workExperience: Job[]
  education: Course[]
  skills: Skills
}

const resumee: Record<string, ResumeeInfo> = {
  // eslint-disable-next-line quote-props
  '2': {
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
  },
}

export const Resumee: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>()
  return resumee[id] ? (
    <div>
      <h1>This is my resumee {resumee[id].personalData.name}</h1>
    </div>
  ) : (
    <Error />
  )
}
