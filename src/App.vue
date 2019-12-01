<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <particles
      :clickEffect="false"
      color="#dedede"
    />

    <div class="card">
      <h1>Nikolay Lebedev</h1>
      <h2>nlebedevinc</h2>

      <div class="card-icons">
        <a href="https://github.com/nlebedevinc">
            <icon name="brands/github" scale="2" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
// import HelloWorld from './components/HelloWorld.vue'
import Particles from './components/Particles.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    Particles
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

  .card {
    background-color: #f3f3f3;
    padding: 50px;
    text-align: center;
    z-index: 2;

    .card-icons {
      margin-top: 30px;
      svg,
      img {
        margin: 10px;
      }
    }
  }
}

</style>
