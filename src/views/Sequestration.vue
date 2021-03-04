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
            <h1 class="mb-4">Voluntary Sequestration</h1>
            <div class="row">
              <div class="col-lg-3">
                <b-card
                  title="Start a New Way of Life by being Sequestrated!"
                  img-src="https://res.cloudinary.com/myflag/image/upload/v1614459586/freedom_yv2ttw.jpg"
                  img-alt="Financial Freedom"
                  img-top
                  tag="article"
                  style="max-width: 20rem"
                  class="mb-2"
                >
                  <b-card-text>
                    Financial freedom can be yours in a few simple steps.
                  </b-card-text>

                  <b-button
                    to="/apply-online"
                    class="btn bg-primary rounded-pill"
                    >Apply Now</b-button
                  >
                </b-card>
              </div>
              <div class="col-lg-3">
                <b-card
                  title="No More Debt!"
                  img-src="https://res.cloudinary.com/myflag/image/upload/v1614459586/freedom-2_apnx3z.jpg"
                  img-alt="No more debt!"
                  img-top
                  tag="article"
                  style="max-width: 20rem"
                  class="mb-2"
                >
                  <b-card-text>
                    Let us help you relieve yourself of your debt.
                  </b-card-text>
                </b-card>
              </div>
              <div class="col-lg-3">
                <b-card
                  title="A brand new start at a clear record"
                  img-src="https://res.cloudinary.com/myflag/image/upload/v1614459585/clear_pwbd4a.jpg"
                  img-alt="Clear record"
                  img-top
                  tag="article"
                  style="max-width: 20rem"
                  class="mb-2"
                >
                </b-card>
              </div>
              <div class="col-lg-3">
                <b-card
                  title="No garnishee orders!"
                  img-src="https://res.cloudinary.com/myflag/image/upload/v1614459584/freedom-3_ee2xtv.jpg"
                  img-alt="No garnishee orders"
                  img-top
                  tag="article"
                  style="max-width: 20rem"
                  class="mb-2"
                >
                </b-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="container">
        <b-jumbotron>
          <template #lead> The Sequestration Process. </template>
          <hr class="my-4" />
          <div class="iconic-item">
            <div
              class="iconic-sm iconic-text bg-warning fg-white rounded-circle"
            >
              <span class="mai-cube"></span>
            </div>
            <div class="iconic-content">
              <p>We initiate the court process, with obtaining a court date.</p>
            </div>
          </div>
          <div class="iconic-item">
            <div
              class="iconic-sm iconic-text bg-warning fg-white rounded-circle"
            >
              <span class="mai-cube"></span>
            </div>
            <div class="iconic-content">
              <p>
                A letter gets sent out to all your creditors to inform them that
                you are applying for sequestration.
              </p>
            </div>
          </div>
          <div class="iconic-item">
            <div
              class="iconic-sm iconic-text bg-warning fg-white rounded-circle"
            >
              <span class="mai-cube"></span>
            </div>
            <div class="iconic-content">
              <p>
                From that point forward you do not have to pay any creditors at
                all.
              </p>
            </div>
          </div>
          <div class="iconic-item">
            <div class="iconic-sm iconic-text bg-info fg-white rounded-circle">
              <span class="mai-shield"></span>
            </div>
            <div class="iconic-content">
              <p>You do not need to be present on the day of hearing.</p>
            </div>
          </div>
          <div class="iconic-item">
            <div
              class="iconic-sm iconic-text bg-warning fg-white rounded-circle"
            >
              <span class="mai-cube"></span>
            </div>
            <div class="iconic-content">
              <p>A Trustee is appointed to administer your estate.</p>
            </div>
          </div>
          <div class="iconic-item">
            <div
              class="iconic-sm iconic-text bg-warning fg-white rounded-circle"
            >
              <span class="mai-cube"></span>
            </div>
            <div class="iconic-content">
              <p>
                After a certain period of time you can apply for your
                rehabilitation.
              </p>
            </div>
          </div>
          <div class="iconic-item">
            <div
              class="iconic-sm iconic-text bg-warning fg-white rounded-circle"
            >
              <span class="mai-cube"></span>
            </div>
            <div class="iconic-content">
              <p>
                After this, you will start on a clean slate and ultimately
                regain financial stability.
              </p>
            </div>
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
                salary.
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
                >After 6 months or 4 years (depending on circumstances); and
                after final sequestration order has been granted; you can apply
                for rehabilitation and your credit status will be reinstated.
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
                  or director of the Company until you are rehabilitated.
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
  name: "sequestration",
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