import React from 'react'

function formatKeyTerms(keyTerms: string[]): string {
  const keyTermsFormatted = keyTerms.reduce((keyTerm1, keyTerm2) => keyTerm1 + '  |  ' + keyTerm2)
  return keyTermsFormatted
}

export const Header: React.FunctionComponent<{ name: string, keyTerms: string[] }> = ({ name, keyTerms }) => {
  return (
    <header id="head-content">
      <h1>{name}</h1>
      <i className="secondary-text-color">{formatKeyTerms(keyTerms)}</i>
    </header>
  )
}
