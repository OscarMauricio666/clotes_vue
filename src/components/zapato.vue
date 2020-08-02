<template>
  <div id="zapato" class="zapato">
    <div class="card">
      <div class="card">
        <img v-bind:src="img" />
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

<style></style>
