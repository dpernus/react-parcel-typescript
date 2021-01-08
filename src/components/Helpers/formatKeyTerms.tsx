import React from 'react'

export function formatKeyTerms(keyTerms: string[]) {
  const keyTermsFormatted = keyTerms.reduce<JSX.Element[]>(
    (acc, item) => [...acc, <span style={{ margin: '0 10px' }}>|</span>, <span>{item}</span>],
    []
  )

  return <i className="secondary-text-color">{keyTermsFormatted.splice(1)}</i>
}