import React from 'react'

import Image from 'assets/rick2.ico'
import { createUseStyles } from 'react-jss'
import { Link } from 'wouter'
import NavIcon from 'assets/icons/nav.svg'

export default function Header ({number = 1}) {
  const active = pathActual => (pathActual === document.location.pathname) ? `${styl.Nav__active}` : ''
  const styl = useStyles()
  const [menu, setMenu] = React.useState('')
  const viewNav = () => (menu === '') ? setMenu(`${styl.Nav__movil}`) : setMenu('')
  
  return (
    <header className={styl.Header} >
      <div className={styl.Header__content}>

        <img src={Image} className={styl.Header__image} alt="logo de la pagina"/>
        
        <nav className={`${styl.Nav} ${menu}`}>
          <ul className={styl.Nav__content}>
            <li>
              <Link className={`${styl.Nav__link} ${active('/')}`} to="/">Home</Link>
            </li>
            <li>
              <Link className={`${styl.Nav__link} ${active(`/characters/${number}`)}`} to="/characters/1">Character</Link>
            </li>
            <li>
              <Link className={`${styl.Nav__link} ${active('/locations')}`} to="/locations">Locations</Link>
            </li>
            <li>
              <Link className={`${styl.Nav__link} ${active('/episodes')}`} to="/episodes">Episodes</Link>
            </li>
          </ul>
        </nav>
      
        <button onClick={viewNav} className={`${styl.Header__nav}`}>
          <img src={NavIcon} alt=""/>
        </button>

      </div>
    </header>
  )
}

// 1d1d1b

const useStyles = createUseStyles({
  Header: {
    display: 'block',
    width: '100%',
    padding: '.8em 0',
    position: 'relative',
    borderTop: 'solid 5px #4f8a8b',
    backgroundColor: '#ffffff',
    boxShadow: '1px 1px 0px 0px rgba(0, 0, 0, .1)'
  },
  Header__content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
    maxWidth: 1124,
    margin: '0 auto 0',
    '@media screen and (max-width: 700px)': {
      position: 'relative'
    }
  },
  Header__image: {
    display: 'block',
    height: '42px'
  },
  Header__nav: {
    display: 'none',
    border: 'none',
    backgroundColor: '#fff',
    cursor: 'pointer',
    '@media screen and (max-width: 700px)': {
      display: 'block',
      width: '22px'
    }
  },
  Nav: {
    display: 'block',
    '@media screen and (max-width: 700px)': {
      position: 'absolute',
      top: 70,
      right: 0,
      border: 'solid 1px rgba(0, 0, 0, .2)',
      width: '80%',
      maxWidth: 280,
      zIndex: '1',
      backgroundColor: '#ffffff',
      padding: '.6em 1em',
      borderRadius: 4,
      display: 'none',
    }
  },
  Nav__movil: {
    display: 'block'
  },
  Nav__content: {
    display: 'flex',
    '@media screen and (max-width: 700px)': {
      display: 'block',
    }
  },
  Nav__link: {
    display: 'block',
    cursor: 'pointer',
    marginLeft: '1.5em',
    color: '#222831',
    fontFamily: 'SebNeue',
    fontSize: '18px',
    '@media screen and (max-width: 700px)': {
      marginLeft: 0,
      textAlign: 'center',
      padding: '.6em 0',
    }
  },
  Nav__active: {
    color: '#4f8a8b'
  }
})
