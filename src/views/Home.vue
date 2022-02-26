<template>
  <div class="home">
    <CharacterCreator msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CharacterCreator from '@/components/CharacterCreator.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    CharacterCreator
  }
})
</script>
