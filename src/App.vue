<script setup lang="ts">
  import navbar from './components/navbar.vue'
  import Footer from  './components/soialmedia.vue'
  import {useTheme} from '../composables/useTheme.ts'
</script>

<template>
  <section
    class="flex flex-col flex-grow w-full min-h-svh font-Nunito scroll-smooth transition-all duration-700 ease-in-out"
    :class="useTheme() ? 'bg-innerDark text-white'
    :''"
  >

    <div class="sticky top-0 z-50">
      <navbar/>
    </div>

     <div class="h-full overflow-hidden">
       <router-view/>
     </div>

    <Footer/>

  </section>
</template>


