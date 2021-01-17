<template>
  <div>
    <b-navbar toggleable="lg" variant="light">
      <b-navbar-brand to="/">
        <img src="@/assets/img/myflag-logo.png" alt="myflag Logo" width="200" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            active-class="active"
            class="nav-link"
            v-for="routes in links"
            :key="routes.id"
            :to="routes.path"
          >
            {{ routes.name }}
          </b-nav-item>
          <b-button to="/contact-us" class="btn bg-primary rounded-pill"
            >Apply Online</b-button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "mf-nav-bar",
  data() {
    return {
      links: [
        {
          id: 0,
          name: "Liquidation",
          path: "/liquidation",
        },
        {
          id: 1,
          name: "Sequestration",
          path: "/sequestration",
        },
        {
          id: 2,
          name: "Rehabilitation",
          path: "/rehabilitation",
        },
        {
          id: 3,
          name: "FAQs",
          path: "/faqs",
        },

        {
          id: 4,
          name: "Contact Us",
          path: "/contact-us",
        },
      ],
    };
  },
};
</script>

<style>
.btn {
  padding: 0.4rem 0.5rem;
  align-self: start;
  margin: auto;
}

.btn-secondary {
  color: #000;
}
</style>