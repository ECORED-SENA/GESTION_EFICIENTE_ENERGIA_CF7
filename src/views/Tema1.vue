<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 1
      h1 Termodinámica

    p.mb-3 En la mayoría de las actividades que se realizan en la vida diaria se encuentra presente la termodinámica, por ejemplo, el cuerpo necesita un suministro constante de energía para mantenerse vivo. Esta energía se obtiene de las calorías que se consumen en los alimentos y a partir de la transformación de energía en las células se emite calor corporal del ambiente. 

    p.mb-5 Se invita a revisar más información sobre la termodinámica a través del siguiente video.

    figure.mb-5(data-aos="fade-right")
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wiFkJebegwk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      

    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Breve historia de la termodinámica
                  p.mb-1.text-white Amplía el conocimiento sobre cómo y cuándo surge la termodinámica, y el impacto que esta tiene en las sociedades
                .col-md-auto
                  a.boton.color-custom-1(href="https://www.youtube.com/watch?v=wiFkJebegwk" target="_blank")
                    span Ver video
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_play.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    p.mb-3 Para comprender mejor estos fenómenos cotidianos y descubrir aplicaciones que involucran las transformaciones de energía, se invita a explorar los temas que se desarrollan a continuación y sus respectivos anexos. 

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-1.m-top.mb-0.cs

    Separador 
    
    #t_1_1.titulo-segundo
      .h3 1.1  Dimensiones y unidades

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")
        p.mb-3 Tienen un papel importante en el estudio de la termodinámica. Por tratarse de una ciencia que estudia los fenómenos a nivel macroscópico, las cantidades que se utilizan en esta rama de la física se pueden conocer a partir de una medición directa o indirecta.

        p.mb-0 El sistema de unidades que comúnmente se utiliza en termodinámica es el Sistema Internacional (SI). Actualmente en países como Estados Unidos de América aún no se adopta el sistema métrico, por tanto, se mencionan en este documento las unidades del sistema inglés para conocer la relación entre algunas magnitudes. Se invita a examinar las unidades básicas y derivadas del SI más frecuentes en termodinámica. 
      .col-6.col-lg-3(data-aos="fade-left")
        img(src='@/assets/curso/images/tema1/img_1.svg')

    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Dimensiones y unidades
                  p.mb-1.text-white Se invita al aprendiz a revisar algunas unidades del sistema inglés, prefijos y relaciones de conversión.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo 1.1. Dimensiones y unidades.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    #t_1_2.titulo-segundo
      .h3 1.2  Conceptos básicos
      
    p.mb-3 Los términos básicos que permitirán tener una mejor comprensión del estudio de la termodinámica y de los principios que la gobiernan son:

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 

    .row.align-items-center.justify-content-center.p-4
      SlyderF.slyder-color.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-down")
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema1/1.svg' alt='', style="width:100px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom-2
            .p-4.text-ce
              h4.text-center Sistema 
              p.text-center.text-small Es la herramienta analítica de <i>Microsoft</i> y una de las más populares, debido a que ofrece visualizaciones interactivas de datos y  una integración sencilla con otras herramientas de la corporación.   


        .tarjeta-avatar
          img(src='@/assets/curso/images/tema1/2.svg' alt='', style="width:100px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom-3
            .p-5
              h4.text-center.mb-5 Propiedades termodinámicas


        .tarjeta-avatar
          img.mb-5(src='@/assets/curso/images/tema1/3.svg' alt='', style="width:100px; display:block; margin:auto 0 ;")

          .tarjeta.color-custom-2.p-5
            .p-5
              h4.text-center Estado

        .tarjeta-avatar
          img(src='@/assets/curso/images/tema1/4.svg' alt='', style="width:100px; display:block; margin:auto 0 ;")

          .tarjeta.color-custom-3.p-3
            .p-5
              h4.text-center.mb-5 Procesos y ciclos

    

    p.mb-5 Se invita a examinar las unidades básicas y derivadas del SI más frecuentes en termodinámica, y algunas unidades del sistema inglés, prefijos y relaciones de conversión que se encuentran en los numerales.

    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Principios básicos de la termodinámica
                  p.mb-1.text-white Se integra de qué trata cada principio que a la vez gobierna la termodinámica
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo 1.2. Conceptos básicos.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    #t_1_3.titulo-segundo
      .h3 1.3  Ley cero de la termodinámica
      
    p.mb-3 Esta ley permite establecer el equilibrio térmico, se invita a visualizar cómo ocurre, explorando la didáctica.

    p.mb-5 La ley cero de la termodinámica establece que “si dos cuerpos se encuentran en equilibrio térmico con un tercero, están en equilibrio térmico entre sí” (Çengel y Boles, 2015, p.17).

    .row.align-items-center.justify-content-center.my-5
      .col-lg-6(data-aos="fade-left") 
          img(src='@/assets/curso/images/tema1/img_2.svg')

    p.mb-3 Si colocamos una taza de café que está caliente y una lata con bebida fría sobre una mesa, con el tiempo, la taza con café caliente se enfriará y la bebida fría estará menos fría (o tibia). Esto ocurre debido a la transferencia de energía (calor) entre cada recipiente con el aire del ambiente. En el caso de la taza de café caliente, se transfiere calor al entorno (ambiente) hasta que sus temperaturas se igualen. Mientras que en el caso de la bebida fría, recibirá calor del ambiente, hasta que se igualen sus temperaturas. Esto constituye un ejemplo de la Ley Cero de la termodinámica.

    .row.align-items-center.justify-content-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="zoom-in-right")
          h5 Figura 1
          span Ejemplo Ley Cero de la Termodinámica.

    .row.align-items-center.justify-content-center.my-5
      .col-lg-8(data-aos="fade-left") 
          img(src='@/assets/curso/images/tema1/fig_1.svg')


    p.mb-3 Veamos cómo ocurre el flujo de calor entre dos cuerpos o sistemas con diferente temperatura.

    p.mb-3 Dos sistemas que se encuentran a diferente temperatura, al ponerse en contacto, experimentan transferencia de calor, que ocurre desde el cuerpo caliente hacia el frío, hasta que se igualen las temperaturas de ambos. Cuando se igualan las temperaturas, se dice que los cuerpos se encuentran en estado de equilibrio térmico.


    .row.align-items-center.justify-content-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="zoom-in-right")
          h5 Figura 2
          span Dirección del flujo de calor

    .row.align-items-center.justify-content-center.my-5
      .col-lg-6(data-aos="fade-left") 
          img(src='@/assets/curso/images/tema1/fig_2.svg')

    p.mb-3 En la siguiente figura, el cuerpo A está en equilibrio térmico con el cuerpo B. A su vez, el cuerpo B está en equilibrio térmico con el cuerpo C, por tanto, el cuerpo A está en equilibrio térmico con el cuerpo C.


    .row.align-items-center.justify-content-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="zoom-in-right")
          h5 Figura 3
          span  Representación de la Ley Cero de la Termodinámica.

    .row.align-items-center.justify-content-center.my-5
      .col-lg-8(data-aos="fade-left") 
          img(src='@/assets/curso/images/tema1/fig_3.svg')


    #t_1_4.titulo-segundo
      .h3 1.4  La primera ley de la termodinámica

    p.mb-3 La primera ley de la termodinámica es una expresión del principio de conservación de la energía y sostiene que la energía es una propiedad termodinámica. <b>El principio de conservación de la energía</b> manifiesta que, durante una interacción, la energía puede cambiar de una forma a otra, pero su cantidad total permanece constante. La primera ley enuncia que:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5(data-aos="fade-right")
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 La energía no se puede crear ni destruir durante un proceso; solo puede cambiar de forma
            i.fas.fa-quote-right
        .row.mb-5
          p.mx-3 (Cengel & Boles, 2015, p.70).
      .col-6.col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/images/tema1/img_3.svg')
 
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10(data-aos="fade-right")
       p.mb-5.text-center Se invita a que complemente su estudio, revisando la siguiente información.     


    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Primera ley de la termodinámica
                  p.mb-1.text-white Se establece la relación entre el trabajo, el calor y la energía interna de un sistema relacionados con la primera ley de la termodinámica, como la energía, algunas de sus principales formas y cómo se transforma.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo 1.4. La primera ley de la termodinámica.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")
    
    #t_1_5.titulo-segundo
      .h3 1.5  La segunda ley de la termodinámica

    p.mb-3 Establece el sentido en el que ocurre un proceso. La segunda ley surgió a partir de algunas restricciones a la primera ley, esta última no permite tener certeza de si un proceso puede o no ocurrir. No obstante, para que ocurra un proceso, este debe satisfacer tanto la primera como la segunda ley de la termodinámica.

    p.mb-5 Se invita a que complemente su estudio, revisando la siguiente información.

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Segunda ley de la termodinámica
                  p.mb-1.text-white se presentan en primer lugar algunos conceptos relacionados con la segunda ley, como depósitos, máquinas térmicas, entre otros, en los postulados de la segunda ley se presenta el ciclo de Carnot como ciclo ideal, y algunas máquinas como refrigeradores y bombas de calor.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo 1.5. La segunda ley de la termodinámica.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-1(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    #t_1_6.titulo-segundo
      .h3 1.6  Ciclos termodinámicos

    p.mb-3 Son una serie de transformaciones termodinámicas realizadas en uno o más dispositivos, con el objetivo de producir trabajo a partir de dos fuentes de calor a distinta temperatura, o de manera inversa, permitir la utilización del trabajo para que haya transferencia de calor de la fuente de menor temperatura a la de mayor temperatura. El trabajo obtenido es utilizado para producir movimiento o para generar electricidad.

    p.mb-5 Se invita a que complemente su estudio revisando la siguiente información.


    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Principales ciclos de la termodinámica
                  p.mb-1.text-white Descubra cuáles son los principales ciclos que se estudian en termodinámica a partir de las distintas fuentes de energía.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo 1.6. Ciclos termodinámicos.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
