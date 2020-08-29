import React from 'react'

import { createUseStyles } from 'react-jss'

export default function CardCharacter ({image, name}) {
  const { Card, Card__image, Card__data } = useStyles()
  
  return (
    <div className={Card}>
      <img className={Card__image} src={image} alt={`imagen - ${name}`}></img>
      <div className={Card__data}>
        {name}
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  Card: {
    backgroundColor: '#4b5d67',
    width: '100%',
  },
  Card__image: {
    width: '100%',
    display: 'block'
  },
  Card__data: {
    padding: '1em'
  }
})
