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
            <h2 class="mb-4">
              Ten Questions Away from Changing Your Financial Status
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="container pb-5">
        <b-jumbotron>
          <b-form id="apply-now-form" class="row" @submit.prevent="onSubmit">
            <div class="col-sm-6">
              <b-form-group class="form-group">
                <label for="first_name">First Name</label>
                <b-form-input
                  id="first-name-input-1"
                  name="first-name-input-1"
                  v-model="$v.form.first_name.$model"
                  :state="validateState('first_name')"
                  aria-describedby="input-1-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="input-1-live-feedback"
                  >Please provide a first name.</b-form-invalid-feedback
                >
              </b-form-group>

              <b-form-group class="form-group">
                <label for="last_name">Last Name</label>
                <b-form-input
                  id="last-name-input-2"
                  name="last-name-input-2"
                  v-model="$v.form.last_name.$model"
                  :state="validateState('last_name')"
                  aria-describedby="input-2-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="input-2-live-feedback"
                  >Please provide a last name.</b-form-invalid-feedback
                >
              </b-form-group>

              <b-form-group class="form-group">
                <label for="mobile_number">Mobile Number</label>
                <b-form-input
                  id="mobile-number-input-3"
                  name="mobile-number-input-3"
                  v-model="$v.form.mobile_number.$model"
                  :state="validateState('mobile_number')"
                  aria-describedby="input-3-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="input-3-live-feedback"
                  >Please provide a mobile number.</b-form-invalid-feedback
                >
              </b-form-group>

              <b-form-group class="form-group">
                <label for="alt_number">Alternative Number</label>
                <b-form-input
                  id="alt-number-input-4"
                  name="alt-number-input-4"
                  v-model="$v.alt_number"
                ></b-form-input>
              </b-form-group>

              <b-form-group class="form-group">
                <label for="from_email">Email Address</label>
                <b-form-input
                  id="email-address-input-5"
                  name="email-address-input-5"
                  v-model="$v.form.from_email.$model"
                  :state="validateState('from_email')"
                  aria-describedby="input-5-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="input-5-live-feedback"
                  >Please provide an email address.</b-form-invalid-feedback
                >
              </b-form-group>

              <b-form-group
                id="sel1-input-group-1"
                label="Preferred Contact Method"
                label-for="sel1-input-1"
              >
                <b-form-select
                  id="sel1-input-1"
                  name="sel1-input-1"
                  v-model="$v.form.sel1.$model"
                  :options="selectionGroup1"
                  :state="validateState('sel1')"
                  aria-describedby="input-6-live-feedback"
                ></b-form-select>

                <b-form-invalid-feedback id="input-6-live-feedback"
                  >Please select an option.</b-form-invalid-feedback
                >
              </b-form-group>
            </div>
            <div class="col-sm-6">
              <b-form-group class="form-group">
                <label for="id_number">ID Number</label>
                <b-form-input
                  id="id-number-input-7"
                  name="id-number-input-7"
                  v-model="$v.form.id_number.$model"
                  :state="validateState('id_number')"
                  aria-describedby="input-7-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="input-7-live-feedback">
                  Please provide an id number.
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group
                id="marital-status-input-group-1"
                label="Marital Status"
                label-for="marital-status-input-1"
              >
                <b-form-select
                  id="marital-status-input-1"
                  name="marital-status-input-1"
                  v-model="$v.form.marital_status.$model"
                  :options="selectionGroup2"
                  :state="validateState('marital_status')"
                  aria-describedby="input-8-live-feedback"
                ></b-form-select>

                <b-form-invalid-feedback id="input-8-live-feedback"
                  >Please select an option.</b-form-invalid-feedback
                >
              </b-form-group>

              <b-form-group class="form-group">
                <label for="total_debt">Estimated Total Debt Amount</label>
                <b-form-input
                  id="total-debt-input-9"
                  name="total-debt-input-9"
                  v-model="$v.form.total_debt.$model"
                  :state="validateState('total_debt')"
                  aria-describedby="input-9-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="input-9-live-feedback">
                  Please supply only numbers.
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group
                id="interested-in-input-group-1"
                label="I'm Interested In"
                label-for="interested-in-input-1"
              >
                <b-form-select
                  id="interested-in-input-1"
                  name="interested-in-input-1"
                  v-model="$v.form.interested_in.$model"
                  :options="selectionGroup3"
                  :state="validateState('interested_in')"
                  aria-describedby="input-10-live-feedback"
                ></b-form-select>

                <b-form-invalid-feedback id="input-10-live-feedback"
                  >Please select an option.</b-form-invalid-feedback
                >
              </b-form-group>

              <div class="form-group">
                <label for="message"
                  >Brief Description of your current financial situation</label
                >
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
                    Apply Now
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
  name: "apply-online",
  components: {
    "mf-nav-bar": MfNavBar,
    "vue-recaptcha": VueRecaptcha,
  },
  mixins: [validationMixin],
  data() {
    return {
      sitekey: "6Ld2jU0aAAAAAEXdlq4I3QzrLBcrOyjHWrGz6qys",
      recaptchaVerified: "false",
      selectionGroup1: [
        { value: null, text: "Select an item..." },
        {
          value: "Mobile",
          text: "Mobile",
        },
        {
          value: "Alternative Number",
          text: "Alternative Number",
        },
        {
          value: "Email",
          text: "Email",
        },
      ],
      selectionGroup2: [
        { value: null, text: "Select an item..." },
        {
          value: "In Community of Property",
          text: "In Community of Property",
        },
        {
          value: "Out of Community of Property",
          text: "Out of Community of Property",
        },
        { value: "Single", text: "Single" },
        { value: "Divorced", text: "Divorced" },
        { value: "Widow(er)", text: "Widow(er)" },
      ],
      selectionGroup3: [
        { value: null, text: "Select an option..." },
        {
          value: "Liquidation",
          text: "Liquidation",
        },
        {
          value: "Rehabilitation",
          text: "Rehabilitation",
        },
        {
          value: "Sequestration without Property",
          text: "Sequestration without Property",
        },
        {
          value: "Sequestration with Property",
          text: "Sequestration with Property",
        },
      ],
      alt_number: null,
      message: null,
      form: {
        first_name: null,
        last_name: null,
        mobile_number: null,
        from_email: null,
        sel1: null,
        id_number: null,
        marital_status: null,
        total_debt: null,
        interested_in: null,
      },
    };
  },
  validations: {
    form: {
      first_name: {
        required,
        minLength: minLength(1),
      },
      last_name: {
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
      sel1: {
        required,
      },
      id_number: {
        required,
        minLength: minLength(10),
      },
      marital_status: {
        required,
      },
      total_debt: {
        required,
        numeric,
      },
      interested_in: {
        required,
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
          alt_number: this.$v.alt_number,
          message: this.$v.message,
          form: {
            first_name: this.$v.form.first_name.$model,
            last_name: this.$v.form.last_name.$model,
            mobile_number: this.$v.form.mobile_number.$model,
            from_email: this.$v.form.from_email.$model,
            sel1: this.$v.form.sel1.$model,
            id_number: this.$v.form.id_number.$model,
            marital_status: this.$v.form.marital_status.$model,
            total_debt: this.$v.form.total_debt.$model,
            interested_in: this.$v.form.interested_in.$model,
          },
        };
        axios
          .post(
            "https://us-central1-myflag-za.cloudfunctions.net/applyOnline",
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