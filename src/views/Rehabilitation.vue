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
            <h1 class="mb-4">What is Rehabilitation?</h1>
            <p class="mb-4">
              <b>Rehabilitation</b> is the legal process by which an Insolvent
              (a sequestrated individual) is relieved of the legal implications
              of being an Insolvent and restored to the legal status of a credit
              worthy consumer (a “solvent”).
            </p>
            <b-button to="/apply-online" class="btn bg-primary rounded-pill"
              >Apply Online</b-button
            >
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="container">
        <b-jumbotron>
          <template #lead
            >When can a person apply for rehabilitation once you have become
            insolvent?</template
          >
          <hr class="my-2" />
          <p>
            There are
            <span style="color: #ec008b">seven</span> instances hereunder an
            application can be made to the High Court for your rehabilitation.
          </p>
          <hr class="my-2" />
          <div class="iconic-item">
            <div
              class="iconic-sm iconic-text bg-warning fg-white rounded-circle"
            >
              <span class="mai-cube"></span>
            </div>
            <div class="iconic-content">
              <p>At Any Time</p>
            </div>
          </div>
          <div class="my-2">
            <b>Section 124(1):</b>

            An offer of the composition of at least 50 cents in the rand to
            concurrent creditors is made and accepted by three-quarters of
            creditors in value and number.
          </div>
          <div class="my-4">
            <b>Section 124(5)</b>

            After full payment of all proved claims. Any time after confirmation
            of estate account.
          </div>
          <div class="iconic-item">
            <div
              class="iconic-sm iconic-text bg-warning fg-white rounded-circle"
            >
              <span class="mai-cube"></span>
            </div>
            <div class="iconic-content">
              <p>Six Months</p>
            </div>
          </div>
          <div class="my-2">
            If no claims have been proven in against the insolvent estate and
            not previously insolvent and no convictions of certain offenses.
          </div>
          <div class="iconic-item">
            <div
              class="iconic-sm iconic-text bg-warning fg-white rounded-circle"
            >
              <span class="mai-cube"></span>
            </div>
            <div class="iconic-content">
              <p>Four Years</p>
            </div>
          </div>
          <div class="my-2">
            Four years from date of sequestration and one year after
            confirmation of the first liquidation and distribution account.
          </div>
          <div class="iconic-item">
            <div
              class="iconic-sm iconic-text bg-warning fg-white rounded-circle"
            >
              <span class="mai-cube"></span>
            </div>
            <div class="iconic-content">
              <p>Previously Sequestrated</p>
            </div>
          </div>
          <div class="my-2">
            If previously sequestrated, four years from the date of
            sequestration and three years after the confirmation of the first
            liquidation and distribution account.
          </div>
          <div class="iconic-item">
            <div
              class="iconic-sm iconic-text bg-warning fg-white rounded-circle"
            >
              <span class="mai-cube"></span>
            </div>
            <div class="iconic-content">
              <p>Five Years</p>
            </div>
          </div>
          <div class="my-2">
            If previously sequestrated, four years from the date of
            sequestration and three years after the confirmation of the first
            liquidation and distribution account.
          </div>
          <div class="iconic-item">
            <div
              class="iconic-sm iconic-text bg-warning fg-white rounded-circle"
            >
              <span class="mai-cube"></span>
            </div>
            <div class="iconic-content">
              <p>Previously Sequestrated.</p>
            </div>
          </div>
          <div class="my-2">
            If previously sequestrated, four years from the date of
            sequestration and three years after the confirmation of the first
            liquidation and distribution account.
          </div>
        </b-jumbotron>
      </div>
    </div>

    <div class="container pt-4 pb-8">
      <div class="row">
        <div class="col my-4">
          <h3>The Pros of Sequestration</h3>
        </div>
      </div>
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1 btn-outline-primary"
            role="tab"
          >
            <b-button block v-b-toggle.accordion-1 variant="white"
              >Your High Court Application</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text
                >There is no need to appear in High Court. An advocate appears
                in High Court on your behalf. This is a swift and quick
                application.
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
            <b-button block v-b-toggle.accordion-2 variant="white"
              >Your Debt</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                >* You get rid of all your debt, including arrear
                taxes.</b-card-text
              >
              <b-card-text
                >* All debt prior to or on date of sequestration falls
                away.</b-card-text
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
              >Your Estate</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                >Your policies, annuities, pension and personal injury claims
                etc. are protected and excluded from your insolvent
                estate.</b-card-text
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
              >Your Garnishee Orders</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                >Once sequestration is granted all garnishee orders against your
                salary are removed.
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
              >Your Salary</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                >Your creditors are legally not allowed to attach your income or
                salary a month.
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
            <b-button block v-b-toggle.accordion-6 variant="white"
              >Your Future</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text
                >After 6 months or 4 years (depending on circumstances) you can
                apply for rehabilitation and your credit status will be
                reinstated.
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <div class="container pt-4 pb-8">
        <div class="row">
          <div class="col my-4">
            <h3>The Cons of Sequestration</h3>
          </div>
        </div>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header
              header-tag="header"
              class="p-1 btn-outline-primary"
              role="tab"
            >
              <b-button block v-b-toggle.accordion-7 variant="white"
                >Can I acquire more debt?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-7"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text
                  >You are blacklisted on all credit bureaus and cannot incur
                  any debt until you have applied for rehabilitation.
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
                >Can I start a new company?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-8"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text
                  >You will not be able to act as a member of Close Corporation
                  or director of the Company.
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
              <b-button block v-b-toggle.accordion-9 variant="white"
                >Can I administrate a trust account?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-9"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text
                  >You will be unable to have or administrate a trust account,
                  ie. Attorneys Trust Account, Estate Agent Trust Account.
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
              <b-button block v-b-toggle.accordion-10 variant="white"
                >Will my job be affected?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-10"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text
                  >Certain high-profile jobs can be affected negatively and thus
                  the company’s policies and regulations should be consulted.
                  Alternatively, our offices should be contacted prior to
                  proceeding with the sequestration application.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MfNavBar from "@/components/MfNavBar";

export default {
  name: "rehabilitation",
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