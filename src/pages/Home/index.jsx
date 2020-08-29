import React from 'react'

import GridCharacter from 'components/GridCharacter'
import Header from 'components/Header'
import Banner from 'components/Banner'

import { getCharacterHome } from 'api/index'

export default function Home () {
  const [characters, setCharacters] = React.useState([])

  React.useEffect(() => {
    getCharacterHome({count: window.screen.width}).then(data => setCharacters(data))
  }, [])

  return (
      <div className="home">
        <Header/>
        <Banner/>
        <GridCharacter data={characters} />
      </div>
  )
}
