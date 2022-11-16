import axios from 'axios'

import type { AxiosResponse } from 'axios'
import type { Pokemon } from '@/types/Pokemon'

const getRandomPokeNumbers = () => {
  const pokeNumbers = Array<number>()
  for (let i = 0; i < 4; i++) pokeNumbers.push(1 + Math.floor(Math.random() * 648))
  return pokeNumbers
}

const getPokemonsOptions = async (): Promise<Pokemon[]> => {
  const pokePromises: Array<Promise<AxiosResponse<Pokemon>>> = []

  for (const pokeNumber of getRandomPokeNumbers()) {
    const pokePromise = axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
    pokePromises.push(pokePromise)
  }

  const pokemons = (await Promise.all(pokePromises)).map(response => response.data)
  return pokemons.map<Pokemon>(pokemon => ({ id: pokemon.id, name: pokemon.name }))
}

export default getPokemonsOptions
