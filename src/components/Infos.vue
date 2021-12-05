<template>
  <div
    :key="$route"
    class="px-16 md:text-left md:px-12 lg:pt-24 lg:mb-10 animate__animated animate__fadeInRight"
  >
    <h1 class="text-4xl text-white pb-5 lg:text-7xl">{{ name }}</h1>
    <div class="animate__animated animate__fadeIn" :key="content">
      <p
        id="contentText"
        class="text-gray-300 pb-10 font-sans font-thin md:pb-5 lg:text-lg"
      >
        {{ content }}
      </p>
      <span class="text-gray-400 font-sans font-thin"
        >Source :
        <a
          id="source"
          :href="source"
          target="_blank"
          class="font-semibold underline"
          >Wikipedia</a
        ><i class="fad fa-external-link-square ml-2"></i
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "content", "source"],
};
</script>

<style scoped>
div {
  animation-duration: 2s;
}
</style>
