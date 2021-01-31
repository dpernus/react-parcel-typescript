import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { ResumeeInfo } from '../Resumee/Resumee'
import { User } from '../User'

import { Loading } from './../Loading'
import { Error as ErrorView } from './../Error'

import './styles.scss'

export const Users: React.FunctionComponent = () => {
  const [users, setUsers] = useState<ResumeeInfo[] | []>()
  const [error, setError] = useState<Error | undefined>(undefined)

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => {
        if (!res.ok) {
          throw new Error('Server error')
        }
        return res.json()
      })
      .then(resumeesList => setUsers(resumeesList))
      .catch(error => {
        console.error(error)
        setError(error)
      });
  }, [])

  if (error) {
    return <ErrorView />
  }

  return users ? (
    <>
      <div className="users-list">
        {users.map((user, id) => (
          <User key={id} userInfo={user} />
        ))}
      </div>
      <div className="add-button">
        <Link to='user/new'>
          <Button type="primary" shape="round">Add Resumee</Button>
        </Link>
      </div>
  </>
  ) : (<Loading />)
}
