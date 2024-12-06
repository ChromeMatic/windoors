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
       content: "Looking for top-quality windows and glass door solutions? At International Windoors & Glass Solutions, we offer beautifully crafted windows and glass doors designed to elevate the aesthetics and functionality of any space. Our custom solutions are perfect for homes, offices, and commercial properties, combining innovative design with exceptional craftsmanship. From energy-efficient windows to modern glass door installations, our products are built to last and enhance your living or working environment. We specialize in bespoke designs tailored to your specific needs, ensuring that every project is completed to the highest standards. Whether you need sleek sliding doors, stunning glass facades, or durable window installations, our expert team provides efficient service and lasting results. Transform your space with premium windows and glass doors from International Windoors & Glass Solutions — your trusted partner in design, quality, and performance." +
           +"Key Features: "+
           " Custom Windows & Glass Door Solutions," +
           " Energy-Efficient & Sustainable Products," +
           " Expert Craftsmanship & Precision Design," +
           " Residential, Commercial & Industrial Installations," +
           " Seamless Service & Reliable Performance," +
           " Let us bring your vision to life with high-quality window and glass door solutions that blend style, " +
           " functionality, and durability.",
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

 let ContactInfo ={
   phone_number1: '(876) 470-2676',
   phone_number2: '(876) 481-3881',
   email_address1: 'devonbarrett456@gmail.com',
   email_address2: 'thomasdwane16@gmail.com',
 }
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

    <div
      class="flex lg:flex-row flex-col w-full lg:space-x-4 space-x-0 lg:space-y-0 space-y-4 lg:h-[30rem]"
    >
      <div
          class="lg:w-[38rem] h-full p-2 flex justify-center items-center"
      >
        <h4 class="text-center lg:text-2xl font-semibold leading-tight">
          Let us bring your vision to life with high-quality window and glass door solutions that blend style, functionality, and durability.
        </h4>
      </div>

      <div
          class="w-full p-2 grid lg:grid-cols-3 gap-2 rounded-2xl border-2 shadow-2xl backdrop-blur-lg"
          :class="useTheme() ? 'shadow-lg bg-innerDark shadow-teal-950 border-teal-950'
          : 'bg-Snow shadow-teal-400 border-t-0 border-l-0 shadow-2xl'"
      >
        <img
            src="/IMG_20230327_111655_271.jpg"
            class="rounded-2xl lg:h-full h-64 lg:w-80 w-full object-cover col-span-2 lg:col-span-1"
            alt="IMG_20230327_111655_271.jpg"
        >
        <img
            src="/IMG_20230506_184536_794.jpg"
            class="rounded-2xl lg:h-full h-64 lg:w-80 w-full object-cover col-span-1"
            alt="IMG_20230506_184536_794.jpg"
        >
        <img
            src="/IMG_20230327_111655_271.jpg"
            class="rounded-2xl lg:h-full h-64 lg:w-80 w-full object-cover col-span-1"
            alt="IMG_20230327_111655_271.jpg"
        >
      </div>

    </div>

    <div class="w-full flex flex-col justify-center items-center space-y-6 py-8">

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

    <div
        class="flex flex-col justify-center items-center w-full space-y-6 lg:p-6 p-4 rounded-2xl shadow-lg border-2"
        :class="useTheme() ? 'bg-innerDark border-teal-950 shadow-lg shadow-teal-900':' bg-Snow shadow-teal-300 border-teal-100'"
    >
          <h2 class="text-3xl overline font-semibold">
            Contact Information
          </h2>

          <div
              class="flex space-x-2 justify-center items-center w-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
              <path fill-rule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clip-rule="evenodd" />
            </svg>
            <h2>Telephone Number:</h2>
            <h2 class="font-bold transition-all ease-in-out duration-700 hover:text-indigo-500">
              {{ ContactInfo.phone_number1 }} | {{ ContactInfo.phone_number2 }}
            </h2>
          </div>

      <div
          class="flex space-x-2 justify-center items-center w-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
        <h2> Email Address:
         <a
             class="font-bold transition-all ease-in-out duration-700 hover:text-indigo-500"
             :href="ContactInfo.email_address1"
             target="_blank"
             rel="noopener noreferrer"
         >
           {{ ContactInfo.email_address1 }}
         </a>

         |

         <a
             class="font-bold transition-all ease-in-out duration-700 hover:text-indigo-500"
             :href="ContactInfo.email_address2"
             target="_blank"
             rel="noopener noreferrer"
         >
           {{ ContactInfo.email_address2 }}
         </a>

       </h2>
      </div>
    </div>


  </section>
</template>