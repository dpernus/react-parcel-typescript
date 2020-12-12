import React from 'react'

function formatKeyTerms(keyTerms: string[]) {
  const keyTermsFormatted = keyTerms.reduce<JSX.Element[]>(
    (acc, item) => [...acc, <span style={{ margin: '0 10px' }}>|</span>, <span>{item}</span>],
    []
  )

  return <i className="secondary-text-color">{keyTermsFormatted.splice(1)}</i>
}

export const Header: React.FunctionComponent<{ name: string, keyTerms: string[] }> = ({ name, keyTerms }) => {
  return (
    <header id="head-content">
      <h1>{name}</h1>
      {formatKeyTerms(keyTerms)}
    </header>
  )
}
