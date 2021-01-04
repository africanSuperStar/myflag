<template>
  <div class="mf-background-container">
    <mf-nav-bar></mf-nav-bar>
    <div class="mf-background">
      <mf-background></mf-background>
      <div class="mf-paragraph shadow p-4 mb-5 bg-white rounded-lg">
        <h5>THE START OF NEW FINANCIAL BEGINNINGS</h5>
        <p>
          myflag specializes in professional liquidation, sequestration and
          rehabilitation of both individuals and businesses. Our dedicated legal
          and support team have more than a decade of experience and specialise
          in insolvency matters.
        </p>
        <b-button variant="warning">Contact Us</b-button>
      </div>
    </div>
    <svg
      class="mf-background__svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1337.97 684.43"
    >
      <path
        class="mf-background__shape big-square"
        fill="#16d5d1"
        d="M546.519 349.271l86.383-56.098 56.097 86.383-86.383 56.098z"
      />
      <path
        class="mf-background__shape triangle"
        fill="none"
        stroke="#ff4676"
        stroke-width="8"
        d="M372.15 462.17L321 434.58l-4.88 56.16z"
      />
      <circle
        class="mf-background__shape big-circle"
        fill="#ff4676"
        cx="1076.52"
        cy="262.17"
        r="59"
      />
      <path
        class="mf-background__shape little-square"
        fill="#ffe430"
        d="M285.523 262.61l12.372-53.59 53.59 12.372-12.372 53.59z"
      />
      <circle
        class="mf-background__shape hoop"
        fill="none"
        stroke="#ffe430"
        stroke-width="13"
        cx="905.52"
        cy="447.17"
        r="45"
      />
      <circle
        class="mf-background__shape little-circle"
        fill="#0f1c70"
        cx="1036.52"
        cy="203.17"
        r="27"
      />
    </svg>
    <mf-card-gallery></mf-card-gallery>
  </div>
</template>

<script>
import MfNavBar from "@/components/MfNavBar";
import MfCardGallery from "@/components/MfCardGallery";
import MfBackground from "@/assets/background.svg";

export default {
  name: "home",
  components: {
    MfNavBar,
    MfCardGallery,
    "mf-background": MfBackground,
  },
};
</script>

<style lang="scss" scoped>
.mf-background {
  display: flex;
  justify-content: flex-end;
  position: relative;
}
.mf-orbital {
  display: flex;
  justify-content: flex-end;
  position: relative;
}
.mf-orbital-content {
  position: absolute;
  top: 20rem;
  right: 20rem;
}
.mf-paragraph {
  position: absolute;
  max-width: 500px;
  font-size: 1rem;
  top: 6rem;
  left: 10rem;
  right: 20px;
}

@media screen and (max-width: 1024px) {
  .mf-paragraph {
    left: 20px;
  }
}

.mf-background__shape {
  animation-duration: 5s;
  animation-timing-function: cubic-bezier(0.18, 1.17, 0.03, 1.46);
  animation-fill-mode: backwards;
  transform-origin: right;
  transform-box: fill-box;
}

.mf-background-container {
  background: radial-gradient(#dfdfdf 8%, transparent 8%), transparent;
  background-position: 0 0, 25px 25px;
  background-size: 25px 25px;
  min-height: 100vh;
}

.mf-background {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
}

.mf-background__svg {
  position: absolute;
  width: 100%;
  top: 80%;
  transform: translateY(-50%);
  z-index: -1;
  will-change: transform;
}
.mf-background__title {
  font-family: Avenir, Futura, "Open Sans", "Gill Sans", "Helvetica Neue", Ariel,
    sans-serif;
  font-weight: bold;
  font-size: 6vw;
  margin: 0;
}

.big-square {
  animation-name: bigSquare;
}
@keyframes bigSquare {
  from {
    transform: translateY(10%) rotate(-80deg) scale(0);
  }
  to {
    transform: translateY(0) rotate(0deg) scale(1);
  }
}
.little-square {
  animation-name: littleSquare;
}
@keyframes littleSquare {
  from {
    transform: translate(226%, 183%) rotate(140deg) scale(0);
  }
  to {
    transform: translate(0%, 0%) rotate(0deg) scale(1);
  }
}
.triangle {
  animation-name: triangle;
}
@keyframes triangle {
  from {
    transform: rotate(-140deg) scale(0);
  }
  to {
    transform: rotate(0deg) scale(1);
  }
}
.hoop {
  animation-name: hoop;
}
@keyframes hoop {
  from {
    transform: translate(-160%, -33%) scale(0);
  }
  to {
    transform: translate(0%, 0%) scale(1);
  }
}
.big-circle {
  animation-name: bigCircle;
}
@keyframes bigCircle {
  from {
    transform: scale(0) translate(60%, 3%);
  }
  to {
    transform: scale(1) translate(0%, 0%);
  }
}
.little-circle {
  animation-name: littleCircle;
}
@keyframes littleCircle {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@for $i from 1 to 12 {
  .mf-background__shape:nth-child(#{$i}) {
    animation-delay: $i * 0.16s;
  }
}
</style>