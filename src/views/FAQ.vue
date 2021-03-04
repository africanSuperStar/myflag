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
            <h1 class="mb-4">FAQ's</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-4 pb-8">
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1 btn-outline-primary"
            role="tab"
          >
            <b-button block v-b-toggle.accordion-1 variant="white"
              >What is the Fee?
            </b-button>
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                >Contact us to explain the fee structure and how it works.
              </b-card-text>
              <b-button to="/contact-us" class="btn bg-primary rounded-pill"
                >Contact Us</b-button
              >
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1 btn-outline-primary"
            role="tab"
          >
            <b-button block v-b-toggle.accordion-2 variant="white"
              >What is excluded from sequestration?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                >The debtor’s basic necessities, pension and compensation for
                personal injuries are some of these exclusions.</b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1 btn-outline-primary"
            role="tab"
          >
            <b-button block v-b-toggle.accordion-3 variant="white"
              >What happens to my property during sequestration?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                >Contact us so we can discuss it with you.</b-card-text
              >
              <b-button to="/contact-us" class="btn bg-primary rounded-pill"
                >Contact Us</b-button
              >
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1 btn-outline-primary"
            role="tab"
          >
            <b-button block v-b-toggle.accordion-4 variant="white"
              >Do I still need to pay my creditors?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                >No payments or creditors with immediate effect.
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1 btn-outline-primary"
            role="tab"
          >
            <b-button block v-b-toggle.accordion-5 variant="white"
              >What happens with my salary?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>Your salary stays untouched. </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1 btn-outline-primary"
            role="tab"
          >
            <b-button block v-b-toggle.accordion-6 variant="white"
              >What happens with my vehicle?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                >Your vehicle forms part of your insolvent estate, but you can
                however buy it back.
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1 btn-outline-primary"
            role="tab"
          >
            <b-button block v-b-toggle.accordion-7 variant="white"
              >What if Creditors are still harassing me after
              sequestration?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                >They need to be referred to your trustee.
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1 btn-outline-primary"
            role="tab"
          >
            <b-button block v-b-toggle.accordion-8 variant="white"
              >Can I apply for credit?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>Yes, after rehabilitation. </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1 btn-outline-primary"
            role="tab"
          >
            <b-button block v-b-toggle.accordion-9 variant="white"
              >How long does sequestration take place?</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                >Depending on when a court date can be obtained.</b-card-text
              >
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1 btn-outline-primary"
            role="tab"
          >
            <b-button block v-b-toggle.accordion-10 variant="white"
              >How long does liquidation take place?</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-10"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                >Depending which process needs to be taken. Can take up to 10
                days or alternatively, couple of months
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import MfNavBar from "@/components/MfNavBar";

export default {
  name: "about",
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

.btn:focus {
  outline: none;
  box-shadow: none;
}

.mf-background-container {
  background: radial-gradient(#dfdfdf 8%, transparent 8%), transparent;
  background-position: 0 0, 25px 25px;
  background-size: 25px 25px;
  min-height: 100vh;
}
</style>