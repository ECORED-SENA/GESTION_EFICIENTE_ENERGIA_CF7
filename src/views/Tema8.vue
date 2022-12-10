<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 8
      h1 Mercado eléctrico mayorista (MEM)

    p.mb-3 El mercado eléctrico mayorista (MEM) inició su funcionamiento en el año 1995 gracias a la legislación y organización del Sistema Eléctrico Colombiano determinado por las Leyes 142 y 143 de 1994. Con la creación del MEM se pretende garantizar las siguientes condiciones:

    .row.justify-content-evenly.align-items-star
      .col-12.col-lg-6.mb-4.md-5(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .row(titulo='Condición 1' numero='1')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Libre competencia de acuerdo con regulaciones establecidas.

          .row(titulo='Condición 2' numero='2')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Fomento de la inversión privada en el sector.
          
          .row(titulo='Condición 3' numero='3')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-10.mb-4.mb-lg-0
                p.mb-0  Reducción de la intervención del estado.

          .row(titulo='Condición 4' numero='4')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Eliminación de monopolios.

          .row(titulo='Condición 5' numero='5')
            .row.justify-content-center.align-items-star
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0  Precios de la electricidad competitivos.
       
      .col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema8/img_1.png').mb-3

    p.mb-3 Cuando se habla de mercado en términos económicos se hace referencia a un espacio en donde se realizan transacciones e intercambio de bienes, productos o servicios. Dichas acciones se pueden realizar entre individuos o entre diferentes tipos de organizaciones. En el sector eléctrico, dicho espacio se denomina mercado eléctrico mayorista (MEM) y en él se realizan transacciones de compra y venta de grandes bloques de energía eléctrica entre los agentes de la cadena del sector. Amplíe la información revisando el siguiente recurso:

    p.mb-3 En el MEM participan los siguientes agentes del mercado.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        img(src='@/assets/curso/images/tema8/img_2.svg')

    p.mb-3 A pesar de que en el MEM participan todos los anteriores agentes, los más activos en cuanto a transacciones y operaciones del Mercado son los Generadores y Comercializadores. Cabe mencionar que en el MEM también se realizan transacciones con agentes internacionales para el intercambio de energía.

    p.mb-3 Además de los agentes mencionados, participan en el MEM los siguientes órganos de operación y administración:


    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/images/tema8/1.svg',  alt='', style="width:100px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom-7
            .p-3
              p.text-center <b>Centro Nacional de Despacho (CND).</b>
      .col-md-6.col-lg.mb-5.mb-lg-0  
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/images/tema8/2.svg',  alt='', style="width:100px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom-8
            .p-3
              p.text-center <b>Administrador del Sistema de Intercambios Comerciales (ASIC).</b>
      .col-md-6.col-lg.mb-5.mb-lg-0   
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/images/tema8/3.svg',  alt='', style="width:100px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom-7
            .p-3        
              p.text-center <b>Liquidador y Administrador de Cuentas de cargos por Uso de las Redes del SIN (LAC).</b>



    p.mb-3 A pesar de que cada organismo de operación y administración tiene funciones diferentes, existe una empresa llamada XM que cumple con todas las funciones de los tres anteriores organismos descritos.

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_descargar.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white XM
                  p.mb-1.text-white se puede obtener mayor información del sector eléctrico y de XM visitando su página web:
                .col-md-auto
                  a.boton.color-custom-1(href="https://www.enel.com.co/content/dam/enel-co/espa%C3%B1ol/personas/1-11-5-normatividad-y-seguridad/4--contrato-de-condiciones-uniformes/contrato-servicio-publico-energia-electrica-2021.pdf" target="_blank")
                    span Descargar 
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")


    p.mb-3 <b>Segmentación de las transacciones en el MEM</b>

    p.mb-3 De manera general, se puede afirmar que el MEM se encuentra dividido en dos segmentos dentro de los cuales se pueden realizar transacciones de la energía.

    p.mb-3.text-center Complemente la información revisando el siguiente video:

    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white ¿Qué hace XM?
                  p.mb-1.text-white Se muestra al albor de la XM, así como las fuentes más utilizadas.
                .col-md-auto
                  a.boton.color-custom-1(href="https://youtu.be/7MyAXAkP048" target="_blank")
                    span Ver video
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_play.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")
    Separador 
    
    #t_8_1.titulo-segundo
      .h2 8.1  Bolsa de energía o mercado de corto plazo

    .row.justify-content-center.align-items-star.p-3
      .col-12.col-lg-6(data-aos="fade-right") 
        p.mb-3 La bolsa de energía es un sistema de información administrado por XM y regulado por las reglas del mercado mayorista (dispuestas por la Comisión de Regulación de Energía y Gas), donde se intercambian ofertas y demandas de energía entre los generadores y comercializadores.

        p.mb-3 A través del sistema diariamente y con resolución horaria los generadores realizan ofertas de cantidad de energía disponible (oferta) y el precio a la que pretenden venderla (pesos/kWh), mientras que los comercializadores informan la cantidad de energía (demanda) que requieren comprar para satisfacer las necesidades de sus clientes y el precio máximo al que pretenden comprarla (pesos/kWh).

        p.mb-0 Esta información se tabula gráficamente y a través de un algoritmo matemático se define el precio de la energía para la hora del día en que se está haciendo la transacción. 

      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-left") 
        img(src="@/assets/curso/images/tema8/img_3.svg") 

    p.mb-3.text-center Complemente la información revisando el siguiente video:

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white ¿Cómo se fija el precio de la electricidad?
                  p.mb-1.text-white Se muestra con más detalle la operación de la bolsa de energía y la definición del precio de la bolsa en España, que funciona de forma similar a Colombia, pero con nombres diferentes en el administrador del sistema de intercambios.
                .col-md-auto
                  a.boton.color-custom-1(href="https://www.youtube.com/watch?v=eG0FgifDJLg&t=122s" target="_blank")
                    span Ver video
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_play.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    Separador 
    
    #t_8_2.titulo-segundo
      .h2 8.2 Mercado de contratos bilaterales o mercado de mediano y largo plazo

    p.mb-3 Los contratos bilaterales son acuerdos directos que se realizan entre un comercializador y un generador, donde se pacta libremente la cantidad de energía, el precio de esta, el tiempo de duración y el tipo de contrato. Por lo general, este tipo de contratos es realizado entre empresas que tienen alto volumen de consumo o demanda de energía y quieren evitar las fluctuaciones del mercado de corto plazo. También se utiliza para apalancar económicamente proyectos de generación con energías renovables. A pesar de que los acuerdos bilaterales son libres, estos también se encuentran  regulados y tienen obligaciones con el administrador del sistema de intercambios XM.

    p.mb-3.text-center Complemente la información revisando el siguiente video:

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white ¿Qué es un PPA?
                  p.mb-1.text-white Se da una explicación general del modelo de contratos bilaterales a nivel mundial de forma similar al caso de Colombia.
                .col-md-auto
                  a.boton.color-custom-1(href="https://www.youtube.com/watch?v=RS6JouoclLg" target="_blank")
                    span Ver video
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_play.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    Separador 
    
    #t_8_3.titulo-segundo
      .h2 8.3 Regulación y disposiciones legales
    
    p.mb-3 La Comisión de Regulación de Energía y Gas (CREG) es la entidad encargada por el Gobierno Nacional para generar la reglamentación legal del funcionamiento del MEM. En general las regulaciones van orientadas a dos objetivos principales:

    .row.justify-content-center.align-items-center.left-1.d-none.d-lg-block
      .contenedor-flecha-1.my-5.mx-5.ps-5
        .contenedor-flecha-2
          .row.justify-content-center.ps-5
            .col-lg-4
              .jumbotron-13.p-4.mb-2.h-100
                .row.justify-content-center.align-items-center
                  .col-4.col-lg-4
                    img(src="@/assets/curso/images/tema8/ico_4.svg")
                .row.justify-content-center.align-items-center
                  p.text-white.mt-5 Garantizar la libre competencia en las transacciones entre generadores y comercializadores.
            .col-lg-4
              .jumbotron-14.p-4.h-100
                .row.justify-content-center.align-items-center
                  .col-4.col-lg-4
                    img(src="@/assets/curso/images/tema8/ico_5.svg")
                .row.justify-content-center.align-items-center
                  p.text-white.mt-5 Regular los monopolios en la cadena de la energía donde no es posible la libre competencia.
                  .contenedor-flecha-1.my-5

    .row.d-block.d-lg-none.mb-3
      .row.justify-content-center.align-items-center
        .col-lg-4(data-aos="zoom-in-down")
          .jumbotron-13.p-4.mb-2
            .row.justify-content-center.align-items-center
              .col-4.col-lg-4
                img(src="@/assets/curso/images/tema8/ico_4.svg")
            .row.justify-content-center.align-items-center
              p.text-white.mt-5 Garantizar la libre competencia en las transacciones entre generadores y comercializadores.
        .col-lg-4(data-aos="zoom-in-down")
          .jumbotron-14.p-4
            .row.justify-content-center.align-items-center
              .col-4.col-lg-4
                img(src="@/assets/curso/images/tema8/ico_5.svg")
            .row.justify-content-center.align-items-center
              p.text-white.mt-5 Regular los monopolios en la cadena de la energía donde no es posible la libre competencia.
    br
    p.my-5 A continuación, se muestran algunas de las reglas más relevantes del MEM y las resoluciones de la CREG que las establecen y los enlaces para su consulta:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12.lg-0
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.th-4.text-center.text-white Regla del mercado
                th.text-center.th-4.text-white  Normativa CREG    
              tr
                td Aspectos comerciales del MEM.
                td Resolución CREG 024 de 1995. http://apolo.creg.gov.co/Publicac.nsf/Indice01/Resoluci%C3%B3n-1995-CRG95024 
              tr.th-3
                td  Límites de verticalidad y participación accionaria.
                td Resolución CREG 128 de 1996. http://apolo.creg.gov.co/PUBLICAC.NSF/Indice01/Resoluci%C3%B3n-1996-CR128-96

              tr
                td Promoción de la libre competencia en el mercado mayorista.
                td Resolución CREG 020 de 1996. http://apolo.creg.gov.co/Publicac.nsf/Indice01/Resoluci%C3%B3n-1996-CRG20-96

              tr.th-3
                td Registro de fronteras comerciales y contratos.
                td Resolución CREG 047 de 2000. http://apolo.creg.gov.co/Publicac.nsf/Indice01/Resoluci%C3%B3n-2000-CREG047-2000

              tr
                td Compras de energía del mercado regulado.
                td Resolución CREG 114 de 2018. http://apolo.creg.gov.co/Publicac.nsf/1c09d18d2d5ffb5b05256eee00709c02/e1aa2bca619f4f6e05258305007463d1? <br>OpenDocument 



























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
