<template>
  <div>
    <div class="container-fluid">
      <div class="row m-5 justify-content-md-center">
        <h1 class="title">Services</h1>
      </div>
      <div class="row justify-content-md-center">
        <mf-card file-name="leaf-1.png">
          <h1 slot="header">Liquidation</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </mf-card>
        <mf-card file-name="leaf-2.png">
          <h1 slot="header">Sequestration</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </mf-card>
        <mf-card file-name="leaf-3.png">
          <h1 slot="header">Rehabilitation</h1>
          <p slot="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </mf-card>
      </div>
    </div>
  </div>
</template>

<script>
import MfCard from "@/components/MfCard";

export default {
  name: "mf-card-gallery",
  components: { MfCard },
};
</script>
