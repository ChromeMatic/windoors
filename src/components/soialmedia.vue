<script setup lang="ts">
 import { useTheme } from '../../composables/useTheme.ts'
</script>

<template>
  <section
      class=""
      :class="useTheme() ? '':''"
  >

  </section>
</template>
