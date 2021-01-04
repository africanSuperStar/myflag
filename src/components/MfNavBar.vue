<template>
  <div>
    <b-navbar toggleable="lg" variant="light">
      <b-navbar-brand href="#">
        <img src="@/assets/myflag-logo.png" alt="myflag Logo" width="200" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Liquidation</b-nav-item>
          <b-nav-item href="#">Sequestration</b-nav-item>
          <b-nav-item href="#">Rehabilitation</b-nav-item>
          <b-nav-item href="#">FAQs</b-nav-item>
          <b-nav-item href="#">Contact Us</b-nav-item>
          <b-button class="ml-4" variant="warning">Apply Online</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "mf-nav-bar",
};
</script>

<style>
</style>