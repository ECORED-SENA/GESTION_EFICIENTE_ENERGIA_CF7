<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Apreciado aprendiz bienvenido a esta experiencia de aprendizaje en donde se presentará una serie de #[strong(style="background-color:#E1D3FF; padding:3px 5px;") conceptos fundamentales del sector energético.] A lo largo de este documento comenzará a familiarizarse con las principales fuentes de generación de energía, cómo se clasifican según su procedencia y disponibilidad, y cuáles son sus impactos ambientales. Además, aprenderá las generalidades de la cadena de producción de electricidad y la importancia del mercado eléctrico en Colombia. 
      .col-lg-5
        img(src='@/assets/curso/images/tema1/img_intro.svg')


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
