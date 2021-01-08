import React from 'react'
import { formatKeyTerms } from '../Helpers/formatKeyTerms'

export const Header: React.FunctionComponent<{ name: string, keyTerms: string[] }> = ({ name, keyTerms }) => {
  return (
    <header id="head-content">
      <h1>{name}</h1>
      {formatKeyTerms(keyTerms)}
    </header>
  )
}
