import React from 'react'

interface UserInfo {
  name: string
  keyTerms: string[]
  avatar: string
}

export const User: React.FunctionComponent<{ userInfo: UserInfo }> = ({ userInfo }) => (
  <div>
    <h2>{userInfo.name}</h2>
    <h4>{userInfo.keyTerms}</h4>
    <img src={userInfo.avatar} />
  </div>
)
