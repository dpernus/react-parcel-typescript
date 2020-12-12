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
    <>
      {courses.map((course, key) => (
        <div className="item wrapper" key={`course-${key}`}>
          <div className="date-field">
            <p>{course.date}</p>
          </div>
          <div className="info-field">
            <h3>{course.title}</h3>
            <h4 className="secondary-text-color">
              {course.institution.name} ({course.institution.description})
          </h4>
            <p><a href={`http://${course.institution.web}`} target="_blank"> {course.institution.web}</a></p>
            <Achivements achivements={course.description || []} />
          </div>
        </div >
      ))}
    </>
  )
} 