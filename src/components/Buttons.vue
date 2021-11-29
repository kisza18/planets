<template>
  <div
    class="btns w-full flex items-center justify-between px-7 border-b-2 border-opacity-20 md:grid grid-cols-1 md:border-none md:px-12"
  >
    <button
      id="overviewBtn"
      class="btn text-gray-300 tracking-widest active py-3 md:flex md:w-full md:px-6 md:border-2 md:border-opacity-20"
    >
      <span class="hidden md:flex pr-3">01</span>
      OVERVIEW
    </button>
    <button
      id="structureBtn"
      class="btn text-gray-300 tracking-widest py-3 md:flex md:w-full md:px-6 md:border-2 md:border-opacity-20"
    >
      <span class="hidden md:flex pr-3">02</span>
      STRUCTURE
    </button>
    <button
      id="surfaceBtn"
      class="btn text-gray-300 tracking-widest py-3 md:flex md:w-full md:px-6 md:border-2 md:border-opacity-20"
    >
      <span class="hidden md:flex pr-3">03</span>
      SURFACE
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    var app = this;
    app.$functions.activeBtn();
  },
};
</script>

<style scoped>
@media screen and (max-width: 700px) {
  button {
    border-bottom: 3px solid transparent;
  }
  .active {
    border-bottom: 3px solid #419db9;
  }
}
@media screen and (min-width: 800px) {
  .active {
    background-color: #419db9;
  }
}
</style>
