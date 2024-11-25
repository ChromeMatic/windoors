<script setup lang="ts">
  import navbar from './components/navbar.vue'
  import Footer from  './components/soialmedia.vue'
</script>

<template>
  <section class="flex flex-col w-full min-h-svh lg:overflow-hidden font-Nunito">
    <navbar/>
     <router-view/>
    <Footer/>
  </section>
</template>


