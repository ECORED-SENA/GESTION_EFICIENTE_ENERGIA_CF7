<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 3
      h1 Energía renovable

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-2.mb-0.cs.mg-top-1
    .row.justify-content-center.align-items-star.p-3
      .col-md-4.col-lg.mb-5.mb-lg-0(data-aos="fade-right") 
        img(src="@/assets/curso/images/tema3/img_1.svg").mb-3 
      .col-12.col-lg-8(data-aos="fade-left") 
        p.mb-3 Con el fin de reducir la dependencia de los combustibles fósiles y mitigar los impactos del cambio climático durante la última década se han evidenciado grandes cambios en el contexto energético, desde la mejora en eficiencias de conversión de energía hasta la adopción de tecnologías alternativas innovadoras para satisfacer las nuevas demandas de energía, siendo el uso de las energías renovables uno de los principales impulsores de este cambio. Esta sección contiene el desarrollo del tema 3 – energía renovable, cuyo objetivo es presentar generalidades de las energías renovables, ventajas y desventajas y, las principales tecnologías que existen actualmente a nivel mundial.
  
    .row.justify-content-center.align-items-star.p-3
      .col-12.col-lg-8(data-aos="fade-right") 
        p.mb-3 Para empezar se  va a definir qué es la energía renovable, de acuerdo con el Grupo Intergubernamental de Expertos sobre el Cambio Climático (IPCC) “la energía renovable es cualquier forma de energía de origen solar, geofísico o biológico que se renueva mediante procesos naturales a un ritmo igual o superior a su tasa de utilización. Se obtiene de los flujos continuos o repetitivos que se producen en el entorno natural” (IPCC, 2014, p. 164). Así pues,  #[strong(style="background-color:#E1D3FF; padding:3px 5px;") las energías renovables.] provienen de la utilización de recursos naturales como la luz solar, el agua o el viento, y son casi inagotables, por la cantidad de energía que contienen y su capacidad de regenerarse de forma natural, en contraste con las fuentes no renovables, cuyas reservas se agotan en el tiempo. Cabe destacar que, por no depender de combustibles fósiles, las fuentes de energía renovable generan menos emisiones de gases efecto invernadero, por tanto, contribuyen con la reducción del calentamiento global.
      .col-md-4.col-lg.mb-5.mb-lg-0(data-aos="fade-left")  
        img(src="@/assets/curso/images/tema3/img_2.svg").mb-3 

    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h3.text-white  Energías renovables en beneficio del planeta
                  p.mb-1.text-white Los principales tipos de energía renovable son energía solar, eólica, hídrica, geotérmica, mareomotriz y del oleaje, y la bioenergía (biomasa). 
                .col-md-auto
                  a.boton.color-custom-1(href="https://www.windy.com/?8.016,-74.180,7,m:dTsad2I." target="_blank")
                    span Ver video
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_play.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-0 
    
    Separador 
    
    #t_3_1.titulo-segundo
      .h3 3.1 Energía solar

    .row.justify-content-center.align-items-star.fondo-3.p-3.mb-3
      .col-md-3.col-lg.mb-5.mb-lg-0(data-aos="fade-right") 
        img(src="@/assets/curso/images/tema3/img_3.svg").mb-3 
      .col-12.col-lg-9(data-aos="fade-left")
        p.mb-3 Es la energía obtenida a partir del aprovechamiento de la radiación electromagnética procedente del sol. El aprovechamiento puede ser de dos formas: como fuente de calor (energía solar térmica) y como fuente de electricidad (energía solar fotovoltaica).

        p.mb-0 Es importante mencionar que según como sea la manera de recolectar, convertir y transferir la energía del sol las tecnologías son de dos tipos: pasivas y activas. Las pasivas distribuyen y almacenan el calor de manera natural y sin transformaciones, a partir de estrategias que favorezcan el aprovechamiento de la luz solar, por ejemplo, en los edificios se adapta la orientación de las ventanas de manera que se pueda aprovechar la luz natural. Las activas aprovechan la energía mediante dispositivos fotovoltaicos y colectores solares.

    p.mb-3.text-center Descubra más acerca de la energía solar térmica y solar fotovoltaica, revisando la siguiente información complementaria.
    

    .row.justify-content-center.align-items-center
      .col-lg-6(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Energía solar térmica
                  p.mb-1.text-white.text-small Descripción general de la energía solar, usos, forma de instalaciones y aprovechamiento en la vida cotidiana.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo A. Energía solar térmica.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

      .col-lg-6(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Energía fotovoltaica
                  p.mb-1.text-white.text-small Descripción general de la energía fotovoltaica, usos, forma de instalaciones y aprovechamiento en las industrias.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo B. Energía solar fotovoltaica.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    Separador 
    
    #t_3_2.titulo-segundo
      .h3 3.2 Energía eólica


    .row.justify-content-between.align-items-center.fondo-4.p-2.mb-3
      .col-md-3.col-lg.mb-5.mb-lg-0(data-aos="fade-right")  
        img.mx-0(src="@/assets/curso/images/tema3/img_4.svg").mb-3 
      .col-12.col-lg-9(data-aos="fade-left") 
        p.mb-3 Es la energía obtenida a partir del aprovechamiento de la radiación electromagnética procedente del sol. El aprovechamiento puede ser de dos formas: como fuente de calor (energía solar térmica) y como fuente de electricidad (energía solar fotovoltaica).

        p.mb-0 Es importante mencionar que según como sea la manera de recolectar, convertir y transferir la energía del sol las tecnologías son de dos tipos: pasivas y activas. Las pasivas distribuyen y almacenan el calor de manera natural y sin transformaciones, a partir de estrategias que favorezcan el aprovechamiento de la luz solar, por ejemplo, en los edificios se adapta la orientación de las ventanas de manera que se pueda aprovechar la luz natural. Las activas aprovechan la energía mediante dispositivos fotovoltaicos y colectores solares.

    
    p.mb-3.text-center Complemente su estudio revisando la siguiente información e interaccione con un mapa de viento.
    

    .row.justify-content-center.align-items-center
      .col-lg-6(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Energía eólica
                  p.mb-1.text-white.text-small Descubra las principales características de esta energía, su aprovechamiento y las principales tecnologías y aplicaciones.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo C. Energía eólica.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

      .col-lg-6(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Mapa de viento
                  p.mb-1.text-white.text-small Puede ver un mapa de viento global interactivo y en tiempo real.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    Separador 
  
    #t_3_3.titulo-segundo
      .h3 3.3 Energía hidroeléctrica

    .row.justify-content-between.align-items-center.fondo-5.p-2.mb-3
      .col-md-3.col-lg.mb-5.mb-lg-0(data-aos="fade-right")  
        img.mx-0(src="@/assets/curso/images/tema3/img_5.svg").mb-3 
      .col-12.col-lg-9(data-aos="fade-left") 
        p.mb-3 Es la energía obtenida a partir del movimiento del agua y su caída desde cierta altura. La energía cinética de las corrientes y la energía potencial gravitacional de los saltos de agua se transforman en energía cinética mediante el accionamiento de una máquina rotatoria que hace funcionar un generador, convirtiendo la energía del movimiento en energía eléctrica.

        p.mb-0 El aprovechamiento de la energía hidráulica es posible utilizando el movimiento de los recursos hídricos de forma natural (ríos, cascadas, etc.) o mediante la construcción de embalses (presas) de almacenamiento. 

    p.mb-3.text-center Complemente su estudio revisando la siguiente información.
    

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Energía hidroeléctrica
                  p.mb-1.text-white Descubra más sobre la tecnología utilizada para el aprovechamiento de esta energía y sus aplicaciones.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo D. Energía hidroeléctrica.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    Separador 
  
    #t_3_4.titulo-segundo
      .h3 3.4 Energía geotérmica


    .row.justify-content-center.align-items-star.fondo-3.p-3.mb-3
      .col-md-3.col-lg.mb-5.mb-lg-0(data-aos="fade-right")  
        img(src="@/assets/curso/images/tema3/img_6.svg").mb-3 
      .col-12.col-lg-9(data-aos="fade-left") 
        p.mb-3 Es la energía obtenida al aprovechar la energía térmica contenida en el interior de la Tierra. La energía térmica se origina debido a la diferencia de temperaturas entre la superficie terrestre y el núcleo interno (cercana a 7000 °C), provocando un flujo continuo de calor desde el interior de la Tierra hacia el exterior.

        p.mb-0 La energía térmica se encuentra disponible tanto en las rocas como en los depósitos de agua caliente o vapor localizados a diferentes temperaturas y profundidades debajo de la corteza terrestre. Puede observarse esta energía en la erupción de los volcanes, en las aguas termales, en géiseres, entre otros.

    p.mb-3.text-center Complemente su estudio revisando la siguiente información y el video que se propone.
    

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Energía geotérmica
                  p.mb-1.text-white Descubra más sobre la tecnología utilizada para el aprovechamiento de esta energía y sus aplicaciones
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo E. Energía geotérmica.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")


    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Energía geotérmica, ¿qué es y cómo funciona?
                  p.mb-1.text-white Se explica todo lo que debe saber sobre la energía geotérmica: qué es, cómo se obtiene, sus ventajas y desventajas, y ejemplos de qué países la utilizan.
                .col-md-auto
                  a.boton.color-custom-1(href="https://www.youtube.com/watch?v=SFf6k4OTslc" target="_blank")
                    span Ver video
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_play.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")
             
    Separador 
  
    #t_3_5.titulo-segundo
      .h3 3.5 Energía oceánica


    .row.justify-content-center.align-items-star.fondo-6.p-3.mb-3
      .col-8.col-md-3.col-lg.mb-5.mb-lg-0(data-aos="fade-right")  
        img(src="@/assets/curso/images/tema3/img_7.svg").mb-3 
      .col-12.col-lg-9(data-aos="fade-left") 
        p.mt-5 Es la energía obtenida del océano; el mar provee formas de energía que se pueden explotar de las siguientes fuentes:

        img(src="@/assets/curso/images/tema3/img_8.svg").mb-3 

    p.mb-3.text-center Complemente su estudio revisando la siguiente información.
    

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Energía oceánica
                  p.mb-1.text-white Detalle el aprovechamiento de las diferentes energías provenientes del océano y sus aplicaciones.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo F. Energía oceánica.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    Separador 
  
    #t_3_6.titulo-segundo
      .h3 3.6 Energía de la biomasa

    .row.justify-content-center.align-items-star.fondo-3.p-3.mb-3
      .col-md-3.col-lg.mb-5.mb-lg-0(data-aos="fade-right")  
        img(src="@/assets/curso/images/tema3/img_6.svg").mb-3 
      .col-12.col-lg-9(data-aos="fade-left") 
        p.mb-3 Es la energía obtenida a partir del aprovechamiento de la biomasa. La biomasa es la materia de origen orgánico, vegetal o animal, que se puede utilizar con propósitos energéticos.

        p.mb-0 El aprovechamiento de la biomasa es de dos tipos: tradicional y moderno.

    p.mb-3.text-center Complemente su estudio revisando la siguiente información.
    

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Energía de la biomasa
                  p.mb-1.text-white Se revisan los tipos de biomasa aprovechables, las tecnologías y sus aplicaciones.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo G. Energía de la Biomasa.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

             
    Separador 
  
    #t_3_7.titulo-segundo
      .h3 3.7 Hidrógeno verde

    .row.justify-content-center.align-items-star.fondo-7.p-3.mb-3
      .col-md-3.col-lg.mb-5.mb-lg-0(data-aos="fade-right")  
        img(src="@/assets/curso/images/tema3/img_10.svg").mb-3 
      .col-12.col-lg-9(data-aos="fade-left") 
        p.mb-3 El hidrógeno es el elemento químico más ligero y predominante en la Tierra; sin embargo, este no se encuentra disponible en un yacimiento natural; se encuentra combinado con otros elementos formando moléculas complejas, por ejemplo, la del agua y la de los hidrocarburos.

        p.mb-0 Para utilizar el hidrógeno, en primer lugar, se requiere producirlo y una vez producido, se puede aprovechar para generar energía y también para almacenarla. 

    p.mb-3.text-center Complemente su estudio revisando la siguiente información.
    

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Hidrógeno verde
                  p.mb-1.text-white Aprenda más sobre la utilización de este elemento para la obtención de energía y sus usos en diferentes sectores.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo H. Hidrógeno verde.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")
    Separador 
  
    #t_3_8.titulo-segundo
      .h3 3.8 Contexto mundial y colombiano - capacidad instalada de energías renovables

    p.mb-3 Según el IRENA (International Renewable Energy Technologies) la distribución mundial en porcentaje de la capacidad instalada de energías renovables en 2020 son las que se muestran en la siguiente figura:

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="zoom-in-right")
      h5  Figura 2.
      span  Distribución mundial de energías renovables 2020

    .row.align-items-center.justify-content-center.my-5
      .col-lg-8(data-aos="fade-left") 
          img(src='@/assets/curso/images/tema3/fig_1.svg')

    .row.mb-5
      .col-lg-12
        .jumbotron-5.p-2
          p.mb-0 Nota. Tomado de IRENA (2020). https://www.irena.org/Statistics/View-Data-by-Topic/Capacity-and-Generation/Technologies


    p.mb-3.text-center Y según la misma fuente, la distribución en Colombia en 2020 corresponde a la siguiente figura:

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="zoom-in-right")
      h5  Figura 3.
      span  Distribución Colombia de energías renovables 2020

    .row.align-items-center.justify-content-center.my-5
      .col-lg-8(data-aos="fade-left") 
          img(src='@/assets/curso/images/tema3/fig_2.svg')

    .row.mb-5
      .col-lg-12
        .jumbotron-5.p-2
          p.mb-0 Nota. Tomado de IRENA (2020). https://www.irena.org/Statistics/View-Data-by-Topic/Capacity-and-Generation/Technologies
















































</template>

<script>
export default {
  name: 'Tema3',
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
