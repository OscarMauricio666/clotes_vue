<template>
  <div id="body_main">
    <header class="main-header">
      <div class="background-overlay text-white py-5">
        <div class="container">
          <div class="row">
            <div
              class="col-md-6 text-center justify-content-center align-self-center"
            >
              <h1>Esta es una prueba</h1>
              <p>Estas preparado para lo que se viene!!ss!</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script scope>
export default {
  name: "body_main"
};
</script>

<style scoped>
.main-header {
  background: url(../assets/network.jpg);
  position: relative;
  background-size: cover;
  min-height: 700px;
}
.background-overlay {
  background: rgba(96, 163, 188, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0%;
  position: absolute;
}
.row {
  padding-top: 20%;
  text-align: center;
}
</style>
