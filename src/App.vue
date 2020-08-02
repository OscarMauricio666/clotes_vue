/* eslint-disable camelcase */ /* eslint-disable vue/no-parsing-error */ /*
eslint-disable camelcase */ /* eslint-disable camelcase */ /* eslint-disable
camelcase */
<template>
  <div id="app">
    <head_main>-</head_main>
    <transition name="fade">
      <router-link></router-link>
    </transition>
    <footer_main></footer_main>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import head_main from "./components/head_main";
import login from "./components/login";
import registro from "./components/registro";
// eslint-disable-next-line camelcase
import body_main from "./components/body";
import zapatos from "./components/zapatos";
import zapato from "./components/zapato";
// eslint-disable-next-line camelcase
import footer_main from "./components/footer";
export default {
  name: "app",
  components: {
    head_main,
    login,
    registro,
    body_main,
    footer_main,
    zapatos,
    zapato
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 0.8;
}
</style>
