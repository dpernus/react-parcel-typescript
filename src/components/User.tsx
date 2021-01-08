import React from 'react'
import { Link } from 'react-router-dom'
import { formatKeyTerms } from './Helpers/formatKeyTerms'
interface UserInfo {
  id: number
  name: string
  keyTerms: string[]
  avatar: string
}

const defaultAvatar = 'https://gravatar.com/avatar/2b93eec77aeb5e2808f2c94edc97fd7e?s=300&d=robohash&r=x'

export const User: React.FunctionComponent<{ userInfo: UserInfo }> = ({ userInfo }) => (
  <div>
    <Link to={`/user/${userInfo.id}`}>
      <h2>{userInfo.name}</h2>
      <h4>{formatKeyTerms(userInfo.keyTerms)}</h4>
      <div>
        <img src={userInfo.avatar ? `img/${userInfo.avatar}` : defaultAvatar} />
      </div>
    </Link>
  </div>
)
