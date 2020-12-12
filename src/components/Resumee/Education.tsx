import React from 'react'
import { Achivements, Institution } from './WorkExperience'

export interface Course {
  date: string
  title: string
  institution: Institution
  description?: string[]
}

export const Education: React.FunctionComponent<{ courses: Course[] }> = ({ courses }) => {
  return (
    courses.map(course => (
      <div className="item wrapper">
        <div className="date-field">
          <p>{course.date}</p>
        </div>
        <div className="info-field">
          <h3>{course.title}</h3>
          <h4 className="secondary-text-color">
            {course.institution.name} ({course.institution.description})
            <a href={`http://${course.institution.web}`} target="_blank"> {course.institution.web}</a>
            <Achivements achivements={course.description || []} />
          </h4>
        </div>
      </div >
    ))
  )
} 