import React from 'react'
import { User } from '../User'
import './styles.scss'

const users = [
  {
    id: 45,
    name: 'Diana Lourdes Pernus Alonso',
    keyTerms: ['"desarrollo de software", "fullstack"'],
    avatar: 'https://robohash.org/2b93eec77aeb5e2808f2c94edc97fd7e?set=set4&bgset=&size=300x300',
  },
  {
    id: 1,
    name: 'Ernesto Fuentes Gomez',
    keyTerms: ['"desarrollo de software", "fullstack"'],
    avatar: 'https://gravatar.com/avatar/2b93eec77aeb5e2808f2c94edc97fd7e?s=300&d=robohash&r=x',
  },
]

export const Users: React.FunctionComponent = () => {
  return (
    <div className="users-list">
      {users.map((user, id) => (
        <User key={id} userInfo={user} />
      ))}
    </div>
  )
}
