<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 9
      h1 Cifras del sector eléctrico colombiano

    p.mb-3 Para entender con más detalle el funcionamiento del sistema eléctrico colombiano es importante observar las cifras para cada uno de los sectores y operaciones de este. En los siguientes apartados se muestra a través de datos y gráficas el comportamiento, composición y tendencias para diferentes periodos de tiempo.

    Separador 
    
    #t_9_1.titulo-segundo
      .h2 9.1 Generación
    
    p.mb-3 La generación de electricidad es el proceso mediante el cual se transforma un tipo de energía primaria en energía eléctrica. Las plantas generadoras se clasifican, dependiendo del tipo de energía primaria utilizada para la generación de la electricidad. En Colombia las plantas generadoras utilizadas son:

    .row.align-items-center.justify-content-center.p-4
      SlyderF.slyder-color.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-down")
        .col-md-12.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/images/tema9/ico_1.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")
            .tarjeta.color-custom-9
              .p-4
                h4.text-center Hidráulica
                p.text-center Aprovecha la energía cinética del agua acumulada en un embalse para mover turbinas

        .col-md-12.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/images/tema9/ico_2.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")

            .tarjeta.color-custom-9
              .p-3
                h4.text-center Térmica o combustible fósil
                p.text-center Utiliza procesos térmicos, químicos y eléctricos para generar energía obtenida a partir de combustibles como el Fuel Oil, Carbón, ACPM, Gas y Jet-A1, entre otros.

        .col-md-12.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/images/tema9/ico_3.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")
            .tarjeta.color-custom-9
              .p-4
                h4.text-center Solar
                p.text-center Utiliza como fuente primaria la energía proveniente de la radiación solar.

        .col-md-12.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/images/tema9/ico_4.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")
            .tarjeta.color-custom-9
              .p-4
                h4.text-center Eólica
                p.text-center Utiliza como fuente primaria la energía de las corrientes de aire para mover las palas de un aerogenerador.

        .col-md-12.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/images/tema9/ico_5.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")
            .tarjeta.color-custom-9
              .p-4
                h4.text-center Biomasa
                p.text-center Utiliza procesos térmicos, químicos y eléctricos para generar energía obtenida a partir de la materia orgánica como plantas, residuos de los animales y de los humanos.


    .row.mb-3.ps-1(data-aos="zoom-in-down")
      .col-lg-3.bg-color-1
        .h4.mb-0.mx-3 Capacidad instalada

    p.mb-3 La capacidad instalada o efectiva hace referencia a la totalidad de potencia instalada disponible para atender las necesidades de energía eléctrica en el país. La unidad de medida es el Megavatio [MW]; en la siguiente tabla se muestra la capacidad instalada en Colombia al final del año 2020, de acuerdo con los datos suministrados por XM (2020).

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="zoom-in-right")
      h5  Tabla 3.
      span  Capacidad instalada en Colombia al final del año 2020

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-lg-4
        table
          thead
            tr
              th.th-2.text-center  Tipo / Fuente de energía
              th.text-center.th-2   Capacidad efectiva neta [MW]
              th.text-center.th-2   Porcentaje del total [%]
    
          tbody
            tr
              td.text-center.th-1  Hidráulica
              td.text-center.th-1 11.944,79
              td.th-1.text-center 68,3 % 

            tr
              td.text-center  Térmica
              td.text-center  5.321,34
              td.text-center 30,4 % 
          
            tr
              td.text-center.th-1  Solar
              td.th-1.text-center  60,56
              td.text-center.th-1  0,3 %
  
            tr
              td.text-center  Eólica
              td.text-center 18,42 
              td.text-center 0,1 %  
          
            tr
              td.text-center.th-1 Biomasa
              td.th-1.text-center  139,6
              td.text-center.th-1  0,8 %
        
            tr
              td.text-center  <b>Total</b>
              td.text-center  <b>17.484,71</b>
              td.text-center  <b>100 %</b>

        .row.mb-0
            .col-lg-12
              .jumbotron-5.p-2
                p.mb-0 Nota. Los datos se tomaron de XM (2020).
      .col-lg-5
          img.mb-4(src="@/assets/curso/images/tema9/fig_1.svg")
          .row.mt-0
            .col-lg-12
              .jumbotron-5.p-2
                p.mb-0 Generación de electricidad 2020 [GWh]

    .row.justify-content-center.align-items-center
      .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-right")
        p.mb-0 Como se puede observar en Colombia la mayor capacidad instalada se encuentra en las plantas hidroeléctricas, seguido de las centrales térmicas, en menor medida se encuentran las plantas de biomasa, centrales solares y eólicas. A pesar de estar en el último lugar, se espera en los próximos años un crecimiento exponencial en la capacidad disponible de las centrales solares y eólicas.e puede usar dos o más columnas para diagramar el texto

    .row.mb-3.ps-1(data-aos="zoom-in-down")
      .col-lg-3.bg-color-1
        .h4.mb-0.mx-3 Generación de electricidad

    p.mb-3 A diferencia de la capacidad instalada, la generación hace referencia a cuánta electricidad produce cada planta generadora, lo cual dependerá de las condiciones ambientales en especial la hidrología y el clima. En la siguiente tabla se muestra la generación de electricidad en Colombia en el año 2020 de acuerdo con los datos suministrados por XM (2020):
    .titulo-sexto.color-acento-contenido.mb-5(data-aos="zoom-in-right")
      h5  Tabla 4.
      span  Generación de electricidad en Colombia en 2020

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-lg-4
        table
          thead
            tr
              th.th-2.text-center  Tipo / Fuente de energía
              th.text-center.th-2   Capacidad efectiva neta [MW]
              th.text-center.th-2   Porcentaje del total [%]
    
          tbody
            tr
              td.text-center.th-1  Hidráulica
              td.text-center.th-1 49.837,40
              td.th-1.text-center 71,9 %

            tr
              td.text-center  Térmica
              td.text-center  18.560,90
              td.text-center 26,8 % 
          
            tr
              td.text-center.th-1  Solar
              td.th-1.text-center  190,80
              td.text-center.th-1  0,3 %
  
            tr
              td.text-center  Eólica
              td.text-center 10,10
              td.text-center 0,0 % 
          
            tr
              td.text-center.th-1 Biomasa
              td.th-1.text-center  724,40
              td.text-center.th-1  1,0 %
        
            tr
              td.text-center  <b>Total</b>
              td.text-center  <b>69.323,60</b>
              td.text-center  <b>100 %</b>

        .row.mb-0
            .col-lg-12
              .jumbotron-5.p-2
                p.mb-0 Nota. Los datos se tomaron de XM (2020).
      .col-lg-5
          img.mb-4(src="@/assets/curso/images/tema9/fig_2.svg")
          .row.mt-0
            .col-lg-12
              .jumbotron-5.p-2
                p.mb-0 Generación de electricidad 2020 [GWh]


    .row.justify-content-center.align-items-center
      .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-right")
        p.mb-0 De los datos anteriores se puede concluir que en Colombia las plantas hidroeléctricas son las que generan mayor cantidad de electricidad, seguidas por las centrales térmicas. Esta distribución puede variar dependiendo de los fenómenos climáticos, como por ejemplo, el fenómeno del niño donde se presentan periodos de escasez de lluvias, por lo tanto, algunos embalses bajan su nivel de agua y las plantas hidroeléctricas no pueden entrar en operación.

    Separador 
    
    #t_9_2.titulo-segundo
      .h2 9.2 Transmisión

    p.mb-3 Esta actividad consiste en el transporte de energía eléctrica a través del conjunto de líneas, con sus correspondientes módulos de conexión (Sistema de Transmisión Nacional – STN), que operan a tensiones iguales o superiores a 220 kV, o a través de redes regionales o interregionales de transmisión a tensiones inferiores. En la siguiente tabla de acuerdo con la información suministrada por PARATEC (2021) se muestra la longitud total de líneas de transmisión en el país a junio de 2021 y la distribución de acuerdo con su nivel de tensión.


    .titulo-sexto.color-acento-contenido.mb-5(data-aos="zoom-in-right")
      h5  Tabla 5.
      span  Longitud total de líneas de transmisión en Colombia a junio de 2021

    .row.justify-content-center.align-items-star.mb-5(data-aos="fade-left") 
      .col-lg-7
        .tabla-a.color-acento-botones.mb-2
          table
            thead
              tr
                th.th-2.text-center  Línea de Transmisión
                th.text-center.th-2  Longitud [km]
                th.text-center.th-2   Porcentaje
     
            tbody
              tr
                td.text-center.th-1  Transmisión a 110 kV
                td.text-center.th-1 3.961,86
                td.th-1.text-center 14 %

              tr
                td.text-center  Transmisión a 115 kV
                td.text-center  7.799,21
                td.text-center 28 %
           
              tr
                td.text-center.th-1  Transmisión a 138 kV
                td.th-1.text-center  15,49
                td.text-center.th-1  0 %
    
              tr
                td.text-center  Transmisión a 220 kV
                td.text-center 2.647,24
                td.text-center 9 %
           
              tr
                td.text-center.th-1 Transmisión a 230 kV
                td.th-1.text-center  10.548,26
                td.text-center.th-1  37 %
              tr
                td.text-center Transmisión a 500 kV
                td.text-center  3.215,17
                td.text-center  11 %

              tr
                td.text-center  <b>Total</b>
                td.text-center  <b>28.187,23</b>
                td.text-center  <b>100 %</b>

        .row.mb-0
            .col-lg-12
              .jumbotron-5.p-2
                p.mb-0 Nota. La información se tomó de PARATEC (2021).
      .col-lg-5
        p.mb-3 La longitud mayor en líneas de transmisión para el Sistema de Transmisión Nacional se tiene para las líneas a 230 kV, seguidos de las líneas a 115 kV.

        p.mb-0 Algunas de las líneas de transmisión se utilizan para hacer el intercambio internacional de electricidad con Ecuador.


    p.mb-3 Desde el transporte de energía se tiene el paso de la comercialización con el usuario y por supuesto, la regulación vigente.

    .row.mb-3.ps-1(data-aos="zoom-in-down")
      .col-lg-3.bg-color-1
        .h4.mb-0.mx-3 Comercialización

    p.mb-3 La comercialización de energía eléctrica es el proceso mediante el cual las empresas denominadas y registradas como comercializadoras compran la energía en el mercado eléctrico mayorista (MEM), para posteriormente ser vendida a sus clientes o usuarios mediante una tarifa establecida.

    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white Te invitamos a revisar los videos, para entender este mercado:
                  p.mb-1.text-white En el Codensa muestra de manera general de qué se trata la comercialización de energía.
                  p.mb-3.text-white Concepto de tarifa y sus componentes. 

                .col-md-3
                  a.boton.color-custom-1.mb-3(href="https://www.youtube.com/watch?v=spfmTv6SqRY" target="_blank").mx-1
                    span Descargar
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")
         
                  a.boton.color-custom-1.mx-1(href="https://youtu.be/7MyAXAkP048" target="_blank")
                    span Descargar
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_download.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    .row.justify-content-center.align-items-center.mb-2
      .tarjeta--container.row.mb-5.h-100
        .col-md.tarjeta.color-custom-10.p-5(data-aos="fade-right") 
          .row.justify-content-center.mb-4
            .col-12
              figure
                img(src='@/assets/curso/images/tema9/ico_6.svg', alt="", style="width:180px; display:block; margin:0 auto;").mb-3
              
                p.text-center.text-white La rentabilidad de las empresas comercializadoras dependerá de la diferencia entre el valor al que adquieren la energía y el valor de venta al cliente.
        .col-md.tarjeta.color-custom-5.p-5(data-aos="fade-left") 
          .row.justify-content-center.mb-4
            .col-12
              figure
                img(src='@/assets/curso/images/tema9/ico_7.svg', alt="", style="width:180px; display:block; margin:0 auto;").mb-3
              
                p.text-center.text-white Cada empresa asigna libremente el valor en pesos por las actividades de comercialización en un componente denominado con la letra C, el cual es cobrado al cliente en la factura de energía con los demás componentes asociados al costo unitario del servicio.

    p.mb-3 Al mes de julio de 2021, existen registrados en total 130 comercializadores de energía eléctrica distribuidos en los diferentes departamentos del país. Las reglas de la comercialización de energía están contempladas en el Reglamento de Comercialización del servicio público de energía eléctrica expedido por la CREG en la resolución 156 de 2011.

    .row.justify-content-center.align-items-star.mb-5(data-aos="fade-left") 
      .col-lg-3
        p.mb-3 las empresas comercializadoras tienen la opción de comprar la energía en la bolsa y a través de la suscripción de contratos bilaterales.

        p.mb-3 En la siguiente tabla se muestran los precios promedio de compra de energía en la bolsa y los precios de los contratos.

        p.mb-3 Se debe tener en cuenta que estos valores corresponden solo al componente de generación (G) el cual es el único que se puede negociar en el mercado.

      .col-lg-9
        .tabla-a.color-acento-botones.mb-2
          table
            thead
              tr
                th.th-2.text-center  Fecha
                th.text-center.th-2 Precios de contratos - No regulado ($/kWh)
                th.text-center.th-2   Precios de Bolsa Nacional ($/kWh)
            tbody
              tr
                td.text-center.th-1  jul/2021
                td.text-center.th-1 212,55
                td.th-1.text-center 84,53


              tr
                td.text-center  jun/2021
                td.text-center  212,38
                td.text-center 90,5
           
              tr
                td.text-center.th-1  may/2021
                td.th-1.text-center  211,71
                td.text-center.th-1  99,69
    
              tr
                td.text-center  abr/2021
                td.text-center 207,69
                td.text-center 163,45
           
              tr
                td.text-center.th-1 mar/2021
                td.th-1.text-center  204,63
                td.text-center.th-1  166,16
              tr
                td.text-center feb/2021
                td.text-center  203,21
                td.text-center  272,63

              tr
                td.text-center.th-1  ene/2021
                td.text-center.th-1 196,61
                td.th-1.text-center 178,59

              tr
                td.text-center  dic/2020
                td.text-center  191,87
                td.text-center 161,2
           
              tr
                td.text-center.th-1  nov/2020
                td.th-1.text-center  191,61
                td.text-center.th-1  174,82
    
              tr
                td.text-center  oct/2020
                td.text-center 192,36
                td.text-center 194,14
           
              tr
                td.text-center.th-1 sep/2020
                td.th-1.text-center  190,53
                td.text-center.th-1  151,16
              tr
                td.text-center ago/2020
                td.text-center  190,43
                td.text-center  159,29

              tr
                td.text-center.th-1  jul/2020
                td.text-center.th-1 189,09
                td.th-1.text-center 156,99

              tr
                td.text-center  jun/2020
                td.text-center  189,96
                td.text-center 313,1
           
              tr
                td.text-center.th-1  may/2020
                td.th-1.text-center  190,27
                td.text-center.th-1  368,57
    
              tr
                td.text-center  abr/2020
                td.text-center 192,19
                td.text-center 255,71
           
              tr
                td.text-center.th-1 mar/2020
                td.th-1.text-center  191,51
                td.text-center.th-1  348,67

              tr
                td.text-center feb/2020
                td.text-center  190,93
                td.text-center  435,82

              tr
                td.text-center.th-1 ene/2020
                td.text-center.th-1  192,43
                td.text-center.th-1  332,56

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-11.mb-0.cs.mg-top-1
    .jumbotron-15.p-4
      .row.justify-content-center.align-items-center
        .col-4.col-lg-2
          img(src='@/assets/curso/images/tema9/ico_8.svg' alt='').mb-3
        .col-lg-9
          p.mb-3 De acuerdo con los valores mostrados, en los meses de enero del 2020 hasta junio del mismo año el precio de bolsa de la generación (G) es mayor que la de los contratos. Sin embargo, en los meses posteriores el precio de bolsa es menor que el precio de los contratos.

          p.mb-0 Como se puede observar los precios de la bolsa fluctúan constantemente ya que dependen de las condiciones climáticas y las condiciones sociales del entorno.Muchas empresas que consumen grandes cantidades de electricidad prefieren comprar la energía a un valor fijo y en un periodo de varios años, para garantizar que se cumplan sus presupuestos de gastos en energía sin depender de factores externos. Para tal fin, existen los contratos bilaterales.

      .row.justify-content-center.align-items-center.mt-5
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-custom-10.p-5(data-aos="fade-right") 
            .row.justify-content-center.mb-4
              .col-12
                figure
                  img(src='@/assets/curso/images/tema9/ico_10.svg', alt="", style="width:180px; display:block; margin:0 auto;").mb-3
                
                  p.text-center.text-white Los usuarios son las personas naturales o jurídicas quienes reciben y usan en sus domicilios el servicio de electricidad. 
          .col-md.tarjeta.color-custom-5.p-5(data-aos="fade-left") 
            .row.justify-content-center.mb-4
              .col-12
                figure
                  img(src='@/assets/curso/images/tema9/ico_11.svg', alt="", style="width:180px; display:block; margin:0 auto;").mb-3
                
                  p.text-center.text-white A cambio de la prestación del servicio, mensualmente reciben una factura donde se cobra un valor en pesos proporcional al consumo en kilovatioshora (kWh) de acuerdo con un precio unitario de pesos por kilovatiohora ($/kWh) pactado con la empresa comercializadora.

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-0    
    Separador 
    
    #t_9_3.titulo-segundo
      .h2 9.3 Usuarios regulados y no regulados
    

    p.mb-3 En Colombia los usuarios se dividen en dos clasificaciones: regulados y no regulados. El término “regulado” indica que el valor unitario de pesos por kilovatio hora es establecido o regulado por la CREG. En la siguiente tabla se resumen las características de cada tipo de usuario:

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="zoom-in-right")
      h5  Tabla 6.
      span  Longitud total de líneas de transmisión en Colombia a junio de 2021

    .row.justify-content-center.align-items-star.mb-5(data-aos="fade-left") 
      .col-lg-12
        .tabla-a.color-acento-botones.mb-2
          table
            thead
              tr
                th.th-2.text-center  
                th.text-center.th-2  Usuario regulado
                th.text-center.th-2  Usuario no regulado
     
            tbody
              tr
                td.text-center.th-1  <b>Consumo de electricidad</b>
                td.text-center.th-1 Cualquier valor de consumo. Incluso si el usuario supera los valores de consumo definidos por los no regulados, pero no realiza la solicitud de cambio.
                td.th-1.text-center Consumo mensual mayor a 55.000 kWh. Demanda máxima mayor a 100 kW. Solicitud del usuario para pertenecer al no regulado.

              tr
                td.text-center  <b>Clientes regulares</b>
                td.text-center  Residenciales, pequeños locales comerciales y pequeña industria.
                td.text-center Comercio y edificios de grandes superficies (centros comerciales, grandes almacenes de cadena, grandes edificios corporativos), industria mediana y grande.
           
              tr
                td.text-center.th-1  <b>Tarifa($/kWh)</b>
                td.th-1.text-center  Regulada por la CREG, publicada mensualmente en la página web del comercializador.
                td.text-center.th-1  Los componentes de Generación (G) y Comercialización (C) son libremente pactados entre el cliente y el comercializador. No se publican estos valores en la página web. Los demás componentes de la tarifa son regulados por la CREG.
    
              tr
                td.text-center  <b>Contrato</b>
                td.text-center Contrato de condiciones uniformes publicado en la página web del comercializador.
                td.text-center Contrato privado de condiciones particulares con duración fija.
           
              tr
                td.text-center.th-1 <b>Medición</b>
                td.th-1.text-center  Medidor de energía estándar sin equipo de comunicaciones. La lectura de la medición se realiza por lo general, con visita al sitio de instalación del medidor.
                td.text-center.th-1  Medidor de energía electrónico con equipo de comunicaciones que cumpla con las características definidas por la Resolución 038 de 2014 de la CREG. La lectura de la medición se realiza por telecomunicaciones.

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-11.mb-0.cs.mg-top-1

    p.mb-3 La ventaja de pertenecer a la categoría de usuario no regulado, es que por lo general (salvo en casos muy especiales) se obtiene un mejor precio por el valor unitario del kilovatio hora ($/kWh), permitiendo que se pague menos dinero por el consumo total facturado. Lo anterior se refleja en la siguiente figura donde se muestra el comportamiento del valor unitario promedio en el país durante los años 2016 a 2018 por departamento:

    .row.justify-content-center.mb-0
      .col-12.col-lg-7
        img(src='@/assets/curso/images/tema9/fig_5.svg')

        .row.mt-3
            .col-lg-12
              .jumbotron-5.p-2
                p.mb-0 Ministerio de Minas y Energía (2018) p. 104 https://www1.upme.gov.co/PromocionSector/SeccionesInteres/Documents/Boletines/Boletin_Estadistico_2018.pdf
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-0    
    Separador 
    
    #t_9_4.titulo-segundo
      .h2 9.4. Consumo nacional por tipo de usuario

    p.mb-3 El consumo de energía eléctrica determina la participación de los usuarios en el mercado y las transacciones realizadas en el sistema eléctrico nacional. En la siguiente figura se describe el porcentaje de participación por tipo de usuario en el año 2020, de acuerdo con los datos suministrados por XM (2020).

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="zoom-in-right")
      h5  Tabla 7.
      span  Porcentaje de participación por tipo de usuario en 2020

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-lg-6
        table
          thead
            tr
              th.th-2.text-center  Tipo de Usuario
              th.text-center.th-2  Demanda [GWh]
              th.text-center.th-2  Porcentaje de participación [%]
    
          tbody
            tr
              td.text-center.th-1  No Regulados
              td.text-center.th-1 21.053
              td.th-1.text-center 30 %

            tr
              td.text-center  Regulados
              td.text-center  48.973
              td.text-center 70 %
          
            tr
              td.text-center.th-1  Total Nacional
              td.th-1.text-center  70.026
              td.text-center.th-1  100 %
    
      .col-lg-4
          img.mb-4(src="@/assets/curso/images/tema9/fig_4.svg")
          
    p.mb-3.text-center Se observa una mayor demanda de energía para los clientes pertenecientes al mercado regulado.

    p.mb-3 Adicionalmente, de acuerdo con XM (2020), la distribución de consumo para los usuarios no regulados dependiendo de la actividad económica se muestra a continuación:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.lg-0
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr.th-2
                <th colspan="3"> <b>Participación de la demanda de energía eléctrica por sectores en los usuarios No Regulados</b></th>
              tr
                th.th-2.text-center Sector de la Economía
                th.th-2.text-center Demanda [GWh]
                th.th-2.text-center Porcentaje de participación [%]
              tr.th-5
                td.text-center.th-1 Industrias manufactureras
                td.text-center.th-1 8988,76
                td.text-center.th-1 43%
              tr
                td.text-center.th-3 Explotación de minas y canteras
                td.text-center.th-3 5286,55
                td.text-center.th-3 5286,55
              tr
                td.text-center.th-1  Servicios sociales, comunales y personales
                td.text-center.th-1   1487,84
                td.text-center.th-1  7%
              tr.th-5
                td.text-center.th-3 Construcción, alojamiento, información y comunicaciones
                td.text-center.th-3 1404,66
                td.text-center.th-3 7%
              tr
                td.text-center.th-1 Comercio al por mayor y al por menor; reparación de vehículos automotores y motocicletas
                td.text-center.th-1 1208,27
                td.text-center.th-1 6%
              tr
                td.text-center.th-3 Establecimientos financieros, seguros, inmuebles y servicios a las empresas
                td.text-center.th-3 1084,04
                td.text-center.th-3 5%
              tr
                td.text-center.th-1  Agricultura, ganadería, caza, silvicultura y pesca
                td.text-center.th-1  773,76
                td.text-center.th-1  4%
              tr.th-5
                td.text-center.th-3 Transporte y almacenamiento
                td.text-center.th-3 412,86
                td.text-center.th-3 2%
              tr
                td.text-center.th-1 Suministro de electricidad, gas, vapor y aire acondicionado
                td.text-center.th-1 406,26
                td.text-center.th-1 2%
              tr
                td.text-center.th-3 Total No Regulados
                td.text-center.th-3 21053
                td.text-center.th-3 100%

    p.mb-0.text-center Las industrias manufactureras y la explotación de minas y canteras se llevan la mayoría de la demanda de electricidad.
















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
