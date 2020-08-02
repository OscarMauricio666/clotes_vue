<template>
  <div id="login">
    <h2>Iniciar Sesión</h2>
    <input type="email" placeholder="correo electronico" />
    <input type="password" placeholder="Contraseña" />
    <button class="btn">Ingresar</button>
  </div>
</template>
<script>
export default {
  name: "login",
  created() {
    console.log("login");
  }
};
</script>
