<template>
  <div class="DashView">
    <cc-nav />
    <h1>Dashboard Layout</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import CCNav from "../Nav/ccnav";

export default {
  name: "DashLayout",
  components: {
    "cc-nav": CCNav,
  },
};
</script>

<style lang="scss" scoped>
.DashView {
  position: relative;
}
</style>
