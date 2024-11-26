<script setup lang="ts">
 import { useTheme } from '../../composables/useTheme.ts'
 //
</script>

<template>
  <section
      class="p-2 w-full flex flex-col space-y-1 justify-center items-center"
      :class="useTheme() ? '':''"
  >
      <div
          class="w-full flex flex-col  justify-center items-center"
      >
        <a
            href="https://www.instagram.com/international_windowsanddoors/profilecard/"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-all ease-out duration-700 hover:scale-125"
        >
          <img class="size-16" src="/instagram.png" alt="Instagram" />
        </a>
        <h2 class="text-center">Instagram Page</h2>
      </div>
    <div
        class="w-full p-2 flex justify-center items-center rounded-xl"
        :class="useTheme() ? 'bg-Dark':'bg-green-50'"
    >
      <h2 class="text-center">
        © 2024 8 Rivas Roofing & Hardware. Built by <a class="transition-all ease-in-out duration-500 hover:text-indigo-500 underline" href="https://dev-main.tech/"  target="_blank" rel="noopener noreferrer">Armani Brown</a>
      </h2>
    </div>
  </section>
</template>
