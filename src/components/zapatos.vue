<template>
    <div id="zapatos" class="zapatos">
      <section id="galeria" class="container">
         <div class="row">
          <div class="card-columns">            
              <div class="card" v-for="zap in zapatos" v-bind:key="zap">
                <img v-bind:src="zap.img" v-bind:alt="zap.alt">
                <div class="card-body">
                    <h5 class="card-title">{{ zap.titulo }}</h5>
                    <p class="card-text">{{ zap.des }}.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>                    
          </div>           
        </div>
      </section>                   
    </div>
</template>
<script>
export default {
  el: 'zapatos',
  name: 'zapatos',
  data () {
    return {
      zapatos: [
        {id: 1, titulo: 'zapato prueba uno', img: require('../assets/zapatos_img/1ten.jpg'), des: 'blabla1', alt:'1'},
        {id: 2, titulo: 'zapato prueba dos', img: require('../assets/zapatos_img/2ten.jpg'), des: ' balbla2', alt:'2'},
        {id: 3, titulo: 'zapato prueba tres', img: require('../assets/zapatos_img/3ten.jpg'), des: 'blabla', alt: '3'},
        {id: 4, titulo: 'zapato prueba tres', img: require('../assets/zapatos_img/4ten.jpg'), des: 'blabla', alt: '3'},
        {id: 5, titulo: 'zapato prueba tres', img: require('../assets/zapatos_img/5ten.jpg'), des: 'blabla', alt: '3'},
        {id: 6, titulo: 'zapato prueba tres', img: require('../assets/zapatos_img/6ten.jpg'), des: 'blabla', alt: '3'},
        {id: 7, titulo: 'zapato prueba tres', img: require('../assets/zapatos_img/7ten.jpg'), des: 'blabla', alt: '3'},
        {id: 8, titulo: 'zapato prueba tres', img: require('../assets/zapatos_img/8ten.jpg'), des: 'blabla', alt: '3'},
        {id: 9, titulo: 'zapato prueba tres', img: require('../assets/zapatos_img/9ten.jpg'), des: 'blabla', alt: '3'},
        {id: 10, titulo: 'zapato prueba tres', img: require('../assets/zapatos_img/10ten.jpg'), des: 'blabla', alt: '3'},
        {id: 11, titulo: 'zapato prueba tres', img: require('../assets/zapatos_img/11zap.jpg'), des: 'blabla', alt: '3'},
        {id: 12, titulo: 'zapato prueba tres', img: require('../assets/zapatos_img/12ten.jpg'), des: 'blabla', alt: '3'},
      ]
    }
  }
}
</script>
<style scoped>
#galeria img {
  width: 100%;
  height: auto;
}
</style>
