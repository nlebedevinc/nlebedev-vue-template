<template>
  <div class="card">
    <h1>Nikolay Lebedev</h1>
    <h2>nlebedevinc</h2>

    <div class="card-icons">
      <a href="https://github.com/nlebedevinc">
        <icon name="envelope" scale="2" />
      </a>

      <a href="https://github.com/nlebedevinc">
        <icon name="brands/github" scale="2" />
      </a>

      <a href="https://github.com/nlebedevinc">
        <icon name="brands/linkedin" scale="2" />
      </a>

      <a href="https://github.com/nlebedevinc">
        <icon name="brands/twitter" scale="2" />
      </a>

      <a href="https://github.com/nlebedevinc">
        <icon name="brands/medium" scale="2" />
      </a>

      <a href="https://github.com/nlebedevinc">
        <icon name="brands/skype" scale="2" />
      </a>

      <a href="https://github.com/nlebedevinc">
        <icon name="brands/telegram" scale="2" />
      </a>

      <a href="https://github.com/nlebedevinc">
        <icon name="brands/instagram" scale="2" />
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vue-card"
  };
</script>

<style lang="scss">
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
</style>
