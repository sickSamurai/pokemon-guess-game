<script lang="ts">
import { defineComponent } from 'vue'
import PokemonPage from '@/pages/PokemonPage.vue'

export default defineComponent({
  name: 'App',
  components: { PokemonPage }
})
</script>

<template>
  <PokemonPage />
</template>
