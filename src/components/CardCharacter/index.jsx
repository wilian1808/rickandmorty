import React from 'react'

import { createUseStyles } from 'react-jss'
import { Link } from 'wouter'

export default function CardCharacter ({gender, id, image, name, species, status}) {
  const { Card, Card__image, Card__data, Card__name, Card__text, Card__link } = useStyles()
  
  return (
    <div className={Card} id={id}>
      <img className={Card__image} src={image} alt={`imagen - ${name}`}></img>
      <div className={Card__data}>

        <Link to={`/character/${name.toLowerCase().split(' ').join('-')}`} className={Card__link}>
          { name }
        </Link>

      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  Card: {
    backgroundColor: '#4b5d67',
    width: '100%',
    padding: '.5em',
    backgroundColor: '#ffffff',
    borderRadius: 3
  },
  Card__image: {
    width: '100%',
    display: 'block',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3
  },
  Card__data: {
    padding: '1em 0 0 0',
  },
  Card__name: {
    fontFamily: 'Techna',
    color: '#6e5773',
    fontSize: 16,
    letterSpacing: .3,
  },
  Card__text: {
    fontFamily: 'SebNeue',
    color: '#222831',
    fontSize: 16
  },
  Card__link: {
    display: 'block',
    cursor: 'pointer',
    color: '#222831',
    fontFamily: 'Techna',
    textAlign: 'center',
    fontSize: 19,
    letterSpacing: .2,
  }
})
