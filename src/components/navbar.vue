<script setup lang="ts">
import { useTheme } from '../../composables/useTheme.ts'
</script>

<template>
  <section
      class="p-4 flex items-center justify-center"
      :class="useTheme() ? ''
      :''"
  >

  </section>
</template>
