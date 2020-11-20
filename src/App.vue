<template>
  <Index></Index>
</template>

<script>
import { reactive, computed } from "vue";
import Index from './pages/index.vue';
export default {
  name: "App",
  components: {
    Index,
  },
  setup() {
    const state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
    });
    return {
      state,
    };
  },
};
</script>

<style lang="less">
#app {
  color: #2c3e50;
}
</style>
