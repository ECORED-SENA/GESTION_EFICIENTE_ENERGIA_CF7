<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 6
      h1 Huella de carbono

    p.mb-5 Para conocer la importancia de la huella de carbono en las fuentes energéticas,explore la información a través del siguiente recurso:

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-8.mb-0.cs.mg-top-1
    .row.justify-content-center.align-items-star.mb-5.p-3
      .col-lg-7(data-aos="fade-left")
        p.mb-3 Cuando se habla del medio ambiente y se quiere describir las condiciones naturales del entorno asociadas a un lugar específico, es necesario incluir en dicha descripción el tiempo atmosférico o meteorológico, el cual se define como el valor en el tiempo de la temperatura, la presión, el viento, la humedad y la precipitación.
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;").img-fluid  
          .list__txt  
            p.m-top.mx-2 La huella de carbono es un valor que permite cuantificar la cantidad de Gases de Efecto Invernadero (GEI) .
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;")
          .list__txt    
            p.m-top.mx-2 Los GEI, son liberados a la atmósfera a causa del desarrollo de cualquier actividad humana, incluyendo la prestación de cualquier servicio, y la elaboración, comercialización y disposición de productos de consumo.
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;") 
          .list__txt    
            p.m-top.mx-2 Debido a que el dióxido de carbono (CO2) es el GEI más abundante, la huella de carbono se mide en unidades de masa (toneladas por lo general) equivalente a este gas y se expresa como CO2equivalente o de forma abreviada CO2e. 
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg" , alt='', style="width:10px; display:block; margin:auto 0 ;")
          .list__txt    
            p.m-top.mx-2 En otras palabras, hay procesos que directamente emiten al ambiente dióxido de carbono, pero no solo se emite ese gas sino por ejemplo metano (CH4),

        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;") 
          .list__txt    
            p.m-top.mx-2 El CH4, para poder sumarlo en la cuantificación de la huella de carbono, se debe convertir ese metano a su equivalente en CO2, que para este gas de acuerdo con Corporación Ambiental Empresarial (2015) resulta de multiplicar por 25 la cantidad en toneladas de CH4
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg" , alt='', style="width:10px; display:block; margin:auto 0 ;")
          .list__txt    
            p.m-top.mx-2 Es decir, emitir al ambiente una tonelada de CH4 equivale a la emisión de 25 toneladas de CO2e. El factor de 25 equivale al Potencial de Calentamiento Global del CH4 con respecto al CO2.

      .col-6.col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/images/tema6/img_1.svg')
      
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-0 


    Separador 
  
    #t_6_1.titulo-segundo
      .h2 6.1 El efecto invernadero y gases de efecto invernadero (GEI)

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-9(data-aos="fade-right")
        p.mb-3 El efecto invernadero es un fenómeno natural en donde parte de la energía por radiación que viene del sol se queda atrapada en el planeta y permite un equilibrio en las condiciones climáticas, bióticas y abióticas que permiten el desarrollo de la vida; sin embargo, este equilibrio ha sido perturbado por la influencia de las actividades humanas, lo cual ha producido como consecuencia el calentamiento global. 

        p.mb-3 En el siguiente video realizado por Estrategia climática de largo Plazo Colombia E2050 se explica con mayor detalle el efecto invernadero, no deje de consultarlo.
      .col-6.col-lg-3(data-aos="fade-left")
        img(src='@/assets/curso/images/tema6/img_2.svg')

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white El efecto invernadero - E2050 Colombia
                  p.mb-1.text-white Se visualiza el efecto invernadero como un fenómeno natural que permite la vida en la Tierra, gracias a la capacidad atmosférica de retener parte del calor del sol.
                .col-md-auto
                  a.boton.color-custom-1(href="https://www.youtube.com/watch?v=IhV2GdgEQvs." target="_blank")
                    span Ver video
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_play.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")
      
    .row.mb-3.ps-1(data-aos="zoom-in-down")
      .col-lg-4.bg-color-1
        .h4.mb-0.mx-3 Principales gases de efecto invernadero

    p.mb-3 La cantidad total de gases de efecto invernadero es bastante numerosa, ya que cada GEI difiere en su origen, composición, impacto ambiental y el tiempo de permanencia en la atmósfera. Los GEI que mayor tiempo permanecen en la atmósfera son:


    .row.justify-content-center.align-items-betwen.mb-3(data-aos="zoom-in-up")
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema6/ico_1.svg' alt='', style="width:150px; display:block; margin:auto 0;")
          .tarjeta.color-custom-6
            .px-3.py-3
              h3 CO2
              p.mt-4 Dióxido de carbono: tiempo de permanencia mayor a 100 años.
      .col-lg-5
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema6/ico_2.svg' alt='', style="width:150px; display:block; margin:auto 0;")
          .tarjeta.color-custom-6
            .px-3.py-3
              h3 CO2
              p.mt-4 Óxido nitroso: tiempo de permanencia mayor a 121 años.

    .row.justify-content-center.align-items-betwen.mb-5(data-aos="zoom-in-up")
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema6/ico_3.svg' alt='', style="width:150px; display:block; margin:auto 0;")
          .tarjeta.color-custom-6
            .px-3.py-3
              h3 CH4
              p.mt-4 Metano: tiempo de permanencia entre 12 y 20 años.
      .col-lg-5
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema6/ico_4.svg' alt='', style="width:150px; display:block; margin:auto 0;")
          .tarjeta.color-custom-6
            .px-3.py-3
              h3 SF6
              p.mt-4 Hexafluoruro de azufre: tiempo de permanencia de 3200 años.

    p.mb-3 En la siguiente tabla se muestran los principales gases de efecto invernadero de mayor tiempo de permanencia y su potencial de calentamiento global (o factor de conversión a CO2) de acuerdo con la informació n de la Corporación Ambiental Empresarial (2015).

    p.mb-3 Nota: por lo general para los cálculos se toma el factor definido por el horizonte a 100 años, debido a que se tiene estimado que ese es el tiempo de permanencia en el ambiente del dióxido de carbono. Se puede observar que para el caso del metano el valor del PCG con un horizonte de 100 años disminuye respecto al horizonte de 20 años, porque su tiempo de permanencia estimado es de aproximadamente 20 años.
    .titulo-sexto.color-acento-contenido.mb-5(data-aos="zoom-in-right")
      h5  Tabla 2.
      span  Principales gases de efecto invernadero de mayor tiempo de permanencia
    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left") 
      .col-lg-10-lg-0
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.th-2.text-center Nombre del GEI  
                th.text-center.th-2   Fórmula química
                th.text-center.th-2   Potencial de Calentamiento Global (PCG) para un horizonte de 100 años (factor de conversión a CO2e)
                th.text-center.th-2   Potencial de Calentamiento Global (PCG) para un horizonte de 20 años (factor de conversión a CO2e)

            tbody
              tr
                td.text-center.th-1  Dióxido de Carbono
                td.text-center.th-1 CO2
                td.text-center.th-1 1
                td.text-center.th-1 1 


              tr
                td.text-center  Metano
                td.text-center  CH4
                td.text-center 25 
                td.text-center  72  

              tr
                td.text-center.th-1  Óxido Nitroso
                td.text-center.th-1  N2O
                td.text-center.th-1  298  
                td.text-center.th-1 289
        
              tr
                td.text-center  Hexafluoruro de Azufre
                td.text-center  SF6
                td.text-center  22.800
                td.text-center  16.300

    .row.mb-5
      .col-lg-12
        .jumbotron-5.p-3
          p.mb-0 Nota. Los datos se tomaron dela Corporación Ambiental Empresarial (2015). https://www.acueducto.com.co/wps/html/resources/2018ag/huella_carbono/informe_gei/6_anexo_3Factores_Emision_Herramienta_Inventario
          p _GEI_EAB_2014.pdf
   

    Separador 
  
    #t_6_2.titulo-segundo
      .h2 6.2 Enfoques para la determinación de la huella de carbono

    p.mb-3 Existen cuatro posibles enfoques para el cálculo de la huella de carbono, los cuales están determinados por el tipo de actividad a analizar:

    .row.justify-content-evenly.align-items-center
      .col-12.col-lg-6.mb-4.md-5(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .row(titulo='Huella de carbono de producto' numero='1')
            .row.justify-content-center.align-items-star
              .col-lg-2
                img(src='@/assets/curso/images/tema6/ico_5.svg' alt='', style="width:150px; display:block; margin:auto 0;")
              .col-12.col-lg-10.mb-4.mb-lg-0
                p.mb-0  Consiste en el cálculo de las emisiones de GEI de un producto durante todo su ciclo de vida. Cuando se habla de ciclo de vida normalmente se acostumbra a escuchar la expresión “desde la cuna hasta la tumba” lo cual quiere decir que se deben analizar todos los procesos involucrados como por ejemplo la extracción de los materiales requeridos para la fabricación, el transporte, el proceso de producción, la comercialización, su utilización por el usuario o comprador y la disposición final cuando acabe su tiempo de vida útil. Por lo general este tipo de cálculos se realiza a través de una metodología más detallada denominada como Análisis de Ciclo de Vida.
           

          .row(titulo='Huella de carbono de una corporación u organización' numero='2')
            .row.justify-content-center.align-items-star
              .col-lg-2
                img(src='@/assets/curso/images/tema6/ico_6.svg' alt='', style="width:150px; display:block; margin:auto 0;")
              .col-12.col-lg-10.mb-4.mb-lg-0
                p.mb-0  Consiste en el cálculo de las emisiones de GEI que se generan por la actividad de una empresa u organización. En este tipo de análisis se deben definir los alcances para realizar el cálculo y por lo general se analiza el consumo de energía y agua del edificio u oficina de la organización, medios de transporte, personal que labora para la empresa y otros factores más.
          
          .row(titulo='Inventario nacional de emisiones de GEI' numero='3')
            .row.justify-content-center.align-items-star
              .col-lg-2
                img(src='@/assets/curso/images/tema6/ico_7.svg' alt='', style="width:150px; display:block; margin:auto 0;")
              .col-12.col-lg-10.mb-4.mb-lg-0
                p.mb-0  Consiste en el cálculo de las emisiones de GEI de todo un país teniendo en cuenta el resultado de todas las actividades humanas realizadas al interior de la nación y adicionalmente los recursos naturales con los que cuenta para almacenamiento de GEI.

          .row(titulo='Huella de carbono de una persona' numero='4')
            .row.justify-content-center.align-items-star
              .col-lg-2
                img(src='@/assets/curso/images/tema6/ico_8.svg' alt='', style="width:150px; display:block; margin:auto 0;")
              .col-12.col-lg-10.mb-4.mb-lg-0
                p.mb-0  Consiste en el cálculo de las emisiones de GEI que se generan como consecuencia de la actividad de una persona. Nuestro papel en la sociedad es muy importante y nuestra huella de carbono dependerá de la energía que consumimos en el hogar, nuestros medios de transporte, nuestro estilo de vida, los productos y servicios que adquirimos entre muchos otros factores.

      .col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema6/img_3.png')

    Separador 
  
    #t_6_3.titulo-segundo
      .h2 6.3 Factores de emisión para la huella de carbono corporativa

    
    .row.justify-content-center.align-items-star.mb-5
      .col-6.col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/images/tema6/img_4.svg').mb-3
      .col-lg-7(data-aos="fade-left")
        p.mb-3 Con el fin de facilitar el cálculo de la huella de carbono, a nivel mundial se han desarrollado estudios liderados por el Grupo Intergubernamental de Expertos sobre el Cambio Climático (IPCC por sus siglas en inglés) en donde es posible calcular las emisiones de GEI con una fórmula sencilla, a partir de la multiplicación de la cantidad del dato o actividad por un factor numérico (que puede variar a través de los años). 
        p.mb-3 Para algunas actividades y usos de la energía el valor de los factores de emisión puede variar, dependiendo del país, por tal razón, cada gobierno ha adoptado los factores que son comunes a nivel internacional y ha calculado sus propios factores en los casos que se requieran.
        p.mb-3 De acuerdo con la Corporación Ambiental Empresarial (2015) algunas de las clasificaciones y factores de emisión para el cálculo de la huella de carbono más comunes dentro de una corporación u organización son:

        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;").img-fluid  
          .list__txt  
            p.m-top.mx-2 Factores de emisión para combustibles. 
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;")
          .list__txt    
            p.m-top.mx-2 Factor de emisión para la energía eléctrica. 

        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;") 
          .list__txt    
            p.m-top.mx-2 Factores de emisión asociados al transporte de pasajeros y carga.
       
      p.mb-3.text-center Complemente su estudio revisando la siguiente información.

    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Huella de carbono
                  p.mb-1.text-white Se integra información respecto a los factores de emisión de la huella de carbono, así como los factores asociados.
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo Tema 6.3_Huella de Carbono.pdf')" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    Separador 
  
    #t_6_4.titulo-segundo
      .h2 6.4 Pasos para el cálculo de la huella de carbono de una organización
    
    .row.justify-content-center.align-items-star.mb-5
      .col-lg-9(data-aos="fade-right")
        p.mb-3 Por lo general cuando se requiere el cálculo de la huella de carbono corporativa o de una organización se deben seguir algunos pasos para obtener resultados de manera ordenada.

        p.mb-3 Se debe tener en cuenta que para las organizaciones la huella de carbono se calcula con valores anuales, razón por la cual se debe recopilar toda la información necesaria del año que se requiere estimar y calcular las emisiones de GEI proyectadas a un año.

        p.mb-0 También se recomienda que los valores de las GEI calculadas se muestran en unidades de toneladas. 

      .col-6.col-lg-3(data-aos="fade-left")
        img(src='@/assets/curso/images/tema6/img_5.svg')

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
                  h5.text-white Huella de carbono
                  p.mb-1.text-white Este documento muestra que existen varias metodologías o pasos a seguir, para el cálculo de la huella de carbono de una organización; sin embargo, para efectos educativos se sigue la metodología sugerida porla  Corporación Ambiental Empresarial (2015).
                .col-md-auto
                  a.boton.color-custom-1(:href="obtenerLink('downloads/OKEst_Anexo Tema 6.4_Huella de Carbono.pdf')" target="_blank")
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
