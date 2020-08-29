import React from 'react'

import CardCharacter from 'components/CardCharacter'
import { createUseStyles } from 'react-jss'

export default function GridCharacter({data = []}) {
  const { Characters, Characters__content} = useStyles()

  console.log(data[0])

  return (
    <div className={Characters}>
      <div className={Characters__content}>
        {
          data.map(({gender, id, image, name, species, status}) => {
            return <CardCharacter 
              key={id} 
              gender={gender}
              id={id} 
              image={image} 
              name={name}
              species={species}
              status={status}
            />
          })
        }
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  Characters: {
    padding: '4em 0',
    width: '100%',
    backgroundColor: '#222831',
  },

  Characters__content: {
    width: '92%',
    maxWidth: 1124,
    margin: '0 auto 0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '2em',
    '@media screen and (max-width: 950px)': {
        gridTemplateColumns: '1fr 1fr 1fr'
    },
    '@media screen and (max-width: 700px)': {
      gridTemplateColumns: '1fr 1fr'
    },
    '@media screen and (max-width: 380px)': {
      gridTemplateColumns: '1fr'
    }
  },
  
  
})
