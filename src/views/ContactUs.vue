<template>
  <div class="mf-background-container">
    <mf-nav-bar></mf-nav-bar>
  </div>
</template>

<script>
import MfNavBar from "@/components/MfNavBar";

export default {
  name: "home",
  components: {
    MfNavBar,
  },
};
</script>

<style lang="scss" scoped>
.mf-background-container {
  background: radial-gradient(#dfdfdf 8%, transparent 8%), transparent;
  background-position: 0 0, 25px 25px;
  background-size: 25px 25px;
  min-height: 100vh;
}
</style>