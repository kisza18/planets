<template>
  <div
    class="btns w-full flex items-center justify-between px-7 border-b-2 border-opacity-20"
  >
    <button class="btn text-gray-300 tracking-widest active py-3">
      OVERVIEW
    </button>
    <button class="btn text-gray-300 tracking-widest py-3">STRUCTURE</button>
    <button class="btn text-gray-300 tracking-widest py-3">SURFACE</button>
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
.active {
  border-bottom: 3px solid #419db9;
}
</style>
