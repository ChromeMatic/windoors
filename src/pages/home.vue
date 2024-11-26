<script setup lang="ts">
 import { page_animation,stagger_effect } from '../animation/motion'
 import { useTheme } from '../../composables/useTheme'
 import { useHead } from 'unhead'
 import {MotionGroupComponent} from "@vueuse/motion";

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

 type Images = {  src: string, name:string }
 let images: Images[] = [
   { src:'/IMG_20221030_154812_710.jpg', name:'IMG_20221030_154812_710.jpg' },
   { src:'/IMG_20220928_084853_187.jpg', name:'IMG_20220928_084853_187.jpg' },
   { src:'/IMG_20221215_091631_340.jpg', name:'IMG_20221215_091631_340.jpg' },
   { src:'/IMG_20230202_174942_074.jpg', name:"IMG_20230202_174942_074.jpg" },
   { src:'/IMG_20230202_175059_176.jpg', name:"IMG_20230202_175059_176.jpg" },
   { src:'/IMG_20220516_115950_053.jpg', name:"IMG_20220516_115950_053.jpg" },
   { src:'/IMG_20230327_111421_626.jpg', name:"IMG_20230327_111421_626.jpg" },
   { src:'/IMG_20220520_113039_687.jpg', name:"IMG_20220520_113039_687.jpg" },
   { src:'/IMG_20220812_081852_823.jpg', name:"IMG_20220812_081852_823.jpg" },
 ]
</script>

<template>
  <section
    v-motion="page_animation"
    class="w-full flex flex-col space-y-4 justify-center items-center px-4 py-2 overflow-hidden"
    :class="useTheme() ? 'bg-Dark'
    :'bg-Snow'"
  >
    <div class="flex lg:flex-row flex-col p-2 lg:space-x-2 space-x-0 lg:space-y-0 space-y-2 justify-center items-center">

      <video
        v-motion="stagger_effect(775,75,0)"
        autoplay muted loop
        class=" h-[50vh] object-cover w-full rounded-tl-3xl rounded-br-3xl rounded-md border-2"
        :class="useTheme() ? 'rounded-lg border-teal-950' : ''"
      >
        <source src="/VID_42911026_105959_288.mp4">
      </video>

      <div
          v-motion="stagger_effect(825,-75,0)"
          class="flex flex-col items-center justify-center space-y-6 px-8 py-2 lg:h-[75vh]"
      >
        <h2
            v-motion="stagger_effect(1075,0,10)"
            class="lg:text-6xl text-4xl text-center font-semibold"
        >
          International Windoors & glass solution
        </h2>

        <p
            v-motion="stagger_effect(1175,0,10)"
            class="lg:text-lg text-sm text-center leading-6 subpixel-antialiased"
        >
          International Windoors & Glass Solutions specializes in high-quality, custom windows
          and glass doors designed to enhance aesthetics and functionality. Serving residential,
          commercial, and industrial clients, they offer durable, energy-efficient, and innovative
          designs crafted with precision and sustainability in mind. Their expert team ensures exceptional
          service and seamless installations, combining beauty, performance, and lasting durability to
          bring your vision to life.
        </p>
      </div>

    </div>

    <div class="w-full flex flex-col justify-center items-center space-y-6">

      <div
          class="flex flex-col items-center justify-center space-y-4 lg:px-8 px-2 lg:py-4 py-2 rounded-md border-2 shadow-lg"
          :class="useTheme() ? 'bg-innerDark border-teal-950':'bg-OffWhite'"
      >
            <h1 class="text-3xl font-semibold leading-tight overline">
              What we do
            </h1>
            <p class="text-center leading-8">
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

      <div class="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

        <MotionGroupComponent
            preset="slideVisibleLeft" :duration="875"
        >
          <div
              v-for="img in images"
              :key="img.src"
              class="rounded-2xl border-2 flex flex-col space-y-2 h-72 overflow-hidden"
              :class="useTheme() ? 'bg-innerDark border-teal-950' : 'bg-OnWhite shadow-lg'"
          >
            <img class="overflow-hidden object-cover" :src="img.src" :alt="img.name" />
          </div>
        </MotionGroupComponent>



      </div>

    </div>


  </section>
</template>