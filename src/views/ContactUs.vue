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
            <h1 class="mb-4">Contact Us</h1>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="container pb-5">
        <b-jumbotron>
          <b-form id="apply-now-form" class="row" @submit.prevent="onSubmit">
            <div class="col-sm-12">
              <b-form-group class="form-group">
                <label for="name">Full Name</label>
                <b-form-input
                  id="name-input-1"
                  name="name-input-1"
                  v-model="$v.form.name.$model"
                  :state="validateState('name')"
                  aria-describedby="input-1-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="input-1-live-feedback"
                  >Please provide a name.</b-form-invalid-feedback
                >
              </b-form-group>

              <b-form-group class="form-group">
                <label for="mobile_number">Mobile Number</label>
                <b-form-input
                  id="mobile-input-2"
                  name="mobile-input-2"
                  v-model="$v.form.mobile_number.$model"
                  :state="validateState('mobile_number')"
                  aria-describedby="input-2-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="input-2-live-feedback"
                  >Please provide a mobile number.</b-form-invalid-feedback
                >
              </b-form-group>

              <b-form-group class="form-group">
                <label for="from_email">Email Address</label>
                <b-form-input
                  id="email-input-3"
                  name="email-input-3"
                  v-model="$v.form.from_email.$model"
                  :state="validateState('from_email')"
                  aria-describedby="input-3-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="input-3-live-feedback"
                  >Please provide an email address.</b-form-invalid-feedback
                >
              </b-form-group>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  type="message"
                  v-model="$v.message"
                  name="message"
                  aria-describedby="message"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div class="container">
              <div class="row justify-content-md-center">
                <div class="col col-lg-2 mt-5">
                  <vue-recaptcha
                    ref="invisibleRecaptcha"
                    @verify="onVerify"
                    @expired="onExpired"
                    size="invisible"
                    :sitekey="sitekey"
                    :loadRecaptchaScript="true"
                  />
                  <b-button
                    type="submit"
                    class="btn bg-primary rounded-pill g-recaptcha"
                  >
                    Contact Us
                  </b-button>
                </div>
              </div>
            </div>
          </b-form>
        </b-jumbotron>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import { validationMixin } from "vuelidate";
import { required, minLength, numeric } from "vuelidate/lib/validators";

import axios from "axios";

import MfNavBar from "@/components/MfNavBar";

export default {
  name: "contact-us",
  components: {
    "mf-nav-bar": MfNavBar,
    "vue-recaptcha": VueRecaptcha,
  },
  mixins: [validationMixin],
  data() {
    return {
      sitekey: "6Ld2jU0aAAAAAEXdlq4I3QzrLBcrOyjHWrGz6qys",
      recaptchaVerified: "false",
      message: null,
      form: {
        name: null,
        mobile_number: null,
        from_email: null,
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(1),
      },
      mobile_number: {
        required,
        minLength: minLength(1),
        numeric,
      },
      from_email: {
        required,
        minLength: minLength(1),
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    sendMail() {
      console.log("Recaptcha Verified!");
      if (this.recaptchaVerified === "true") {
        console.log("Recaptcha Verified and sending email!!");
        console.log("Sending Email...");

        const body = {
          message: this.$v.message,
          form: {
            name: this.$v.form.name.$model,
            mobile_number: this.$v.form.mobile_number.$model,
            from_email: this.$v.form.from_email.$model,
          },
        };
        axios
          .post(
            "https://us-central1-myflag-za.cloudfunctions.net/contactUs",
            body
          )
          .then(function () {
            console.log("Successfully sent email");
          })
          .catch(function () {
            console.log("Failed to send email.");
          });

        this.resetRecaptcha();
        this.recaptchaVerified = "false";
      }
    },
    onSubmit() {
      this.$v.form.$touch();
      console.log(this.$v.form.$anyError);
      if (this.$v.form.$anyError) {
        return;
      } else {
        this.$refs.invisibleRecaptcha.execute();
        this.resetForm();
      }
    },
    onVerify() {
      console.log("SENDING EMAIL...");
      console.log("Verify Recaptcha");
      this.recaptchaVerified = "true";
      this.sendMail();
    },
    onExpired() {
      console.log("Expired");
    },
    resetRecaptcha() {
      console.log("Reset Recaptcha");
      this.$refs.invisibleRecaptcha.reset();
    },
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

.contact {
  color: #000;
  background-color: #c7c7c7;
}

.btn {
  align-self: start;
  margin: auto;
}

.btn.bg-primary:hover {
  color: #fff;
}
</style>