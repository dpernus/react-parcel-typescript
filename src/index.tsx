import React from 'react'
import { render } from 'react-dom'
import { Users } from './components/Users/Users'
import './assets/index.scss'

const Application: React.FunctionComponent = () => <Users />

render(<Application />, document.getElementById('root'))
