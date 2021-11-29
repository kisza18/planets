<template>
  <div class="w-full px-12 py-10 grid grid-cols-4">
    <div
      class="flex justify-between items-center border-2 border-opacity-20 py-3 px-5 my-2 col-span-4 md:col-span-1 md:flex-col md:items-start md:px-3"
    >
      <p class="text-gray-400 font-sans text-xs md:pb-2">ROTATION TIME</p>
      <h2 class="text-white text-xl md:text-2xl">{{ rotation }}</h2>
    </div>
    <div
      class="flex justify-between items-center border-2 border-opacity-20 py-3 px-5 my-2 col-span-4 md:col-span-1 md:flex-col md:items-start md:px-3"
    >
      <p class="text-gray-400 font-sans text-xs md:pb-2">REVOLUTION TIME</p>
      <h2 class="text-white text-xl md:text-2xl">{{ revolution }}</h2>
    </div>
    <div
      class="flex justify-between items-center border-2 border-opacity-20 py-3 px-5 my-2 col-span-4 md:col-span-1 md:flex-col md:items-start md:px-3"
    >
      <p class="text-gray-400 font-sans text-xs md:pb-2">RADIUS</p>
      <h2 class="text-white text-xl md:text-2xl">{{ radius }}</h2>
    </div>
    <div
      class="flex justify-between items-center border-2 border-opacity-20 py-3 px-5 my-2 col-span-4 md:col-span-1 md:flex-col md:items-start md:px-3"
    >
      <p class="text-gray-400 font-sans text-xs md:pb-2">AVERAGE TEMP.</p>
      <h2 class="text-white text-xl md:text-2xl">{{ temperature }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rotation", "revolution", "radius", "temperature"],
};
</script>
