<template>
  <div id="app">
    <particles
      :clickEffect="false"
      color="#dedede"
    />

    <card/>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'

import Particles from './components/Particles.vue'
import Card from './components/Card.vue'

export default {
  name: 'app',
  components: {
    Particles,
    Card
  }
}
</script>

<style lang="scss">
html {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

#app {
  background-color: #222;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  #particles-js {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    canvas {
      height: 99% !important;
    }
  }
}

</style>
