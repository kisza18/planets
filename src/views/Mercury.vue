<template>
  <div>
    <Buttons />
    <Images />
    <Infos />
    <Numbers />
  </div>
</template>

<script>
import Buttons from "../components/Buttons.vue";
import Images from "../components/Images.vue";
import Infos from "../components/Infos.vue";
import Numbers from "../components/Numbers.vue";

export default {
  components: {
    Buttons,
    Images,
    Infos,
    Numbers,
  },
};
</script>
