<template>
  <div
    :key="content"
    class="images flex items-center justify-center py-28 relative z-0 animate__animated animate__rotateInUpLeft"
  >
    <img
      :src="require(`../images/${planet}`)"
      alt="planet"
      id="planetImage"
      class="w-44 md:w-60 lg:w-80"
    />
  </div>
</template>

<script>
export default {
  props: ["planet", "content"],
};
</script>

<style scoped>
div {
  animation-duration: 2s;
}
</style>
