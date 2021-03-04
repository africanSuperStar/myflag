<template>
  <div class="mf-background-container">
    <div>
      <b-navbar toggleable="lg" variant="light">
        <b-navbar-brand to="/">
          <cld-image
            cloudName="myflag"
            publicId="myflag-logo_rpbjep"
            crop="scale"
            alt="myflag Logo"
            width="200"
          />
        </b-navbar-brand>
      </b-navbar>
    </div>
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
            <h1 class="mb-4">Coming Soon</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coming-soon",
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
  width: 20%;
  transform: scale(0.25) translateX(-12.5em) translateY(-12.75em);
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