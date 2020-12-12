import React, { FunctionComponent } from 'react'

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

export const Achivements: FunctionComponent<{ achivements: string[] }> = ({ achivements }) => {
  return (
    <ul>
      {achivements.map(achivement => (
        <li>{achivement}</li>
      ))}
    </ul>
  )
}

export const WorkExperience: FunctionComponent<{ jobs: Job[] }> = ({ jobs }) => {
  return (
    jobs.map(job => (
      <div className="item wrapper">
        <div className="date-field">
          <p>{job.date}</p>
        </div>
        <div className="info-field">
          <h3>{job.charge}</h3>
          <h4 className="secondary-text-color">
            {job.institution.name} ({job.institution.description})
            <a href={`http://${job.institution.web}`} target="_blank"> {job.institution.web}</a>
            <Achivements achivements={job.achivements} />
          </h4>
        </div>
      </div >
    ))
  )
}