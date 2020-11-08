import React from 'react'
import { Link } from 'react-router-dom'
interface UserInfo {
  id: number
  name: string
  keyTerms: string[]
  avatar: string
}

export const User: React.FunctionComponent<{ userInfo: UserInfo }> = ({ userInfo }) => (
  <div>
    <Link to={`/user/${userInfo.id}`}>
      <h2>{userInfo.name}</h2>
      <h4>{userInfo.keyTerms}</h4>
      <img src={userInfo.avatar} size="200x200" />
    </Link>
  </div>
)
