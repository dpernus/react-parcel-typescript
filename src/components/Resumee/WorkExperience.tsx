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
      {achivements.map((achivement, key) => (
        <li key={`achivement-${key}`}>{achivement}</li>
      ))}
    </ul>
  )
}

export const WorkExperience: FunctionComponent<{ jobs: Job[] }> = ({ jobs }) => {
  return (
    <>
      {jobs.map((job, key) => (
        <div className="item wrapper" key={`job-${key}`}>
          <div className="date-field">
            <p>{job.date}</p>
          </div>
          <div className="info-field">
            <h3>{job.charge}</h3>
            <h4 className="secondary-text-color">
              {job.institution.name} ({job.institution.description})
          </h4>
            <p><a href={`http://${job.institution.web}`} target="_blank"> {job.institution.web}</a></p>
            <Achivements achivements={job.achivements} />
          </div>
        </div >
      ))}
    </>
  )
}