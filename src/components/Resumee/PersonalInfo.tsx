import React from 'react'

export interface PersonalData {
  name: string
  age: number
  email: string
  address?: string
  phone?: number
  social?: string
}

export const PersonalInfo: React.FunctionComponent<{ personalData: PersonalData }> = ({ personalData }) => {
  const { age, email, phone, address, social } = personalData
  return (
    <div className="basic-info">
      <div className="picture"></div>
      <div id="age" className="item"><i className="fa fa-user"></i><span>{age}</span></div>
      {address && <div id="address" className="item"><i className="fa fa-map-marker"></i><span></span></div>}
      {phone && <div id="phone" className="item"><i className="fa fa-phone"></i><span></span></div>}
      <div id="email" className="item"><i className="fa fa-envelope"></i><span>{email}</span></div>
      {social && <div id="linkedin" className="item"><i className="fa fa-linkedin"></i><span></span></div>}
    </div>
  )
}