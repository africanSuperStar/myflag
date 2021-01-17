<template>
  <div class="mf-background-container">
    <mf-nav-bar></mf-nav-bar>
    <div class="container-fluid h-75 contact">
      <div class="row px-2 justify-content-end">
        <div class="col-lg-2">Address: Southdowns Ridge</div>
        <div class="col-lg-3">Office hours: Mon – Friday; 08h30 – 16h00</div>
        <div class="col-lg-2">Contact Number: 0835028866</div>
      </div>
    </div>
    <div class="hero-caption py-5">
      <div class="container h-75">
        <div class="row align-items-center h-100">
          <div class="col-lg-12">
            <h1 class="mb-4">What is Liquidation?</h1>
            <p class="mb-4">
              <b>Liquidation</b> is a legal process by which a legal entity is
              closed down, because the business has become insolvent.
            </p>
            <b-button to="/contact-us" class="btn bg-primary rounded-pill"
              >Apply Online</b-button
            >
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="container">
        <b-jumbotron>
          <template #lead> There are two main types of liquidation. </template>

          <hr class="my-4" />

          <b-badge variant="primary" class="mr-4 p-2"
            >Voluntary Liquidation</b-badge
          >
          <b-badge variant="primary" class="p-2"
            >Compulsary Liquidation</b-badge
          >
        </b-jumbotron>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col my-4">
          <h3>When to apply for liquidation?</h3>
        </div>
      </div>
      <div class="row">
        <div class="col my-4 p-4 bg-white shadow">
          <b-list-group>
            <b-list-group-item
              >A company or close corporation is insolvent when the business
              liabilities exceed its assets. If the business conduct business
              while factually insolvent, the director(s) will be held personally
              responsible for any debt incurred.</b-list-group-item
            >
            <b-list-group-item
              >Whether the business is able to pay its debts when they are
              due.</b-list-group-item
            >
            <b-list-group-item>No trading is taking place</b-list-group-item>
          </b-list-group>

          <hr class="my-6" />

          <h4 class="mb-4">Summary</h4>
          <p>
            The business is seen as a separate legal entity in our law; thus
            shareholders, directors, or members cannot be held liable for the
            business debt unless the shareholder, director, or member put up
            personal security or suretyship. The process will be conducted
            through a High Court application. The process of each business is
            unique and different.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MfNavBar from "@/components/MfNavBar";

export default {
  name: "liquidation",
  components: {
    MfNavBar,
  },
};
</script>

<style lang="scss" scoped>
a:visited {
  color: #3a3542;
}

.contact {
  color: #000;
  background-color: #c7c7c7;
}

.mf-background-container {
  background: radial-gradient(#dfdfdf 8%, transparent 8%), transparent;
  background-position: 0 0, 25px 25px;
  background-size: 25px 25px;
  min-height: 100vh;
}
</style>
