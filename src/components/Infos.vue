<template>
  <div class="px-16 md:text-left md:px-12">
    <h1 class="text-4xl text-white pb-5">{{ name }}</h1>
    <p id="contentText" class="text-gray-300 pb-10 font-sans font-thin md:pb-5">
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
</template>

<script>
export default {
  props: ["name", "content", "source"],
};
</script>
