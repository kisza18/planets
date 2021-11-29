<template>
  <div class="images flex items-center justify-center py-28 relative z-0">
    <img
      :src="require(`../images/${planet}`)"
      alt="planet"
      id="planetImage"
      class="w-44 md:w-60"
    />
    <img
      :src="require(`../images/${internal}`)"
      alt="internal"
      id="internalImage"
      class="w-44 hidden md:w-60"
    />
    <img
      :src="require(`../images/${geology}`)"
      alt="geology"
      id="geologyImage"
      class="absolute w-24 top-60 hidden md:w-36"
    />
  </div>
</template>

<script>
export default {
  props: ["planet", "internal", "geology"],
};
</script>
