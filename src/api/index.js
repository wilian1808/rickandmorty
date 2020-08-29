import Axios from 'axios'

const API_URL = 'https://rickandmortyapi.com/api'

// paginacion obtenemos 20 personajes para cada pagina
export async function getCharactersPagination({ page = 0 }) {
  const url = (page > 1) ? `${API_URL}/character/?page=${page}` : `${API_URL}/character`
  const { data } = await Axios(url)
  return data
}

// obtenemos un solo personaje por el id
export async function getCharacterId({ id = 0 }) {
  const response = await Axios(`${API_URL}/character/${id}`)
  console.log(response)
  return response
}

// buscar personajes por diferentes valores como id, stado, nombre, etc
// name, status, species, gender
export async function getCharactersFilter({ key, value }) {
  const response = await Axios(`${API_URL}/character/?${key}=${value}`)
  console.log(response)
  return response
}

// obetenemos los 4 personajes para el home
export async function getCharacterHome({ count = 0 }) {
  const numbers = []
  let counterCharacter = 4

  if (parseInt(count) < 975  && parseInt(count) > 690) {
    counterCharacter = 3
  } else if (parseInt(count) < 690) {
    counterCharacter = 2
  }

  for (let i = 0; i < counterCharacter; i++) {
    let randomNumber = Math.floor(Math.random() * 671)
    if (randomNumber <= 0) {
      randomNumber = 1
    } else if (randomNumber >= 671) {
      randomNumber = randomNumber - 1
    }

    numbers[i] = randomNumber
  }

  const { data } = await Axios(`${API_URL}/character/${numbers.join()}`)
  return data
}
