<script setup lang="ts">
 import { page_animation } from '../animation/motion'
 import { useTheme } from '../../composables/useTheme'
 import { useHead } from 'unhead'

 useHead({
   title: 'International Windoors & glass solution',
   meta:[
     {
       name: 'description',
       content: "Looking for top-quality windows and glass door solutions? At International Windoors & Glass Solutions, we offer beautifully crafted windows and glass doors designed to elevate the aesthetics and functionality of any space. Our custom solutions are perfect for homes, offices, and commercial properties, combining innovative design with exceptional craftsmanship. From energy-efficient windows to modern glass door installations, our products are built to last and enhance your living or working environment. We specialize in bespoke designs tailored to your specific needs, ensuring that every project is completed to the highest standards. Whether you need sleek sliding doors, stunning glass facades, or durable window installations, our expert team provides efficient service and lasting results. Transform your space with premium windows and glass doors from International Windoors & Glass Solutions — your trusted partner in design, quality, and performance.\n" +
           "\n" +
           "Key Features:\n" +
           "\n" +
           "Custom Windows & Glass Door Solutions\n" +
           "Energy-Efficient & Sustainable Products\n" +
           "Expert Craftsmanship & Precision Design\n" +
           "Residential, Commercial & Industrial Installations\n" +
           "Seamless Service & Reliable Performance\n" +
           "Let us bring your vision to life with high-quality window and glass door solutions that blend style, functionality, and durability.",
     }
   ]
 })
</script>

<template>
  <section
    v-motion="page_animation"
    class="w-full h-svh flex justify-center items-center px-4 py-2"
    :class="useTheme() ? ''
    :''"
  >
    <div
        class="flex flex-col items-center justify-center space-y-6 px-8 py-2"
    >
      <h2 class="text-6xl text-center font-semibold">
        International Windoors & glass solution
      </h2>

      <p class="text-lg text-center leading-6 subpixel-antialiased">
        At International Windoors & Glass Solutions, we specialize in creating stunning, high-quality
        windows and glass door solutions that enhance both the aesthetics and functionality of your spaces.
        With a commitment to precision craftsmanship and innovative design, our products are tailored to
        meet the unique needs of residential, commercial, and industrial clients. Whether you're looking
        for sleek, modern glass doors, energy-efficient windows, or custom glass designs, we provide
        durable, elegant, and sustainable solutions that transform your environment. Our expert team is
        dedicated to delivering exceptional service and the highest standards of quality, ensuring that
        every installation is a seamless blend of beauty, performance, and long-lasting durability.
        Let us help you bring your vision to life with our custom glass and window solutions.
      </p>
    </div>
  </section>
</template>