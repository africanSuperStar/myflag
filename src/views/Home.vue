<template>
  <div>
    <div class="mf-background-container">
      <mf-nav-bar></mf-nav-bar>
      <div class="hero-caption pt-5">
        <div class="container h-75">
          <div class="row align-items-center h-100">
            <div class="col-lg-6 wow fadeInUp">
              <h1 class="mb-4">Manage your finances easier</h1>
              <p class="mb-4">
                <b>myflag</b> specializes in professional liquidation,
                sequestration and rehabilitation of both individuals and
                businesses. Our dedicated legal and support team have more than
                a decade of experience and specialise in insolvency matters.
              </p>
              <b-button to="/contact-us" class="btn bg-primary rounded-pill"
                >Apply Online</b-button
              >
            </div>
            <div class="col-lg-5 py-3 wow">
              <div
                class="img-fluid img-thumbnail mobile-preview shadow floating-animate"
              >
                <undraw-wallet class="undraw"></undraw-wallet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services -->
    <div class="page-section mt-5">
      <div class="container">
        <div class="row justify-content-center align-items-start">
          <h2 class="mb-4">Services</h2>
        </div>
        <div class="row align-items-start">
          <div class="col-sm-12 col-lg-4 pt-4">
            <div
              class="img-fluid"
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="300"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <h5 class="services-title">Liquidation</h5>
              <mf-liquidity class="liquidity"></mf-liquidity>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 pt-4">
            <div
              class="img-fluid"
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="300"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <h5 class="services-title pb-2">Sequestration</h5>
              <mf-sequestration class="sequestration"></mf-sequestration>
              <p class="services-title pt-7">
                Sequestration is declaring yourself insolvent/bankrupt through a
                High Court application under the Insolvency Act.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 pt-4">
            <div
              class="img-fluid"
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="300"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <h5 class="services-title pb-5">Rehabilitation</h5>
              <mf-rehabilitation class="rehabilitation"></mf-rehabilitation>
              <p class="services-title pt-4">
                Rehabilitation is the legal process by which an Insolvent (a
                sequestrated individual) is relieved of the legal implications
                of being an Insolvent and restored to the legal status of a
                credit worthy consumer (a “solvent”).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End services -->

    <div class="page-section pt-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-none d-lg-block wow">
            <div
              class="img-fluid img-thumbnail mobile-preview shadow floating-animate"
            >
              <undraw-receipt class="undraw"></undraw-receipt>
            </div>
          </div>
          <div class="col-lg-6 py-3 mt-lg-5">
            <div class="iconic-list">
              <h1 class="mb-4">We can assist you if</h1>
              <div
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <div class="iconic-item wow fadeInUp">
                  <div
                    class="iconic-md iconic-text bg-warning fg-white rounded-circle"
                  >
                    <span class="mai-cube"></span>
                  </div>
                  <div class="iconic-content">
                    <h5>You are not able to pay all your debt</h5>
                    <p class="fs-small">
                      If your liabilities (debt) exceeds your assets.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <div class="iconic-item wow fadeInUp">
                  <div
                    class="iconic-md iconic-text bg-info fg-white rounded-circle"
                  >
                    <span class="mai-shield"></span>
                  </div>
                  <div class="iconic-content">
                    <h5>Other debt relief options are not possible for you</h5>
                    <p class="fs-small">
                      If you find yourself without any other options. We can
                      help you.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <div class="iconic-item wow fadeInUp">
                  <div
                    class="iconic-md iconic-text bg-indigo fg-white rounded-circle"
                  >
                    <span class="mai-desktop-outline"></span>
                  </div>
                  <div class="iconic-content">
                    <h5>Continuing losses and insufficient capital</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-section pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-1 py-3 mt-lg-5 wow fadeInUp">
              <h1 class="mb-4">We can also help with</h1>
              <div
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <div class="iconic-item wow fadeInUp">
                  <div
                    class="iconic-md iconic-text bg-warning fg-white rounded-circle"
                  >
                    <span class="mai-cube"></span>
                  </div>
                  <div class="iconic-content">
                    <h5>Series of creditors issuing legal proceedings</h5>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <div class="iconic-item wow fadeInUp">
                  <div
                    class="iconic-md iconic-text bg-info fg-white rounded-circle"
                  >
                    <span class="mai-shield"></span>
                  </div>
                  <div class="iconic-content">
                    <h5>Shortfall of payments on your assets</h5>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-out"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <div class="iconic-item wow fadeInUp">
                  <div
                    class="iconic-md iconic-text bg-indigo fg-white rounded-circle"
                  >
                    <span class="mai-desktop-outline"></span>
                  </div>
                  <div class="iconic-content">
                    <h5>Lack of severe cashflow</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 py-3">
              <div
                class="img-fluid img-thumbnail mobile-preview shadow floating-animate"
              >
                <undraw-personal-finance
                  class="undraw"
                ></undraw-personal-finance>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-section pt-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 mb-lg-0 d-none d-lg-block">
            <div
              class="img-fluid img-thumbnail mobile-preview shadow floating-animate"
            >
              <undraw-modern-professional
                class="undraw"
              ></undraw-modern-professional>
            </div>
          </div>
          <div class="col-lg-5">
            <h1 class="wow fadeInUp">
              Need serious help? <br />
              Don't worry just contact us
            </h1>

            <form method="POST" class="mt-5">
              <div class="form-group wow fadeInUp">
                <label for="name" class="fw-medium fg-grey">Fullname</label>
                <input type="text" class="form-control" id="name" />
              </div>

              <div class="form-group wow fadeInUp">
                <label for="email" class="fw-medium fg-grey">Email</label>
                <input type="text" class="form-control" id="email" />
              </div>

              <div class="form-group wow fadeInUp">
                <label for="message" class="fw-medium fg-grey">Message</label>
                <textarea rows="6" class="form-control" id="message"></textarea>
              </div>

              <div class="form-group mt-4 wow fadeInUp">
                <button type="submit" class="btn bg-primary rounded-pill">
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MfNavBar from "@/components/MfNavBar";
import UndrawWallet from "@/assets/img/undraw_wallet.svg";
import UndrawReceipt from "@/assets/img/undraw_receipt.svg";
import UndrawPersonalFinance from "@/assets/img/undraw_personal_finance.svg";
import UndrawModernProfessional from "@/assets/img/undraw_modern_professional.svg";
import MfLiquidity from "@/assets/img/liquidity.svg";
import MfRehabilitation from "@/assets/img/budget.svg";
import MfSequestration from "@/assets/img/revenue.svg";

export default {
  name: "home",
  components: {
    MfNavBar,
    "undraw-wallet": UndrawWallet,
    "undraw-receipt": UndrawReceipt,
    "undraw-personal-finance": UndrawPersonalFinance,
    "undraw-modern-professional": UndrawModernProfessional,
    "mf-liquidity": MfLiquidity,
    "mf-rehabilitation": MfRehabilitation,
    "mf-sequestration": MfSequestration,
  },
};
</script>

<style lang="scss" scoped>
.undraw {
  overflow: inherit;
  width: 50%;
  transform: scale(0.35) translate(-10em, -20em);
}

.services-title {
  text-align: center;
}

.liquidity {
  display: block;
  margin: auto;
  overflow: inherit;
  height: 100px;
  width: 20%;
  transform: scale(0.25) translateX(-12.5em);
}

.rehabilitation {
  display: block;
  margin: auto;
  overflow: inherit;
  height: 100px;
  width: 50%;
}

.sequestration {
  display: block;
  margin: auto;
  overflow: inherit;
  height: 100px;
  width: 20%;
  transform: scale(0.2) translateX(-12.5em);
}

.btn {
  padding: 0.4rem 0.5rem;
  align-self: start;
  margin: auto;
}

.btn-secondary:hover {
  color: #fff;
}
</style>