<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Energía no renovable

    p.mb-5 Cuando se habla de fuentes de energía no renovables se refiere a los recursos energéticos que se encuentran en la naturaleza de manera limitada y no se pueden renovar, es decir, que en algún momento dejarán de estar disponibles para su extracción y uso. Los principales energéticos no renovables son:
    

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-3(data-aos="fade-right")
        .row.justify-content-center
          img(src='@/assets/curso/images/tema2/img_1.svg' ,  alt='', style="width:250px; display:block; margin:auto 0 ;").mb-3
          h5.text-center.my-4 Petróleo y sus derivados
    
      .col-6.col-lg-3(data-aos="fade-right")
        .row.justify-content-center
          img(src='@/assets/curso/images/tema2/img_2.svg',  alt='', style="width:230px; display:block; margin:auto 0 ;").mb-3
          h5.text-center.mb-3 Gas natural

      .col-6.col-lg-3(data-aos="fade-right")
        .row.justify-content-center
          img(src='@/assets/curso/images/tema2/img_3.svg',  alt='', style="width:280px; display:block; margin:auto 0 ;").mb-3
          h5.text-center.mb-3 Carbón
    
      .col-6.col-lg-3(data-aos="fade-right")
        .row.justify-content-center
          img(src='@/assets/curso/images/tema2/img_4.svg' ,  alt='', style="width:280px; display:block; margin:auto 0 ;").mb-2
          h5.text-center.mb-3 Energía nuclear
        
    .row.justify-content-center.align-items-center.mb-5
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-custom-4.p-5(data-aos="fade-right")  
          .row.justify-content-center.mb-4
            .col-12
              figure
                img(src='@/assets/curso/images/tema2/ico_1.svg', alt="", style="width:150px; display:block; margin:0 auto;").mb-3
              .row.justify-content-center
                .col-lg-12
                    p.text-center.text-white El petróleo, el gas natural y el carbón se denominan combustibles fósiles debido a que se encuentran en la naturaleza gracias a los procesos de descomposición de la materia orgánica ocurridos hace millones de años. Actualmente, se pretende reemplazar paulatinamente este tipo de energéticos porque su uso genera gases de efecto invernadero, que aumentan la temperatura global del planeta y producen gases contaminantes que afectan la salud de los ecosistemas y de la sociedad en general.
        .col-md.tarjeta.color-custom-5.p-5(data-aos="fade-left") 
          .row.justify-content-center.mb-4
            .col-12
              figure
                img(src='@/assets/curso/images/tema2/ico_2.svg', alt="", style="width:150px; display:block; margin:0 auto;").mb-3

                p.text-center.text-white La energía nuclear a nivel mundial es utilizada para la generación de electricidad en grandes centrales, ya que no emite gases de efecto invernadero; sin embargo, los residuos que genera son radioactivos y altamente contaminantes. Además, han ocurrido accidentes en donde como consecuencia grandes extensiones de tierra han tenido que ser evacuadas y no pueden volver a ser usadas. En Colombia no existen centrales de generación nuclear, pero, en las grandes potencias y en países como Brasil y Argentina existe este tipo de tecnología.
    Separador 
    #t_2_1.titulo-segundo
      .h2 2.1   La industria del petróleo

    .row.justify-content-center.align-items-center(data-aos="zoom-in-down")
      img(src='@/assets/curso/images/tema2/img_5_1.svg')(style="border-radius: 0; margin-left: 9rem; margin-right: 3rem; background-color: #fff" data-aos="fade")
    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #12263F" data-aos="fade")
      p.text-white El petróleo es un recurso natural de origen fósil que se encuentra de forma líquida en yacimientos subterráneos; para descubrir más sobre este recurso energético y sus aplicaciones se invita a que explore la siguiente información:

    p.mb-3 El petróleo pertenece a la familia de los Hidrocarburos y es denominado “oro negro” debido a su color y la importancia en todos los sectores de nuestra sociedad.

    .row.mb-3.ps-1(data-aos="zoom-in-down")
      .col-lg-1.bg-color-1
        .h4.mb-0.mx-3 Aplicaciones

    p.mb-3 El petróleo ha sido uno de los protagonistas fundamentales desde el siglo XIX en el desarrollo de los procesos industriales, el transporte y la generación de electricidad; además, sus derivados tienen gran cantidad de aplicaciones y sirven de insumo para muchos de los productos que usamos a diario. 

    p.mb-5 a. Aplicaciones industriales. En la siguiente tabla se muestran algunas de las aplicaciones industriales de los derivados del petróleo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-lg-11-lg-0
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.th-2  
                th.text-center.th-2   Vehículos y transporte
                th.text-center.th-2   Calefacción y motores
                th.text-center.th-2   Generación de electricidad
                th.text-center.th-2   Infraestructura
                th.text-center.th-2   Agricultura
            tbody
              tr
                td.text-center.th-1  <b>Gasolina</b>
                td.text-center.th-1 X
                td.th-1 
                td.th-1
                td.th-1 
                td.th-1 
              tr
                td.text-center  <b>Diesel</b>
                td.text-center  X
                td 
                td.text-center  X  
                td 
                td 
              tr
                td.text-center.th-1  <b>Gas Licuado de Petróleo</b>
                td.th-1 
                td.text-center.th-1  X  
                td.th-1
                td.th-1 
                td.th-1 

              tr
                td.text-center  <b>Asfaltos</b>
                td 
                td 
                td  
                td.text-center  X  
                td 

              tr
                td.text-center.th-1  <b>Lubricantes</b>
                td.th-1 
                td.text-center.th-1  X  
                td.th-1 
                td.th-1
                td.th-1 

              tr
                td.text-center  <b>Fertilizantes</b>
                td 
                td 
                td 
                td 
                td.text-center  X 

              tr
                td.text-center.th-1  <b>Plaguicidas </b> 
                td.th-1 
                td.th-1
                td.th-1 
                td.th-1 
                td.text-center.th-1  X 

    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-3.col-lg-1
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg").mb-3
                .col.mb-3.mb-sm-0
                  h5.text-white b. Aplicaciones comerciales
                  p.mb-1.text-white En el siguiente video se muestran algunas de las aplicaciones del petróleo en los elementos de la vida cotidiana:
                .col-md-auto
                  a.boton.color-custom-1(href="https://www.youtube.com/watch?v=q8YGbqSVrdE" target="_blank")
                    span Ver video
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_play.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")


    .row.mb-3.ps-1(data-aos="zoom-in-down")
      .col-lg-1.bg-color-1
        .h4.mb-0.mx-3 Infraestructura

    p.mb-3 De acuerdo con la Agencia Nacional de Hidrocarburos ANH (2018), la infraestructura asociada a la industria del petróleo es denominada también cadena del petróleo y se compone de las siguientes actividades, agrupadas en dos áreas llamadas Upstream y Downstream. En la siguiente figura se resumen las actividades de la cadena del petróleo.


    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-2(data-aos="fade-right")
        .row.justify-content-center
          img(src='@/assets/curso/images/tema2/img_6.svg' ,  alt='', style="width:250px; display:block; margin:auto 0 ;").mb-3
        .jumbotron-16.mt-2
          p.text-center Exploración sismica
    
      .col-6.col-lg-2(data-aos="fade-right")
        .row.justify-content-center
            img(src='@/assets/curso/images/tema2/img_7.svg',  alt='', style="width:230px; display:block; margin:auto 0 ;").mb-3
        .jumbotron-16
            p.text-center Exploración perforatoria

      .col-6.col-lg-2(data-aos="fade-right")
        .row.justify-content-center
            img(src='@/assets/curso/images/tema2/img_8.svg',  alt='', style="width:280px; display:block; margin:auto 0 ;").mb-3
        .jumbotron-16.mt-2
            p.text-center Producción
    
      .col-6.col-lg-2(data-aos="fade-right")
        .row.justify-content-center
            img(src='@/assets/curso/images/tema2/img_9.svg' ,  alt='', style="width:280px; display:block; margin:auto 0 ;").mb-3
        .jumbotron-16.mt-3
            p.text-center Refinación

      .col-6.col-lg-2(data-aos="fade-right")
        .row.justify-contencenter
            img(src='@/assets/curso/images/tema2/img_10.svg' ,  alt='', style="width:280px; display:block; margin:auto 0 ;").mb-3
        .jumbotron-16.mt-4
            p.text-center Transporte

      .col-6.col-lg-2(data-aos="fade-right")
        .row.justify-content-center
            img(src='@/assets/curso/images/tema2/img_11.svg' ,  alt='', style="width:280px; display:block; margin:auto 0 ;").mb-3
        .jumbotron-16.mt-4
            p.text-center Comercialización

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-left") 
      .col-12.col-md-12.col-lg-12.col-xl-10.mb-4
        .tabla-a
          tbody
            tr.th-2 
              <td rowspan="3"> <b><i>Upstream</i></b></td> 
              td.th-1 Exploración Sísmica
              td.th-1 Consiste en el reconocimiento de las capas de rocas que existen en el subsuelo a través de técnicas de emisión de ondas de sonido con generadores de energía. Las ondas viajan y rebotan por las diferentes capas de la tierra de tal manera que son registradas por instrumentos denominados geófonos. El producto de esta actividad es un estudio sísmico.
          
            tr
              td Exploración Perforatoria
              td Posterior al estudio sísmico se procede a realizar en el terreno analizado perforaciones con taladros especiales de tal manera que sea posible llegar hasta la capa de roca donde posiblemente exista un depósito de hidrocarburos.
        
            tr
              td.th-1 Producción
              td.th-1 Una vez confirmada la existencia de hidrocarburos en las diferentes capas de roca, se procede a instalar varios equipos que permiten la extracción del petróleo de manera continua hasta la superficie.
            
            tr.th-2 
              <td  rowspan="3"><b><i>Downstream</i></b></td> 
              td.th-3  Transporte
              td.th-3  Una vez el petróleo se extrae a la superficie, se procede a transportarlo desde el pozo hasta lo sitios de almacenamiento y procesamiento. El petróleo es conducido a través de tuberías (oleoductos), camiones o barcos.
                
            tr
              td.th-1  Refinación
              td.th-1 Es un proceso mediante el cual se le hace tratamiento térmico al petróleo para obtener sus derivados (gasolina, diesel, gas licuado de petróleo, etc.). El lugar donde se realiza este proceso se llama Refinería.
                
            tr
              td.th-3  Comercialización
              td.th-3 Consiste en la venta y distribución del petróleo y sus derivados a los clientes o usuarios. Normalmente de utiliza la figura de distribuidores mayoristas y distribuidores minoristas.
                            
    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  p.mb-1.text-white En el siguiente video de la Agencia Nacional de Hidrocarburos se explica con mayor detalle cada uno de los componentes de la cadena del petróleo:
                .col-md-auto
                  a.boton.color-custom-1(href="https://www.youtube.com/watch?v=zzxIwKPqOoo" target="_blank")
                    span Ver video
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_play.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")
             
    .row.mb-3.ps-1(data-aos="zoom-in-down")
      .col-lg-2.bg-color-1
        .h4.mb-0.mx-3 Cifras del sector

    p.mb-3 En las siguientes figuras se muestran las cifras y las tendencias del sector de acuerdo los datos estadísticos publicados por Agencia Nacional de Hidrocarburos ANH (2021).

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10(data-aos="zoom-in-down")
        img(src='@/assets/curso/images/tema2/fig_1.svg',)

    h3.mb-3 Reservas y producción de petróleo

    p.mb-3 En la figura anterior se observan los datos correspondiente a tres variables:

    p.mb-0 Reservas probadas de Petróleo en millones de barriles (MBls).

    p.mb-0 Producción anual de petróleo en millones de barriles (MBls).

    p.mb-3 Relación Reservas/Producción (R/P) en años. Esta cantidad permite determinar si se requieren más proyectos de exploración y producción. No se debe confundir con la cantidad de años en que se tendrá el recurso disponible. Normalmente se busca que este valor sea lo más alejado de uno (1).

    p.mb-3 Como se puede observar, las reservas probadas de petróleo en Colombia han venido decreciendo si se comparan con los años 2010 a 2014. Sin embargo, actualmente se están ejecutando varios proyectos de exploración que pueden hacer cambiar esta tendencia. Adicionalmente la producción anual ha decrecido en el año 2020 pero esto se debe a los efectos de la pandemia en la economía nacional. El valor más alto de R/P se produjo en el año 2009, mientras que el más bajo se registró en el año 2016.
    
    Separador

    #t_2_2.titulo-segundo
      .h2 2.2   La industria del gas natural

   
    .row.justify-content-center.align-items-center
    .tarjeta.color-acento-contenido.py-0(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #FFF" data-aos="fade")
      img(src='@/assets/curso/images/tema2/img_12.svg')
    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #FFCF3F" data-aos="fade")
      p.mb-0 El gas natural es un recurso natural de origen fósil que se encuentra en estado gaseoso en yacimientos subterráneos. Al igual que el petróleo pertenece a la familia de los hidrocarburos, pero difiere en su composición, ya que principalmente contiene metano. En los últimos años se ha venido incentivando el uso de este energético, debido a que es el recurso que genera menos emisiones de gases de efecto invernadero y gases contaminantes comparado con los demás hidrocarburos y el carbón, cuando es utilizado en los procesos de combustión. Otra ventaja adicional sobre el petróleo es que no necesita procesos de tratamiento o refinación para ser utilizado.

    .row.mb-3.ps-1(data-aos="zoom-in-down")
      .col-lg-2.bg-color-1
        .h4.mb-0.mx-3 Aplicaciones

    p.mb-3 Las principales aplicaciones del gas natural son:

    .row.aling-items-center.justify-content.strech.mb-4(data-aos="zoom-in-down")
      .col-11.col-md-3.col-lg.mb-5.mb-lg-0
        img(src='@/assets/curso/images/tema2/img_13.png'  alt='')
        .bg.p-2
          h4.text-center.mb-0 Generación de electricidad
        .bg-1.p-2
          p.mb-0.p-3 Existen centrales térmicas de gran capacidad que utilizan gas para producir electricidad mediante turbinas de gas o turbinas de vapor. La electricidad producida es inyectada al Sistema Interconectado Nacional.

      .col-11.col-md-3.col-lg.mb-5.mb-lg-0
        img(src='@/assets/curso/images/tema2/img_14.png'  alt='')
        .bg.p-2
          h4.text-center.mb-0 Transporte
        .bg-1.p-2
          p.mb-5.p-3 El gas natural se utiliza como combustible de automóviles particulares y de servicio público, también en autobuses y en los sistemas masivos de transporte de las ciudades.

      .col-11.col-md-3.col-lg.mb-5.mb-lg-0
        img(src='@/assets/curso/images/tema2/img_15.png'  alt='')
        .bg.p-2
          h4.text-center.mb-0 Residencial y comercial
        .bg-1.p-2.mb-3
          p.mb-5.p-3 Este recurso es muy utilizado en los hogares para el uso en las estufas, calentadores de agua y en calefacción de interiores y exterior en zonas climáticas con temperaturas bajas.

      .col-11.col-md-3.col-lg.mb-5.mb-lg-0
        img(src='@/assets/curso/images/tema2/img_16.png'  alt='')
        .bg.p-2
          h4.text-center.mb-0 Industrial
        .bg-1.p-2
          p.mb-5.p-3 El gas natural es utilizado en diferentes procesos y equipos en la industria tales como calderas de vapor, secadores, hornos, sistemas de cogeneración, entre otros.

    p.mb-3 Como complemento a la información se invita a que ahora observe el siguiente video.

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h3.text-white  ¿Qué es el gas natural y para qué sirve?
                  p.mb-1.text-white Se explica acerca de la producción del gas natural, y cómo ha servido en las comunidades humanas.
                .col-md-auto
                  a.boton.color-custom-1(href="https://www.youtube.com/watch?v=QkWetBP42ik" target="_blank")
                    span Ver video
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_play.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    .row.mb-3.ps-1(data-aos="zoom-in-down")
      .col-lg-2.bg-color-1
        .h4.mb-0.mx-3 Infraestructura

    p.mb-3 La infraestructura de la industria del gas comparte con el petróleo las actividades de exploración sísmica y exploración perforatoria. De acuerdo con TGI (2021) las principales actividades de la cadena del gas natural son:

    AcordionA(data-aos="fade-down-right").mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Producción")
        .col-lg-3.lg-0
          img(src='@/assets/curso/images/tema2/img_17.png'  alt='').mb-3
        .col-md-12.mb-4.mb-md-0.ps3
          p.mb-0 Después de la exploración sísmica y exploratoria, el gas es llevado a la superficie para posteriormente pasar por un proceso de limpieza. Luego se lleva a un sistema de compresión (estación de compresión) donde se eleva la presión para ser conducida a las tuberías de transporte.
      .row(titulo="Transporte")
        .col-lg-3.lg-0
          img(src='@/assets/curso/images/tema2/img_18.png'  alt='').mb-3
        .col-md-12.mb-4.mb-md-0.ps-3
          p.mb-0 Consiste en llevar el gas a alta presión a través de kilómetros de tuberías denominadas gasoductos hacia los centros de distribución y directamente hacia los grandes usuarios como los generadores de energía eléctrica y grandes industrias.

      .row(titulo="Distribución")
        .col-lg-3.lg-0
          img(src='@/assets/curso/images/tema2/img_19.png'  alt='').mb-3
        .col-md-12.mb-4.mb-md-0.ps-3
          p.mb-0 En esta actividad se baja la presión del gas a través de equipos especiales y se adiciona un olor característico (proceso de odorización) para garantizar la seguridad de las personas. El gas es llevado hacia los usuarios finales a través de tuberías de menor diámetro que atraviesan las ciudades y pueblos.
          
      .row(titulo="Comercialización")
        .col-lg-3.lg-0
          img(src='@/assets/curso/images/tema2/img_20.png'  alt='').mb-3
        .col-md-12.mb-4.mb-md-0.ps-3
          p.mb-0 Es el proceso mediante el cual los consumidores adquieren el gas natural para su consumo. A contraprestación, el usuario recibe una factura con el valor de consumo en metros cúbicos, el valor unitario de pesos por metro cúbico ($/m3) y el valor total a pagar en pesos.


    p.mb-3 Se invita a consultar el siguiente video donde se ilustra con más detalle la infraestructura de la cadena del gas natural.


    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h3.text-white  Cadena del gas natural
                  p.mb-1.text-white Conozca todo el recorrido que hace el gas natural para llegar a los hogares.
                .col-md-auto
                  a.boton.color-custom-1(href="https://www1.upme.gov.co/simco/Cifras-Sectoriales/Paginas/carbon.aspx" target="_blank")
                    span Ver video
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_play.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")


    .row.mb-3.ps-1(data-aos="zoom-in-down")
      .col-lg-2.bg-color-1
        .h4.mb-0.mx-3 Cifras del sector

    p.mb-3 En las siguiente gráfica se muestran las cifras y las tendencias del sector de acuerdo con los datos estadísticos publicados por la Agencia Nacional de Hidrocarburos ANH (2021).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in-down")
        img(src='@/assets/curso/images/tema2/fig_2.svg',)

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-6(data-aos="fade-right")
        p.mb-3 En la gráfica anterior se observan los datos correspondientes a tres variables:
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;")
          .list__txt    
            p.m-top.mx-2 Reservas probadas de gas natural en giga pies cúbicos (Gpc).
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;") 
          .list__txt    
            p.m-top.mx-2 Producción anual comercializada de gas natural en giga pies cúbicos (Gpc).
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg" , alt='', style="width:10px; display:block; margin:auto 0 ;")
          .list__txt    
            p.m-top.mx-2 Relación reservas/producción (r/p) en años. Esta cantidad permite determinar si se requieren más proyectos de exploración y producción. No se debe confundir con la cantidad de años en que se tendrá el recurso disponible. Normalmente se busca que este valor sea lo más alejado a (1).

        p.mb-3 Como se puede observar, las reservas actuales probadas de gas natural en Colombia han venido decreciendo si se comparan con los años 2010 a 2013; sin embargo, actualmente se están ejecutando varios proyectos de exploración que pueden hacer cambiar esta tendencia. Adicionalmente, la producción anual comercializada ha decrecido paulatinamente desde el año 2014 hasta el año 2020. El valor más alto de R/P se produjo en el año 2011, mientras que el más bajo se registró en el año 2020.
      .col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/images/tema2/img_21.png',)
      
      
    Separador

    #t_2_3.titulo-segundo
      .h2 2.3  La industria del carbón

    .row.justify-content-center.align-items-center
    .tarjeta.color-acento-contenido.py-0(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #FFF" data-aos="fade")
      img(src='@/assets/curso/images/tema2/img_22.svg')
    .tarjeta.color-acento-contenido.py-4.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background-color: #12263F" data-aos="fade")
      p.text-white.mb-0 El carbón es una roca de origen vegetal que se encuentra acumulada en yacimientos (lugar de acumulación natural durante millones de años de minerales en grandes cantidades) y que, por su alto contenido en carbono y potencial energético, es usado como combustible. El carbón se extrae por dos métodos principales: la minería subterránea y la minería de superficie. Aunque ha sido una fuente de energía utilizada desde hace muchos años, en la actualidad se pretende disminuir el uso del carbón, debido a que es un combustible fósil que produce gran cantidad de gases de efecto invernadero y material particulado contaminante durante la combustión. 


    p.mb-3 Se invita a consultar el siguiente video donde se explica con más detalle el origen del carbón.


    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="zoom-in-down")
        .tarjeta.color-custom.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col
              .row.justify-content-between.align-items-center
                .col-lg-2
                  img.mx-1(src="@/assets/curso/images/tema1/ico_video.svg",  alt='', style="width:80px; display:block; margin:auto 0 ;").mb-3
                .col.mb-3.mb-sm-0
                  h3.text-white  El carbón, ¿qué es? y ¿cómo se forma?
                  p.mb-1.text-white Paso a paso del origen del carbón y de qué está compuesto.
                .col-md-auto
                  a.boton.color-custom-1(href="https://www.youtube.com/watch?v=dLNCev0RMcQ" target="_blank")
                    span Ver video
                    .row
                      .col-auto
                        img.mx-2(src="@/assets/curso/images/tema1/ico_play.svg",  alt='', style="width:20px; display:block; margin:auto 0 ;")

    .row.mb-3.ps-1(data-aos="zoom-in-down")
      .col-lg-2.bg-color-1
        .h4.mb-0.mx-3 Aplicaciones


    .row.justify-content-center.align-items-star.mb-3
      .col-lg-6(data-aos="fade-right")
        p.mb-3 De forma similar al petróleo, el carbón en nuestra sociedad tiene una gran cantidad de aplicaciones debido a que desde el Siglo XIX ha sido uno de los principales minerales utilizados para la generación de electricidad, el transporte en barcos y trenes, y posee características químicas para la producción de elementos de uso cotidiano. Actualmente las principales aplicaciones del carbón son las siguientes:
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;").img-fluid  
          .list__txt  
            p.m-top.mx-2 Generación de electricidad en centrales térmicas. 
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;")
          .list__txt    
            p.m-top.mx-2 Generación de vapor de agua para procesos industriales.
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;") 
          .list__txt    
            p.m-top.mx-2 Fabricación del acero y el cemento.
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema2/rayo.svg" , alt='', style="width:10px; display:block; margin:auto 0 ;")
          .list__txt    
            p.m-top.mx-2 Hornos para la producción de ladrillos.

      .col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/images/tema2/img_23.png',)


    .row.mb-3.ps-1(data-aos="zoom-in-down")
      .col-lg-2.bg-color-1
        .h4.mb-0.mx-3 Infraestructura

    p.mb-5 Las actividades que hacen parte de la cadena del carbón en Colombia son las siguientes:

    AcordionA(data-aos="fade-down-right").mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Prospección")
        .col-lg-3.lg-0
          img(src='@/assets/curso/images/tema2/img_24.png'  alt='').mb-3
        .col-md-12.mb-4.mb-md-0.ps-3
          p.mb-0 Consiste en la identificación de posibles fuentes de carbón para el desarrollo de un proyecto minero.
      .row(titulo="Exploración")
        .col-lg-3.lg-0
          img(src='@/assets/curso/images/tema2/img_25.png'  alt='').mb-3
        .col-md-12.mb-4.mb-md-0.ps-3
          p.mb-0 En esta parte de la cadena se pretende hacer una identificación de las características geológicas de un yacimiento. Consiste en la realización de manera secuencial de las siguientes actividades: geología superficial, geología del subsuelo, elaboración del modelo geológico del yacimiento y programación de trabajos y obras requeridos.

      .row(titulo="Construcción y montaje de obras")
        .col-lg-3.lg-0
          img(src='@/assets/curso/images/tema2/img_26.png'  alt='').mb-3
        .col-md-12.mb-4.mb-md-0.ps-3
          p.mb-0 Consiste en la construcción de la infraestructura (carreteras, edificaciones, maquinaria, recursos humanos, etc) necesaria para realizar la extracción, almacenamiento y transporte del carbón.
          
      .row(titulo="Comercialización")
        .col-lg-3.lg-0
          img(src='@/assets/curso/images/tema2/img_27.png'  alt='').mb-3
        .col-md-12.mb-4.mb-md-0.ps-3
          p.mb-0 Se refiere a todas las actividades que conllevan las operaciones de compra y venta del carbón al comprador o usuario final.

      .row(titulo="Cierre y abandono")
        .col-lg-3.lg-0
          img(src='@/assets/curso/images/tema2/img_28.png'  alt='').mb-3
        .col-md-12.mb-4.mb-md-0.ps-3
          p.mb-0 Una vez se haya cumplido con los plazos para la extracción del proyecto carbonífero, se debe elaborar y ejecutar un plan de cierre de la mina de acuerdo con la normativa ambiental y social solicitada por las autoridades competentes.

    .row.mb-3.ps-1(data-aos="zoom-in-down")
      .col-lg-2.bg-color-1
        .h4.mb-0.mx-3 Cifras del sector

    p.mb-5 En la siguiente figura se muestran las cifras de producción del sector de acuerdo con los datos estadísticos publicados por el Sistema de Información Minero Colombiano (2021).


    .titulo-sexto.color-acento-contenido.mb-5(data-aos="zoom-in-right")
      h5  Figura 1.
      span   Datos de la producción anual de carbón en Colombia


    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.lg-0
        .tabla.color-acento-botones.mb-5
          table
            thead
              tr.th-2
                <th colspan="2"> <b>Producción anual de Carbón </b></th> 
              tr
                th.th-4.text-center.text-white Año  
                th.text-center.th-4.text-white  Producción [millones de toneladas]      
              tr
                td.text-center.th-3 2012
                td.text-center.th-3 89.812.004      
              tr
                td.text-center.th-1  2013
                td.text-center.th-1   86.022.501
              tr
                td.text-center.th-3  2014
                td.text-center.th-3 89.411.997
              tr
                td.text-center.th-1   2015
                td.text-center.th-1   86.469.676
              tr
                td.text-center.th-3  2016
                td.text-center.th-3    91.177.596
              tr
                td.text-center.th-1   2017
                td.text-center.th-1  91.276.130           
              tr
                td.text-center.th-3    2018
                td.text-center.th-3    86.317.276     
              tr
                td.text-center.th-1  2019
                td.text-center.th-1  84.918.140
              tr
                td.text-center.th-3    2020 
                td.text-center.th-3    49.463.033
     
          
      .col-lg-8(data-aos="zoom-in-down")
        img(src='@/assets/curso/images/tema2/fig_3.svg',)

    p.mb-3 En la figura anterior se observan los datos correspondientes a la producción anual de carbón en Colombia (en millones de toneladas) desde el año 2012 hasta el año 2020. Las cifras de producción se mantienen en valores regulares entre 84.000 y 91.000 toneladas al año; sin embargo, para el año 2020 la producción disminuyó cerca de un 40% con respecto al año anterior, debido a las restricciones de movilidad implantadas por la mitigación de la propagación de la pandemia del Covid 19 y por una huelga de trabajadores que duró cerca de tres meses.

    p.mb-3 Nota. Tomado del Sistema de Información Minero Colombiano (2021).

    Separador

    #t_2_4.titulo-segundo
      .h2 2.4 Eficiencia en los usos de la energía

    p.mb-3 La eficiencia dentro de un proceso de transformación de energía es una cantidad por lo general expresada en porcentaje, obtenida a partir de la división entre la energía de salida y la energía de entrada requerida para producirla.  Hay mucho más por descubrir, por ello, se invita a que explore la siguiente información:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .tarjeta.bg_grad-01.p-4.mb-5(data-aos="zoom-in-up")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-5
                p.mb-3 Mientras esta cantidad sea igual o muy cercana al 100%, se puede afirmar que el proceso es eficiente, pero si dicha cantidad se aleja del 100% significa que se presentan pérdidas considerables en el proceso de transformación.
              .col-md-10.col-lg.mb-5.mb-lg-0 
                img(src="@/assets/curso/images/tema2/img_29.svg").mb-3
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-5
                p.mb-3 Por ejemplo, si se tiene una estufa alimentada con gas natural con una eficiencia del 60%, y se utiliza para calentar agua a 100 centígrados, quiere decir que solo el 60% de la energía del gas natural a la entrada de la estufa se convertirá en energía para calentar el agua y el 40% de energía restante se pierde en el proceso de combustión, en el ambiente y en el calentamiento de los demás elementos que componen la estufa. A este 40% normalmente se le denomina porcentaje de pérdidas.
              .col-md-10.col-lg.mb-5.mb-lg-0 
                img(src="@/assets/curso/images/tema2/img_30.png").mb-3
            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-5
                p.mb-3 De acuerdo con Unidad de Planeación Minero-Energética UPME (2021) en el estudio denominado Primer balance de energía útil para Colombia, se pueden determinar de forma general un promedio de eficiencias de las energías primarias para un uso específico.
              .col-md-10.col-lg.mb-5.mb-lg-0 
                img(src="@/assets/curso/images/tema2/img_31.png").mb-3 

            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-6
                p.mb-3 Se puede observar que para el calentamiento de agua en el sector residencial, el calentador de paso eléctrico tiene mayor eficiencia que los demás. Sin embargo, debido a que en muchos lugares y en los estratos medios y altos de la economía el valor unitario de la electricidad es más costoso que el del gas natural, se procura utilizar calentadores de paso a Gas para esta aplicación. El equipo menos eficiente para calentar agua es el calentador de acumulación eléctrico.
              .col-md-12.col-lg.mb-5.mb-lg-0 
                .jumbotron-2.p-4
                  h3.text-white.text-center Calentamiento de agua en sector residencial
                  .row.justify-content-center.align-items-center.mb-0
                    .col-lg-12.lg-0.mb-3
                        table
                          thead
                            tr
                              th.th-2.text-center Equipo  
                              th.text-center.th-2 Energético  
                              th.text-center.th-2 Factor de eficiencia actual [%]      
                            tr
                              td.text-center.th-1  Calentador de paso a gas 
                              td.text-center.th-1 Gas natural 
                              td.text-center.th-1   83%
                            tr
                              td.text-center.th-3  Gas natural 
                              td.text-center.th-3   Gas natural de petróleo GLP 
                              td.text-center.th-3   83%
                            tr
                              td.text-center.th-1  Calentador de paso eléctrico
                              td.text-center.th-1 Electricidad 
                              td.text-center.th-1  90%
                            tr
                              td.text-center.th-3  Calentador de acumulación eléctrica
                              td.text-center.th-3 Electricidad 
                              td.text-center.th-3   70%
  
                    p.text-white.mb-0 Unidad de Planeación Minero Energética UPME. (2019). Primer balance de energía útil para Colombia. Recuperado el 10 de agosto de 2021, de https://www1.upme.gov.co/Hemeroteca/Paginas/estudio-primer-balance-energia-util-para-Colombia.aspx


            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-6
                p.mb-3 Se puede observar que para el uso del calor directo para cocción, la opción con mayor eficiencia es la estufa eléctrica, sin embargo, debido a que en muchos lugares y en los estratos medios y altos de la economía el valor unitario de la electricidad es más costoso que el del gas natural, se procura utilizar estufas alimentadas por Gas Natural. A pesar de que el energético menos eficiente para cocción de alimentos es la leña, su uso en Colombia aún es considerable debido a que existen zonas apartadas que no cuentan con acceso a electricidad, gas natural o GLP.
              .col-md-12.col-lg.mb-5.mb-lg-0 
                .jumbotron-2.p-4
                  h3.text-white.text-center Calor directo para cocción en sector residencial
                  .row.justify-content-center.align-items-center.mb-0
                    .col-lg-12.lg-0.mb-3
                        table
                          thead
                            tr
                              th.th-2.text-center Equipo  
                              th.text-center.th-2 Energético  
                              th.text-center.th-2 Factor de eficiencia actual [%]   
                            tr.th-5
                              <th rowspan="6"> <b>Estufa</b></th> 
                               
                            tr
                              td.text-center.th-1  Leña
                              td.text-center.th-1 15 % 
              
                            tr
                              td.text-center.th-3  Carbon leña (estufa eficiene)
                              td.text-center.th-3   30 % 
                     
                            tr
                              td.text-center.th-1  Gas natural
                              td.text-center.th-1 57 % 
                        
                            tr
                              td.text-center.th-3  Gas natural de petróleo (GLP)
                              td.text-center.th-3 59 % 
             
                            tr
                              td.text-center.th-3  Electricidad
                              td.text-center.th-3 70 % 

                    p.text-white.mb-0 Unidad de Planeación Minero Energética UPME. (2019). Primer balance de energía útil para Colombia. Recuperado el 10 de agosto de 2021, de https://www1.upme.gov.co/Hemeroteca/Paginas/estudio-primer-balance-energia-util-para-Colombia.aspx

            .row.justify-content-center.align-items-star.p-3
              .col-12.col-lg-6
                p.mb-3 Se puede observar que las eficiencias para cualquier tipo de energético en el transporte privado son muy bajas y no superan el 34%. Si se toma el caso de las camionetas, el energético con mayor eficiencia es el Gas Natural, por esta razón muchos usuarios han realizado la conversión de gasolina a Gas Natural. Para el caso de los automóviles las eficiencias con muy cercanas entre cada tipo de energético. Debido a que las eficiencias en los vehículos de pasajeros son muy bajas, se está dando impulso a la movilidad eléctrica.
              .col-md-12.col-lg.mb-5.mb-lg-0 
                .jumbotron-2.p-4
                  h3.text-white.text-center Vehículos privados de pasajeros
                  .row.justify-content-center.align-items-center
                    .col-lg-12.lg-0.mb-3
                        table
                          thead
                            tr.th-2
                              <th rowspan="2"> Energético </th>
                              <th colspan="3"> <b>Eficiancia promedio nivel nacional (%)</b></th>
                            tr
                              th.th-2.text-center Automovil 
                              th.th-2.text-center Camioneta 
                              th.th-2.text-center Motocicleta
                            tr.th-5
                              td.text-center.th-1 Diesel
                              td.text-center.th-1 27 %
                              td.text-center.th-1 23 %
                              td.text-center.th-1 25 %
                            tr
                              td.text-center.th-3  Gasolina 
                              td.text-center.th-3 25 % 
                              td.text-center.th-3 21 % 
                              td.text-center.th-3 23 %
                            tr
                              td.text-center.th-1  Gas natural 
                              td.text-center.th-1 26 % 
                              td.text-center.th-1 34 % 
                              td.text-center.th-1 8 % 
                          

                    p.text-white.mb-0 Unidad de Planeación Minero Energética UPME. (2019). Primer balance de energía útil para Colombia. Recuperado el 10 de agosto de 2021, de https://www1.upme.gov.co/Hemeroteca/Paginas/estudio-primer-balance-energia-util-para-Colombia.aspx









































</template>

<script>
export default {
  name: 'Tema2',
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
