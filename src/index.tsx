import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Users } from './components/Users/Users'
import { Resumee } from './components/Resumee/Resumee'
import { BasicInfoForm } from './components/Users/BasicInfoForm'
import { Error } from './components/Error'

import './assets/index.scss'

const Application: React.FunctionComponent = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Users} exact />
        <Route path="/user/new" component={BasicInfoForm}/>
        <Route path="/user/:id" component={Resumee} />
        <Route component={Error} />
      </Switch>
    </main>
  )
}

render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>,
  document.getElementById('root'),
)
