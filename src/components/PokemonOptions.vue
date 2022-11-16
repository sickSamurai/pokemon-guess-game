<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Pokemon } from '@/types/Pokemon'

export default defineComponent({
  name: 'PokemonOptions',

  props: {
    pokemons: { type: Object as PropType<Pokemon[]>, required: true }
  },

  emits: {
    selectOption(payload: number) {
      return payload
    }
  }
})
</script>

<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon of pokemons" :key="pokemon.id" @click="$emit('selectOption', pokemon.id)">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding: 0;
  list-style-type: none;
}

li {
  text-align: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  width: 200px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
