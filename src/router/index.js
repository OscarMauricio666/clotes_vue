import Vue from "vue";
import Router from "vue-router";
// eslint-disable-next-line camelcase
import body_main from "../components/body.vue";
import zapatos from "../components/zapatos.vue";
import zapato from "../components/zapato.vue";
import term_cond from "../components/term&cond.vue";
import med_pago from "../components/med_pago.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [{
      path: "/",
      name: "index",
      component: body_main
    },
    {
      path: "/zapatos",
      name: "zapatos",
      component: zapatos
    },
    {
      path: "/zapato/:id/:titulo/:des/:img",
      name: "zapato.detalle",
      component: zapato
    },
    {
      path: "/terminos_condiciones",
      name: "term_cond",
      component: term_cond
    },
    {
      path: "/med_pago",
      name: "med_pago",
      component: med_pago
    }
  ]
});
