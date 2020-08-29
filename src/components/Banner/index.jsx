import React from 'react'

import { createUseStyles } from 'react-jss'

export default function Banner () {
  const { Banner, Banner__content, Banner__title } = useStyles()
  
  return (
    <div className={Banner}>
      <div className={Banner__content}>
        <h1 className={Banner__title}>Rick and Morty</h1>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  Banner: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '5em 0'
  },
  Banner__content: {
    width: '92%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 0'
  },
  Banner__title: {
    textAlign: 'center',
    fontFamily: 'Techna',
    color: '#222831',
    letterSpacing: '3px',
    fontSize: '74px'
  }
})
