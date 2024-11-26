<script setup lang="ts">
 import { useTheme,changeTheme } from '../../composables/useTheme.ts'
 import { navigationBar_animation } from '../animation/motion.ts'
</script>

<template>
  <section
      v-motion="navigationBar_animation"
      class="lg:p-2 p-1.5 flex flex-col w-full space-y-2 items-center justify-center backdrop-blur-md overflow-hidden"
      :class="useTheme() ? 'bg-innerDark/30'
      :'bg-indigo-500/15'"
  >
        <div
         class="flex items-center justify-between w-full lg:py-2 lg:px-8 px-1 py-1.5
         rounded-lg shadow-md backdrop-blur-lg"
         :class="useTheme() ? 'bg-Dark/65'
         : 'bg-white/80'"
        >
           <div
             class="flex items-center justify-center lg:space-x-1"
           >
             <h1 class="font-bold leading-tight lg:text-xl text-sm text-center">
               International Windoors & Glass Solution
             </h1>
           </div>

          <img class="hidden lg:flex size-8" src="/window.png" alt="glass window">

         <button
             @click="changeTheme()"
             class="flex items-center justify-center space-x-1 p-2 rounded-md border-2 transition-all ease-in-out duration-700"
             :class="useTheme() ? 'bg-Dark border-teal-900 text-teal-700 hover:text-yellow-500 hover:bg-yellow-500/10 hover:border-yellow-500'
             : 'bg-white hover:border-innerDark hover:bg-Dark/15'"
         >
             <svg
                 v-if="useTheme()"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="currentColor"
                 class="size-6 transition-all ease-out duration-700 hover:scale-125 hover:rotate-180"
             >
               <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
             </svg>

           <svg
               v-if="!useTheme()"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               fill="currentColor"
               class="size-6 transition-all ease-out duration-700 hover:scale-125 hover:rotate-45"
           >
             <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
           </svg>
         </button>

        </div>

  </section>
</template>
