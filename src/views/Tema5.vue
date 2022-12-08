<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 5
      h1 Cambio climático
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-1.m-top.mb-0.cs
    .row.justify-content-center.align-items-star.mb-5
      .col-lg-6(data-aos="fade-right")
        p.mb-5 Cuando se habla del medio ambiente y se quiere describir las condiciones naturales del entorno asociadas a un lugar específico, es necesario incluir en dicha descripción el tiempo atmosférico o meteorológico, el cual se define como el valor en el tiempo de la temperatura, la presión, el viento, la humedad y la precipitación.
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema5/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;").img-fluid  
            .list__txt  
              p.m-top.mx-2 El valor de estas variables cambia con el tiempo y dependen en general de la radiación solar y la composición de la atmósfera y estos factores a su vez dependen de la latitud, la altitud, orientación del relieve, continentalidad (distancia al mar) y corrientes oceánicas. 
        .list
          .list__item
            .list__item__icon
                img.img-a(src="@/assets/curso/images/tema5/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;")
            .list__txt    
              p.m-top.mx-2 El valor promedio de cada una de estas variables tomadas en lapsos de tiempo relativamente largos (30 años o más) se conoce como clima. 
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema5/rayo.svg", alt='', style="width:10px; display:block; margin:auto 0 ;") 
            .list__txt    
              p.m-top.mx-2 A pesar de ser un promedio, el clima también experimenta cambios naturales en la magnitud de sus variables.
        .list
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/images/tema5/rayo.svg" , alt='', style="width:10px; display:block; margin:auto 0 ;")
            .list__txt    
              p.m-top.mx-2 Cuando estos cambios no son debidos a factores naturales sino a efectos de la actividad humana se habla de cambio climático.

      .col-8.col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/images/tema5/img_1.svg')


    p.text-center.mb-3 Se invita a la revisión de la definición de cambio climático, así como sus causas y efectos, a partir de la siguiente información.

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5 
  
    h3.mb-5 Definición

    .row.justify-content-center.align-items-star.mb-5
      .col-6.col-lg-3(data-aos="fade-right")
        img(src='@/assets/curso/images/tema5/img_2.svg')
      .col-lg-9(data-aos="fade-left")
        p.mb-3 Según el Panel Intergubernamental de Expertos sobre el cambio climático (IPCC, 2013), el cambio climático es la “Variación del estado del clima identificable (por ejemplo, mediante pruebas estadísticas) en las variaciones del valor medio y/o en la variabilidad de sus propiedades, que persiste durante largos períodos de tiempo, generalmente decenios o períodos más largos”. 

        p.mb-0 Además, la Convención Marco de las Naciones Unidas sobre el Cambio Climático (CMNUCC), en su artículo 1, define el cambio climático como “cambio de clima atribuido directa o indirectamente a la actividad humana que altera la composición de la atmósfera global y que se suma a la variabilidad natural del clima observada durante períodos de tiempo comparables”.
       
    p.mb-3 Además, la Convención Marco de las Naciones Unidas sobre el Cambio Climático (CMNUCC), en su artículo 1, define el cambio climático como “cambio de clima atribuido directa o indirectamente a la actividad humana que altera la composición de la atmósfera global y que se suma a la variabilidad natural del clima observada durante períodos de tiempo comparables”.

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-8.mb-0.cs.mg-top-1
    .row.justify-content-center.align-items-star.mb-5
      .col-lg-7(data-aos="fade-left")
        .jumbotron-3.p-3.mt-5.mb-3
          p.mb-3 Actualmente se reconoce al científico sueco Svante Arrheniuss como el pionero en el estudio del cambio climático, especialmente de la temperatura, con la publicación en 1896 de su trabajo sobre “calentamiento global”.
        .jumbotron-3.p-3.mb-3
          p.mb-3 Confirmado en forma independiente por el geólogo estadounidense Thomas Chamberlain y en donde se relaciona el aumento de temperatura de la superficie del planeta con el aumento de la concentración en la atmósfera del dióxido de carbono (CO2). 
        .jumbotron-3.p-3.mb-3
          p.mb-3 Como el clima se define como un promedio a largo plazo (30 años mínimo), comprobar la teoría del calentamiento global tomó varias décadas y muchas discusiones sobre las causas y los efectos del cambio climático.
        .jumbotron-3.p-3
          p.mb-3 Para que finalmente la comunidad científica aceptara como un hecho la existencia del cambio climático y dentro de sus efectos más importantes, se encuentran 3 principales.

      .col-6.col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/images/tema5/img_3.svg')
      
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-0 

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-6(data-aos="fade-left")
        .jumbotron-4.p-3.mb-3
          p.mb-3 <b>Efecto 1:</b> Aumento de la temperatura global: Como lo indica el IPCC (2013), el aumento de la temperatura es un hecho irrefutable, y numerosos cambios observados desde la década de 1950 no han tenido precedentes en los últimos decenios. A escala mundial, la temperatura de la superficie terrestre ha tenido un incremento promedio de 0.8 ºC desde 1880 hasta hoy y se estima un aumento entre 2.8ºC y 5.6ºC en los próximos 80 años de continuar la tendencia actual, como se muestra en la siguiente gráfica:
          img(src='@/assets/curso/images/tema5/fig_1.svg').mb-3
          p.text-center Variación promedio de la temperatura global de la tierra.
      .col-lg-5(data-aos="fade-right")
        .jumbotron-4.p-3.mb-3
          p.mb-3 <b>Efecto 2:</b> Aumento del nivel del mar: A escala mundial, el nivel global del mar ha tenido un incremento promedio de 19 [cm] desde 1901 hasta 2010 y se estima un aumento entre 40 [cm] y 63 [cm] en los próximos 80 años de continuar la tendencia actual (ONU), como se muestra en la siguiente gráfica:
          img(src='@/assets/curso/images/tema5/fig_2.svg').mb-3
          p.text-center Variación promedio global del nivel del mar.
   
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-9.mb-0.cs.mg-top-1
    .row.justify-content-center.align-items-star.mb-5
      .col-lg-7(data-aos="fade-left")
          h3.mt-3 Efecto 3:
          p.mb-3 Pérdida de cobertura glaciar: Los análisis del IPCC (2013) indican que, desde mediados del siglo XX, la extensión del manto de nieve del hemisferio norte ha disminuido.

          p.mb-3 Los deshielos no sólo han afectado al Ártico, sino también a las zonas frías y con hielos perpetuos que se hallan en las zonas altas de montañas y volcanes. La cobertura de los glaciares montañosos y la nieve ha disminuido en ambos hemisferios: sólo en el norte, el área máxima cubierta por hielos estacionales se ha reducido cerca de 7% desde 1900. (Semarnat, 2009), como se muestra en la siguiente gráfica:
    
      .col-6.col-lg-5(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema5/fig_3.svg')
    .row.justify-content-center.align-items-star
      .col-lg-12(data-aos="fade-left")
        p.mt-0 En cuanto a las causas del cambio climático actualmente hay un acuerdo de la comunidad científica en atribuirlas al aumento de la concentración en la atmósfera de gases como el dióxido de carbono (CO2), metano (CH4), dióxido de nitrógeno (NO2) y otros, conocidos como gases de efecto invernadero.  
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-0 

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-10.mb-0.cs.mg-top-1
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="fade-left")
        h4.mt-4 Soluciones tecnológicas
        p.mb-3  Según el IPCC (2007), la sociedad puede adecuarse al cambio climático y sus impactos por medio de estrategias de adaptación, mitigación y geoingeniería.

        p.mb-0 as estrategias de adaptación son necesarias porque el cambio climático natural es impredecible y no puede evitarse y ante estas circunstancias es un hecho que las acciones preventivas son más efectivas y menos costosas que las correctivas. Un ejemplo de estrategia de adaptación al aumento del nivel del mar se muestra en la siguiente figura:
    
      .col-6.col-lg-4(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema5/fig_4.svg')

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-0 

    p.mb-3 De otra parte, están las estrategias de mitigación que hacen referencia a aquellas acciones encaminadas a disminuir las causas que producen el cambio climático, como por ejemplo, la denominada huella de carbono y cambiar de fuente primaria de energía no renovable (combustibles fósiles) a fuentes renovables como la solar, eólica, mareomotriz, geotérmica y nuclear. Revise a qué hacen alusión dichas fuentes:
    
    .row.justify-content-center.align-items-betwen.mb-5(data-aos="zoom-in-up")
      .col-lg-10.mb-lg-0.mb-3
        .jumbotron-11.p-4.mb-3
          .row.justify-content-center.align-items-center
            .col-4.col-lg-2
              img(src='@/assets/curso/images/tema5/ico_1.svg' , alt='', style="width:100px; display:block; margin:auto 0 ;")
            .col-lg-9
              p.mt-1 Colombia como país integrante de la ONU y en cumplimientos de los objetivos de desarrollo sostenible, en particular el “Objetivo 13: Adoptar medidas urgentes para combatir el cambio climático y sus efectos” ha implementado la Estrategia colombiana de desarrollo bajo en carbono (ECDBC) que es un programa liderado por el Ministerio de Ambiente y Desarrollo Sostenible (MADS), cuyo objetivo es evitar el crecimiento acelerado de las emisiones de GEI a medida que los sectores económicos crecen.

        .jumbotron-11.p-4.mb-3
          .row.justify-content-center.align-items-center
            .col-4.col-lg-2
              img(src='@/assets/curso/images/tema5/ico_2.svg' , alt='', style="width:100px; display:block; margin:auto 0 ;")
            .col-lg-9
              p.mt-1 Las estrategias de geoingeniería hacen referencia al desarrollo y uso de nuevas tecnologías para remover de la atmósfera los gases de efecto invernadero y para controlar el clima.

        .jumbotron-11.p-4.mb-3
          .row.justify-content-center.align-items-center
            .col-4.col-lg-2
              img(src='@/assets/curso/images/tema5/ico_3.svg' , alt='', style="width:100px; display:block; margin:auto 0 ;")
            .col-lg-9
              p.mt-1 Ejemplos de estas estrategias son la reforestación, aumento del consumo de dióxido de carbono (CO2) en los procesos biológicos del mar, aumento de la desintegración y ruptura de las rocas (meteorización) por reacción con el dióxido de carbono (CO2) atmosférico y manejo de la radiación solar.

        .jumbotron-11.p-4.mb-3 
          .row.justify-content-center.align-items-center
            .col-4.col-lg-2
              img(src='@/assets/curso/images/tema5/ico_4.svg' , alt='', style="width:100px; display:block; margin:auto 0 ;")
            .col-lg-9
              p.mt-1 Los Planes de Acción Sectorial de Mitigación para el Cambio Climático (PAS) que tienen como objeto identificar las prioridades de mitigación en los diferentes sectores económicos y sus medios de implementación para facilitar su integración en la planeación sectorial y lograr así la reducción de emisiones futuras y el programa de Uso Racional de la energía (URE).

        .jumbotron-11.p-4
          .row.justify-content-center.align-items-center
            .col-4.col-lg-2
              img(src='@/assets/curso/images/tema5/ico_5.svg' , alt='', style="width:100px; display:block; margin:auto 0 ;")
            .col-lg-9
              p.mt-1 Que es “el aprovechamiento óptimo de la energía en todas y cada una de las cadenas energéticas, desde la selección de la fuente energética, su producción, transformación, transporte, distribución, y consumo incluyendo su reutilización cuando sea posible, buscando en todas y cada una de las actividades, de la cadena el desarrollo sostenible” (Ley 697 de 2001).
















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
