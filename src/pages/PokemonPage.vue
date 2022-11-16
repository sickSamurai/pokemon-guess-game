<script lang="ts">
import { defineComponent } from 'vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'
import type { Pokemon } from '@/types/Pokemon'
import getPokemonsOptions from '@/helpers/getPokemonOptions'

export default defineComponent({
  name: 'PokemonPage',

  components: { PokemonOptions, PokemonPicture },

  data() {
    return {
      pokemons: new Array<Pokemon>(),
      pokemonsAreLoaded: false,
      isHidden: true,
      anOptionWasSelected: false,
      message: ''
    }
  },

  computed: {
    randomPokemon(): Pokemon {
      const randomIndex = Math.floor(Math.random() * 3)
      const randomPokemon = this.pokemons![randomIndex]
      return randomPokemon
    }
  },

  methods: {
    async loadPokemons() {
      this.pokemons = await getPokemonsOptions()
      this.pokemonsAreLoaded = true
    },

    checkAnswer(payload: number) {
      if (this.isHidden) {
        if (payload === this.randomPokemon.id) this.message = 'Correctisimo, ese es!'
        else this.message = `Imbécil, era ${this.randomPokemon.name}!`
        this.isHidden = false
        this.anOptionWasSelected = true
      }
    },

    startNewGame() {
      this.pokemonsAreLoaded = false
      this.loadPokemons()
      this.isHidden = true
      this.anOptionWasSelected = false
    }
  },

  mounted() {
    this.loadPokemons()
  }
})
</script>

<template>
  <div class="container">
    <template v-if="pokemonsAreLoaded">
      <h1>¿Cual es este Pokemon?</h1>
      <PokemonPicture :poke-id="randomPokemon.id" :is-hidden="isHidden" />
      <PokemonOptions :pokemons="pokemons" @select-option="checkAnswer" />
      <templete v-if="anOptionWasSelected">
        <h2>{{ message }}</h2>
        <button @click="startNewGame">Nuevo Juego</button>
      </templete>
    </template>
    <templete v-else>
      <h1>Espere por favor...</h1>
    </templete>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
