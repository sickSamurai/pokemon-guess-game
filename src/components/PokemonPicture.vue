<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PokemonPicture',
  props: {
    pokeId: { type: Number, required: true },
    isHidden: { type: Boolean, required: true }
  },

  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokeId}.svg`
    }
  }
})
</script>

<template>
  <div class="pokemon-container">
    <img
      :class="{ 'hidden-pokemon': isHidden, 'fade-in': !isHidden }"
      :src="imgSrc"
      alt="Pokemon Picture" />
  </div>
</template>

<style scoped>
.pokemon-container {
  display: flex;
  justify-content: center;
  height: 200px;
}

.hidden-pokemon {
  filter: brightness(0);
}

img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
