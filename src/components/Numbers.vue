<template>
  <div
    class="w-full px-12 py-10 grid grid-cols-4 md:gap-4 animate__animated animate__fadeInUp"
    :key="$route"
  >
    <div
      class="flex justify-between items-center border-2 border-opacity-20 py-3 px-5 my-2 col-span-4 md:col-span-1 md:flex-col md:items-start md:px-3 lg:p-6 bg-black bg-opacity-40"
    >
      <p class="text-gray-400 font-sans text-xs md:pb-2 lg:text-sm">
        ROTATION TIME
      </p>
      <h2 class="text-white text-xl md:text-2xl lg:text-4xl">
        {{ rotation }}
      </h2>
    </div>
    <div
      class="flex justify-between items-center border-2 border-opacity-20 py-3 px-5 my-2 col-span-4 md:col-span-1 md:flex-col md:items-start md:px-3 lg:p-6 bg-black bg-opacity-40"
    >
      <p class="text-gray-400 font-sans text-xs md:pb-2 lg:text-sm">
        REVOLUTION TIME
      </p>
      <h2 class="text-white text-xl md:text-2xl lg:text-4xl">
        {{ revolution }}
      </h2>
    </div>
    <div
      class="flex justify-between items-center border-2 border-opacity-20 py-3 px-5 my-2 col-span-4 md:col-span-1 md:flex-col md:items-start md:px-3 lg:p-6 bg-black bg-opacity-40"
    >
      <p class="text-gray-400 font-sans text-xs md:pb-2 lg:text-sm">RADIUS</p>
      <h2 class="text-white text-xl md:text-2xl lg:text-4xl">{{ radius }}</h2>
    </div>
    <div
      class="flex justify-between items-center border-2 border-opacity-20 py-3 px-5 my-2 col-span-4 md:col-span-1 md:flex-col md:items-start md:px-3 lg:p-6 bg-black bg-opacity-40"
    >
      <p class="text-gray-400 font-sans text-xs md:pb-2 lg:text-sm">
        AVERAGE TEMP.
      </p>
      <h2 class="text-white text-xl md:text-2xl lg:text-4xl">
        {{ temperature }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rotation", "revolution", "radius", "temperature"],
};
</script>

<style scoped>
div {
  animation-duration: 2s;
}
</style>
