<template>
  <div class="w-full px-12 py-10">
    <div
      class="flex justify-between items-center border-2 border-opacity-20 py-3 px-5 my-2"
    >
      <p class="text-gray-400 font-sans text-xs">ROTATION TIME</p>
      <h2 class="text-white text-xl">{{ rotation }}</h2>
    </div>
    <div
      class="flex justify-between items-center border-2 border-opacity-20 py-3 px-5 my-2"
    >
      <p class="text-gray-400 font-sans text-xs">REVOLUTION TIME</p>
      <h2 class="text-white text-xl">{{ revolution }}</h2>
    </div>
    <div
      class="flex justify-between items-center border-2 border-opacity-20 py-3 px-5 my-2"
    >
      <p class="text-gray-400 font-sans text-xs">RADIUS</p>
      <h2 class="text-white text-xl">{{ radius }}</h2>
    </div>
    <div
      class="flex justify-between items-center border-2 border-opacity-20 py-3 px-5 my-2"
    >
      <p class="text-gray-400 font-sans text-xs">AVERAGE TEMP.</p>
      <h2 class="text-white text-xl">{{ temperature }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rotation", "revolution", "radius", "temperature"],
};
</script>
