import React from 'react'
import { Card, Avatar } from 'antd'

import { formatKeyTerms } from './Helpers/formatKeyTerms'

interface UserInfo {
  id: number
  name: string
  keyTerms: string[]
  avatar: string
}

export const User: React.FunctionComponent<{ userInfo: UserInfo }> = ({ userInfo }) => (
  <div className="site-card-border-less-wrapper">
    <Card title={userInfo.name} 
      bordered={false}
      extra={
        <a href={`/user/${userInfo.id}`}>
          More
        </a>
      } 
      style={{ width: 300 }} 
    >
      <h4>{formatKeyTerms(userInfo.keyTerms)}</h4>
      {userInfo.avatar 
        ? <img src={`img/${userInfo.avatar}`} />
        :  <Avatar 
              shape="square" 
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            >
              USER
            </ Avatar>}
    </Card>
  </div>
)
