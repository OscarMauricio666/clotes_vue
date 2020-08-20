<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="zapato" class="zapato">
          <div class="card">
            <img v-bind:src="img" class="img-fluid" />
            <div class="card-body">
              <h5 class="card-title">{{ id }}</h5>
              <p class="card-text">{{ titulo }}</p>
              <p class="card-text">
                <small class="text-muted">{{ des }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import zapatos from "../components/zapatos";
export default {
  el: "zapato",
  name: "zapato",
  components: {
    zapatos
  },
  data() {
    return {
      id: this.$route.params.id,
      titulo: this.$route.params.titulo,
      des: this.$route.params.des,
      img: this.$route.params.img
    };
  }
};
</script>

<style scoped>
.container {
  align-content: center;
  justify-content: center;
}
</style>
