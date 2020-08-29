import React from 'react'

import { getCharactersPagination } from 'api/index'
import Header from 'components/Header'
import GridCharacter from 'components/GridCharacter'

export default function Character ({ params }) {
  const [characters, setCharacters] = React.useState([])
  React.useEffect(function() {
    getCharactersPagination({page: parseInt(params.number)}).then(({results}) => setCharacters(results))
  } , [])
  
  // id, gender, image, name, status, species
  console.log(characters)
  
  return (
    <div className="main">
      <Header number={params.number}/>
      
      <h1>CHARACTERS</h1>
     
      <GridCharacter data={characters} />


    </div>
  )
}
