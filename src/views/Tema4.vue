<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 4
      h1 Impacto ambiental

    p.mb-3 Cuando se habla de medio ambiente normalmente se hace referencia a todas las interacciones existentes entre los seres vivos, los ecosistemas del planeta Tierra, los recursos naturales disponibles, los seres humanos y los comportamientos sociales de la humanidad. 

    figure.my-5(data-aos="fade-right")
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/EI-u3xpWPto?start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    p.mb-3 En la siguiente tabla se muestran algunos de los impactos ambientales estandarizados y clasificados por el medio de afectación, de acuerdo con el Ministerio de Ambiente y Desarrollo Sostenible (2020).

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
                  a.boton.color-custom-1(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    Separador 
  
    #t_4_1.titulo-segundo
      .h3 4.1 Impactos ambientales de las fuentes de generación de energía

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-6(data-aos="fade-right")
        p.mb-3 La extracción de las principales fuentes de energía y el proceso de generación de electricidad son actividades que más generan impacto ambiental y por lo tanto, existen normativas específicas para disminuir los efectos negativos sobre el medio ambiente. A continuación, se describen algunos de los impactos ambientales más significativos para la generación de energía eléctrica dependiendo de la tecnología:
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;").img-fluid  
          .list__txt  
            p.m-top.mx-2 Centrales termoeléctricas. 
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;")
          .list__txt    
            p.m-top.mx-2 Centrales hidroeléctricas. 
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;") 
          .list__txt    
            p.m-top.mx-2 Parques eólicos. 
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg" , alt='', style="width:10px; display:block; margin:auto 0 ;")
          .list__txt    
            p.m-top.mx-2 Parques solares fotovoltaicos. 

        p.mb-3 Para ampliar la información se invita a revisar el siguiente documento.
      .col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/images/tema4/img_1.png',)
      
    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Impactos ambientales de las fuentes de generación de energía
                  p.mb-1.text-white Se revisa el impacto que presenta esta fuente de energía a partir de 3 etapas.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo Tema 4 Impacto Ambiental.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    Separador 
  
    #t_4_2.titulo-segundo
      .h3 4.2 Evaluación del impacto ambiental
    

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-6(data-aos="fade-right")
        p.mb-3 La Evaluación del impacto ambiental (EIA) es una herramienta que permite a las empresas:
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;").img-fluid  
          .list__txt  
            p.m-top.mx-2 Identificar los aspectos e impactos ambientales que pueden ocurrir por la construcción de un proyecto. 
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;")
          .list__txt    
            p.m-top.mx-2 Estimar cuantitativamente la afectación de uno de los impactos y crear indicadores para el seguimiento.
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;") 
          .list__txt    
            p.m-top.mx-2 Planificar las acciones necesarias para la prevención y/o corrección de los deterioros ocasionados al medio ambiente.
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg" , alt='', style="width:10px; display:block; margin:auto 0 ;")
          .list__txt    
            p.m-top.mx-2 Potencializar los impactos ambientales positivos del proyecto.

        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;") 
          .list__txt    
            p.m-top.mx-2 Gestionar y hacer seguimiento a los planes de acción para la mitigación de los impactos ambientales.

        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg" , alt='', style="width:10px; display:block; margin:auto 0 ;")
          .list__txt    
            p.m-top.mx-2 Obtener por parte del Estado la aprobación de la licencia ambiental para la ejecución del proyecto en caso de ser requerida. En Colombia la entidad encargada del otorgamiento de licencias ambientales se denomina Autoridad Nacional de Licencias Ambientales (ANLA).

    
      .col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/images/tema4/img_2.png',)

    p.mb-3.text-center Complete esta valiosa información observando el siguiente video:

    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Video de oferta institucional de la ANLA
                  p.mb-1.text-white Conozca la oferta institucional y lo que hace la ANLA para promover el desarrollo sostenible y la conservación de la biodiversidad.
                .col-md-auto
                  a.boton.color-custom-1(href="https://www.youtube.com/watch?v=FfsB8Vfc2xU" target="_blank")
                    span Ver video
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_play.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    p.mb-3 De acuerdo con el International Institute for Sustainable Development (2021) los siete pasos recomendados para la elaboración de la evaluación de impacto ambiental son los siguientes:

    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-12
        .tarjeta.tarjeta--azul.p-4.mb-5
          PasosB.color-acento-botones
            .row(titulo="1. Proceso de tamizado")
              .col-md-6.mb-4.mb-md-0
                p.mb-3 consiste en la caracterización del proyecto de forma integral, analizando las actividades a desarrollar durante todas las etapas (construcción, operación, cierre).

                p.mb-0 Posteriormente se procede a realizar la identificación y determinación de cada uno de los impactos ambientales que el proyecto puede ocasionar.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema4/img_3.png', alt='Texto que describa la imagen')
      


            .row(titulo="2. Proceso de selección")
              .col-md-6.mb-4.mb-md-0
                p.mb-0  En esta etapa se establecen los límites del proyecto y se seleccionan los impactos ambientales más significativos, y se eliminan los impactos que tienen efectos mínimos en el ambiente.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema4/img_4.png', alt='Texto que describa la imagen')
    

            .row(titulo="3. Evaluación de impactos y mitigación")
              .col-md-6.mb-4.mb-md-0
                
                p.mb-3 consiste en la realización de un análisis detallado de los impactos ambientales en todos los medios.

                p.mb-3 Se procede a realizar la cuantificación de los impactos tomando como base las condiciones actuales del medio (sin proyecto) y se establece una línea base para el seguimiento

                p.mb-0 También se establecen las medidas permitan mitigar y reducir los impactos negativos.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema4/img_5.png', alt='Texto que describa la imagen')
              
            .row(titulo="4. Manejo de Impactos")
              .col-md-6.mb-4.mb-md-0
                p En esta etapa se realiza la planificación de las acciones a ejecutar durante todo el ciclo de vida del proyecto, y se determinan los indicadores para el cumplimiento de las medidas de reducción de impactos negativos.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema4/img_6.png', alt='Texto que describa la imagen')

            .row(titulo="5. Informe de EIA")
              .col-md-6.mb-4.mb-md-0
                p.mb-0 Consiste en recopilar toda la información de las etapas anteriores y condensarla en un solo documento estructurado de tal forma que se expliquen las características del proyecto y los resultados del análisis en cada una de las etapas anteriores.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema4/img_7.png', alt='Texto que describa la imagen')

            .row(titulo="6. Revisión y licenciamiento")
              .col-md-6.mb-4.mb-md-0
    
                p.mb-0 En esta etapa se radica la solicitud ante la autoridad ambiental para el estudio y revisión de la documentación, y posterior otorgamiento de la licencia ambiental. 
            
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema4/img_8.png', alt='Texto que describa la imagen')

            .row(titulo="7. Monitoreo")
              .col-md-6.mb-4.mb-md-0
    
                p.mb-3 una vez sea aprobada la licencia ambiental, el proyecto puede iniciar sus actividades.

                p.mb-0 Durante la etapa de monitoreo se debe asegurar que las medidas de mitigación y los planes de contingencia son aplicados correctamente y se gestionan los impactos ambientales negativos ocasionados por el proyecto, además de registrar toda la información y documentación para ser revisada por la autoridad ambiental.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema4/img_9.png', alt='Texto que describa la imagen')


    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white EIA estudio de caso: Minería – Colombia
                  p.mb-1.text-white Para entender mejor el proceso de evaluación de impacto ambiental, en el siguiente documento tomado del International Institute for Sustainable Development se muestra un ejemplo didáctico donde se analiza el impacto ambiental y los métodos de mitigación utilizados para una mina de oro a cielo abierto.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo Tema 4 Impacto Ambiental parte 2.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")



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
