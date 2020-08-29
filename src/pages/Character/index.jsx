import React from 'react'

import { getCharactersPagination } from 'api/index'
import Card from 'components/CardCharacter'
import Header from 'components/Header'

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

      <h1>Characters</h1>

      <hr/><br/>

      <Card></Card>

      <hr/><br/>

      {
        characters.map(({id, gender, image, name, status, species}) => {
          return (
            <div key={id} className="card">
              <img src={image} alt=""/>
              <div className="data">
                <p>{ name } - { status }</p>
                <p><strong>gender - </strong>{ gender }</p>
                <p><strong>species - </strong>{ species }</p>
              </div>
            </div>
          )
        })
      }



    </div>
  )
}
