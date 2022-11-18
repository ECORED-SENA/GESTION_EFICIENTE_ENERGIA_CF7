export default {
  global: {
    componenteFormativo:
      'Recursos energéticos de acuerdo con su aprovechamiento, impacto ambiental y contexto',
    descripcionCurso:
      'En esta unidad se estudiarán fundamentalmente los diferentes tipos de recursos energéticos. El aprendiz conocerá las principales tecnologías para la producción de energía renovable y no renovable. Además, llegará a la comprensión de sus impactos ambientales y su relación con fenómenos como el cambio climático. Estos conceptos son necesarios para entender la importancia de los cambios actuales en el contexto energético.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.svg'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Termodinámica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Dimensiones y unidades',
            hash: 'encabezados',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Conceptos básicos',
            hash: 'parrafos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ley cero de la termodinámica',
            hash: 'botones',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'La primera ley de la termodinámica',
            hash: 'audio',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'La segunda ley de la termodinámica',
            hash: 'listas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Ciclos termodinámicos',
            hash: 'tablas',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Energía no renovable',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La industria del petróleoa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La industria del gas natural',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'La industria del carbón',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Eficiencia en los usos de la energía',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Energía renovable',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Energía solar',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Energía eólica',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Energía hidroeléctrica',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Energía geotérmica',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Energía oceánica',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: ' Energía de la biomasa',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: ' Hidrógeno verde',
            hash: 't_3_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.8',
            titulo:
              'Contexto mundial y colombiano - capacidad instalada de energías renovables',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Impacto ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Impactos ambientales de las fuentes de generación de energía',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Evaluación del impacto ambiental',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Cambio climático',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Huella de carbono',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo:
              'El efecto invernadero y gases de efecto invernadero (GEI).',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Enfoques para la determinación de la huella de carbono',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Factores de emisión para la huella de carbono corporativa',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo:
              'Pasos para el cálculo de la huella de carbono de una organización',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Servicios públicos domiciliarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Generalidades',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Marco normativo',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Regulación de los servicios públicos domiciliarios',
            hash: 't7_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.4',
            titulo: 'Vigilancia de los servicios públicos domiciliarios',
            hash: 't_7_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.5',
            titulo: 'Contrato de condiciones uniformes',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Mercado eléctrico mayorista (MEM)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Bolsa de energía o mercado de corto plazo',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo:
              'Mercado de contratos bilaterales o mercado de mediano y largo plazo',
            hash: 't_8_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.3',
            titulo: 'Regulación y disposiciones legales',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Cifras del sector eléctrico colombiano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo: 'Generación',
            hash: 't_9_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.2',
            titulo: 'Transmisión',
            hash: 't_9_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.3',
            titulo: 'Usuarios regulados y no regulados',
            hash: 't_9_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.4',
            titulo: 'Consumo nacional por tipo de usuario',
            hash: 't_9_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Agencia Nacional de Hidrocarburos ANH (2018). La cadena del sector hidrocarburos. ',
      link:
        'https://www.anh.gov.co/documents/722/cadenaProductivaHidrocarburos.pdf',
    },
    {
      referencia:
        'Agencia Nacional de Hidrocarburos ANH (2021). Datos y estadísticas.',
      link:
        'https://www.anh.gov.co/es/operaciones-y-regal%C3%ADas/datos-y-estadisticas/',
    },
    {
      referencia:
        'Arenas, F. (2020). Termodinámica técnica. Jorge Sarmiento Editor – Universitas. https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/174537',
    },
    {
      referencia:
        'Banco Bilbao Vizcaya Argentaria. (2021). Descubre qué es el hidrógeno verde: solución y desafío. BBVA.',
      link:
        'https://www.bbva.com/es/sostenibilidad/descubre-que-es-el-hidrogeno-verde-solucion-y-desafio/',
    },
    {
      referencia:
        'Banco Bilbao Vizcaya Argentaria. (2021). ¿Qué es la energía undimotriz? Descubre sus características. BBVA. ',
      link:
        'https://www.bbva.com/es/sostenibilidad/que-es-la-energia-undimotriz-descubre-sus-caracteristicas/',
    },
    {
      referencia:
        'Banco Bilbao Vizcaya Argentaria. (2021). Así funciona una central mareomotriz y genera energía. BBVA. ',
      link:
        'https://www.bbva.com/es/sostenibilidad/asi-funciona-una-central-mareomotriz-y-genera-energia/',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá. (2006). Cartilla ambiental para el subsector minería de carbón. ',
      link: 'https://bibliotecadigital.ccb.org.co/handle/11520/20492',
    },
    {
      referencia:
        'Cengel, Y. & Boles, M. (2015). Termodinámica (Octava ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Corporación Ambiental Empresarial. (2015). Factores de emisión considerados en la herramienta de cálculo de la huella de carbono corporativa. Versión 4.',
      link:
        'https://www.acueducto.com.co/wps/html/resources/2018ag/huella_carbono/informe_gei/6_anexo_3Factores_Emision_Herramienta_Inventario_GEI_EAB_2014.pdf',
    },
    {
      referencia:
        'Del Barrio, M., Bravo, E. y Lana, F. (2015). Termodinámica básica: ejercicios. Politècnica de Catalunya.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/61437',
    },
    {
      referencia:
        'Delgadillo, S. (2014). Termodinámica básica: 1er curso. Grupo Editorial Éxodo',
      link:
        ' https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/128554',
    },
    {
      referencia:
        'Departamento Nacional de Planeación DNP. (2019). Política de crecimiento verde. Documentos CONPES 3934 de 2018. Resumen Ejecutivo. Grupo de Comunicaciones y Relaciones Públicas DNP. p. 8. ',
      link:
        'https://www.dnp.gov.co/Crecimiento-Verde/Documents/Pol%C3%ADtica%20CONPES%203934/Resumen%20Pol%C3%ADtica%20de%20Crecimiento%20Verde%20-%20diagramaci%C3%B3n%20FINAL.pdf',
    },
    {
      referencia:
        'Enérgya, V. (2018). ¿Qué energía renovable es más eficiente?',
      link: 'https://www.fisicalab.com/tema/termodinamica-fisica',
    },
    {
      referencia:
        'Fundación Empresa Nacional de Electricidad Sociedad Anónima. (2013). Central hidroeléctrica. Fundación Endesa.',
      link:
        'https://www.fundacionendesa.org/es/centrales-renovables/a201908-central-hidroelectrica',
    },
    {
      referencia:
        'Gómez-Acebo, T. (2005, octubre). Termodinámica notas de clase. Universidad de Navarra. ',
      link:
        'https://dadun.unav.edu/bitstream/10171/5185/4/Termodinamica-UnivNavarra.pdf',
    },
    {
      referencia:
        'Iberdrola. (s.f.). El hidrógeno verde: una alternativa para reducir las emisiones y cuidar nuestro planeta.  ',
      link: 'https://www.iberdrola.com/sostenibilidad/hidrogeno-verde',
    },
    {
      referencia:
        'IDEAM, PNUD. (2015). Cartilla Inventario Nacional de Gases de Efecto Invernadero (GEI) de Colombia. Tercera comunicación nacional deL cambio climático de Colombia',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/023421/cartilla_INGEI.pdf',
    },
    {
      referencia:
        'International Institute for Sustainable Development. (2021). EIA: 7 pasos',
      link: ' https://www.iisd.org/learning/eia/es/eia-7-steps/',
    },
    {
      referencia:
        'International Renewable Energy Agency. (s.f.). Solar energy. IRENA.',
      link: 'https://www.irena.org/solar',
    },
    {
      referencia:
        'Jaramillo, O. (2008). Notas del curso termodinámica para ingeniería. Universidad Nacional Autónoma de México.',
      link: 'https://www.ier.unam.mx/~ojs/pub/Termodinamica/Termo.pdf',
    },
    {
      referencia:
        'Jiménez, J. A. y Gutiérrez, C. (2015). Termodinámica. Grupo Editorial Patria',
      link:
        ' https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39466',
    },
    {
      referencia:
        'Ley 142 de 1994. Por la cual se establece el régimen de los servicios públicos domiciliarios y se dictan otras disposiciones. Julio 11 de 1994. DO. No. 41.433.',
    },
    {
      referencia:
        'Ley 143 de 1994. Por la cual se establece el régimen para la generación, interconexión, transmisión, distribución y comercialización de electricidad en el territorio nacional, se conceden unas autorizaciones y se dictan otras disposiciones en materia energética. Julio 12 de 1994. DO. No. 41.434.',
    },
    {
      referencia:
        'Martín, A. (2015). Apuntes de los temas de termodinámica. Universidad Politécnica de Madrid. ',
      link: 'http://oa.upm.es/38735/1/amd-apuntes-termodinamica-v3_0.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2020). Listado de impactos ambientales específicos en el Marco del Licenciamiento Ambiental.',
      link:
        'http://www.andi.com.co/Uploads/listado-de-impactos-ambientales-espec%C3%ADficos-en-el-marco-del-licenciamiento-ambiental.pdf',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (2018). Boletín estadístico de Minas y Energía 2018. ',
      link:
        'https://www1.upme.gov.co/PromocionSector/SeccionesInteres/Documents/Boletines/Boletin_Estadistico_2018.pdf',
    },
    {
      referencia: 'PARATEC. (2021). Parámetros técnicos del SIN. XM.',
      link: ' http://paratec.xm.com.co/paratec/SitePages/default.aspx',
    },
    {
      referencia:
        'ProColombia. (2021). Hidrógeno verde, una alternativa para el futuro de la energía en Colombia.',
      link:
        'https://investincolombia.com.co/es/articulos-y-herramientas/articulos/hidrogeno-verde-una-alternativa-para-el-futuro-de-la-energia-en-colombia',
    },
    {
      referencia:
        'Resolución 156 de 2011. [Comisión de Regulación de Energía y Gas]. Por la cual se establece el Reglamento de comercialización del servicio público de energía eléctrica, como parte del Reglamento de operación. Noviembre 17 de 2011.',
    },
    {
      referencia:
        'Schallenberg, J., Piernavieja, G., Hernández, C., Unamunzaga, P., García, R., Díaz, M., Cabrera, D., Martel, G., Pardilla, J., y Subiela, V. (2008). Energías renovables y eficiencia energética (Primera ed.). Instituto Tecnológico de Canarias, S.A',
      link:
        ' https://www.cienciacanaria.es/files/Libro-de-energias-renovables-y-eficiencia-energetica.pdf',
    },
    {
      referencia:
        'Sistema de Información Minero Colombiano. (2021). Carbón-Producción. ',
      link:
        'https://www1.upme.gov.co/simco/Cifras-Sectoriales/Paginas/carbon.aspx',
    },
    {
      referencia:
        'Smink, V. (2021). Hidrógeno verde: 6 países que lideran la producción de una de las "energías del futuro" (y cuál es el único latinoamericano). BBC News.',
      link: 'https://www.bbc.com/mundo/noticias-56531777',
    },
    {
      referencia:
        'Superintendencia de Servicios Públicos. (2015). Superservicios para todos. Imprenta Nacional de Colombia. ',
      link:
        'https://www.superservicios.gov.co/sites/default/archivos/SSPD%20Publicaciones/Publicaciones/2018/Oct/superservicios_para_todos.pdf',
    },
    {
      referencia: 'TGI. (2021). ¿Cómo llega el gas a mi casa o negocio?',
      link:
        'https://www.tgi.com.co/industria-del-gas-natural/como-llega-el-gas-a-mi-casa-o-negocio',
    },
    {
      referencia:
        'The Intergovernmental Panel on Climate Change. (2011). Fuentes de energía renovables y mitigación del cambio climático. IPCC',
      link:
        ' https://www.ipcc.ch/site/assets/uploads/2018/03/srren_report_es-1.pdf',
    },
    {
      referencia:
        'Unidad de Planeación Minero-Energética, Pontificia Universidad Javeriana, Instituto Geográfico Agustín Codazzi, Departamento Administrativo de Ciencia, Tecnología e Innovación e Instituto de Hidrología, Meteorología y Estudios Ambientales. (2015). Capítulo 1 Hidroenergía. Atlas Potencial Hidroenergético de Colombia p. 25-36. UPME.',
      link: 'https://www1.upme.gov.co/Energia_electrica/Atlas/Atlas_p25-36.pdf',
    },
    {
      referencia:
        'Unidad de Planeación Minero-Energética. (2004). Una visión del mercado eléctrico colombiano. UPME ',
      link:
        'http://www.upme.gov.co/Docs/Vision_Mercado_Electrico_Colombiano.pdf',
    },
    {
      referencia:
        'Unidad de Planeación Minero-Energética. (2019). Primer balance de energía útil para Colombia. UPME',
      link:
        'https://www1.upme.gov.co/Hemeroteca/Paginas/estudio-primer-balance-energia-util-para-Colombia.aspx',
    },
    {
      referencia:
        'XM. (2020). Reporte integral de sostenibilidad, operación y mercado 2020. XM.',
      link: 'https://informeanual.xm.com.co/2020/informe/pages/home.html',
    },
  ],
  glosario: [
    {
      termino: 'ANH',
      significado:
        'Acrónimo que es utilizado para denotar la Agencia Nacional de Hidrocarburos.',
    },
    {
      termino: 'CRA',
      significado:
        'Acrónimo que es utilizado para denotar la Comisión de Regulación de Agua Potable y Saneamiento Básico.',
    },
    {
      termino: 'DNP',
      significado:
        'Acrónimo que es utilizado para denotar el Departamento Nacional de Planeación.',
    },
    {
      termino: 'IDEAM',
      significado:
        'Acrónimo que es utilizado para denotar el Instituto de Hidrología, Meteorología y Estudios Ambientales.',
    },
    {
      termino: 'PARATEC',
      significado:
        'Acrónimo que es utilizado para denotar la página web propiedad de XM con la información de Parámetros Técnicos del Sistema Interconectado Nacional.',
    },
    {
      termino: 'PNUD',
      significado:
        'Acrónimo que es utilizado para denotar el Programa de las Naciones Unidas para el Desarrollo.',
    },
    {
      termino: 'Superservicios',
      significado:
        'Acrónimo que es utilizado para denominar a la Superintendencia de Servicios Públicos Domiciliarios.',
    },
    {
      termino: 'TGI',
      significado:
        'Acrónimo que es utilizado para denotar a la Transportadora de Gas Internacional.',
    },
    {
      termino: 'UPME',
      significado:
        'Acrónimo que es utilizado para denotar a la Unidad de Planeación Minero-Energética.',
    },
  ],
  complementario: [
    {
      tema: 'Termodinámica',
      referencia:
        'Profesor de Ingeniería. (2016). Breve historia de la Termodinámica [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wiFkJebegwk',
    },
    {
      tema: 'Termodinámica',
      referencia:
        'Tecnológico de Monterrey. (2017). Máquinas de vapor y su uso como máquinas motrices [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=O6zrXWVPQdU',
    },
    {
      tema: 'Propiedades termodinámicas',
      referencia:
        'Universitat Politècnica de València - UPV. (2021). MOOC Primeros pasos termodinámica. Funciones de estado intensivas y extensivas [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=I_lLT-5JSIo&t=71s',
    },
    {
      tema: 'Propiedades termodinámicas',
      referencia:
        'LaMejorAsesoríaEducativa.(2019). Termodinámica. Conoce todas las propiedades termodinámicas [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=S7Hw_cB9k0M',
    },
    {
      tema: 'Propiedades termodinámicas',
      referencia:
        'LaMejorAsesoríaEducativa. (2019). Presión. Aprende termodinámica conociendo la presión [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4usW6kB_QBI&t=1192s ',
    },
    {
      tema: 'Propiedades termodinámicas',
      referencia:
        'LaMejorAsesoríaEducativa. (2019). Termodinámica. Aprende rápido y fácil todo sobre temperatura [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_7CMxhrSXaQ',
    },
    {
      tema: 'Estado',
      referencia:
        'Universitat Politècnica de València - UPV. (2021). MOOC Primeros pasos termodinámicos. ¿Cuándo está definida una propiedad? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=u8-ro-C6ZU4 ',
    },
    {
      tema: 'Energía',
      referencia:
        'Tecnológico de Monterrey. (2018). El calor y sus mecanismos de transferencia [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?app=desktop&v=hq5M-lTauFI',
    },
    {
      tema: 'Ciclos termodinámicos',
      referencia:
        'LaMejorAsesoríaEducativa. (2020). Termodinámica. Ciclo de Carnot [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6wEMLEtiKQY',
    },
    {
      tema: 'Ciclos termodinámicos',
      referencia:
        'LaMejorAsesoríaEducativa. (2020). Termodinámica. Ciclos termodinámicos de potencia y refrigeración [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8ikvY0SZ17o&t=230s ',
    },
    {
      tema: 'Aplicaciones / industria del petróleo.',
      referencia:
        'FuelsEurope (2014). Descubra los múltiples usos del petróleo y sus manifestaciones en la vida cotidiana [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yCnO7S3V2wE',
    },
    {
      tema: 'Infraestructura / industria del petróleo',
      referencia:
        'Agencia Nacional de Hidrocarburos ANH (2014). Cadena productiva de los hidrocarburos [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tkmgV1d80MI',
    },
    {
      tema: 'Aplicaciones / industria del gas natura',
      referencia:
        'Ecología Verde (2018). Qué es el gas natural y para qué sirve [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=q8YGbqSVrdE',
    },
    {
      tema: 'Infraestructura / industria del gas natural',
      referencia:
        'Gas Natural SA ESP (2016). Cadena del gas natural [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zzxIwKPqOoo',
    },
    {
      tema: 'La industria del carbón',
      referencia:
        'EnergiaDesdeAdentro (2014). El carbón ¿cómo se forma?, ¿qué es? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QkWetBP42ik',
    },
    {
      tema: 'Infraestructura / industria del carbón',
      referencia:
        'Curso Tutorial (2020). Energía del carbón. Tipos de carbón, métodos de extracción y cómo funcionan las centrales térmicas [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QLVx5tiJJhk&t=38s',
    },
    {
      tema: 'Energía renovable',
      referencia:
        'ISAGEN. (2014). Energías renovables en beneficio del planeta [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dLNCev0RMcQ',
    },
    {
      tema: 'Energía solar térmica',
      referencia:
        'Junkers Bosch. (2014). Energía solar térmica [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6eTad2KLO8Y',
    },
    {
      tema: 'Energía solar térmica - media temperatura',
      referencia:
        'Departamento de Física - Universidad de Burgos. (2018). E solar térmica - Sistema de media temperatura para generación eléctrica [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6RH8AP7X-5I',
    },
    {
      tema: 'Energía solar térmica - alta temperatura',
      referencia:
        'Agencia Andaluza de la Energía. (2014). Energía solar térmica de alta temperatura [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RPKMKPnXbug',
    },
    {
      tema: 'Energía solar fotovoltaica',
      referencia:
        'ACCIONA. (2015). ¿Qué es la energía solar fotovoltaica? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=h20bJDZCaC',
    },
    {
      tema: 'Energía solar fotovoltaica - sistema aislado',
      referencia:
        'SA AS ENERGY.  (2019). Qué es y cómo funciona un sistema fotovoltaico aislado [video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iDe5fHqhXmU',
    },
    {
      tema: 'Energía solar fotovoltaica – sistema distribuido',
      referencia:
        'Endesa Educa. (2015). La generación eléctrica distribuida [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AvJv-MLp9lk',
    },
    {
      tema: 'Energía solar fotovoltaica – sistema conectado a la red ',
      referencia:
        'SA AS ENERGY.  (2018). ¿Cómo funciona un sistema interconectado a la red de CFE? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4lgQCjnGl2U',
    },
    {
      tema: 'Energía solar fotovoltaica – sistema conectado a la red',
      referencia:
        'EOS Power. (2020). Cómo funciona un sistema solar con RED [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vHdpp7rDnGE ',
    },
    {
      tema: 'Energía eólica',
      referencia: 'Windyty SE. (2017). Windy [Aplicación móvil]. Google Play. ',
      tipo: 'Mapa de vientos',
      link: 'https://www.windy.com ',
    },
    {
      tema: 'Energía eólica -  tecnología',
      referencia:
        'ACCIONA. (2016). ¿Cómo funciona un aerogenerador? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kmN9qD8vXbY ',
    },
    {
      tema: 'Energía eólica -  algunas aplicaciones',
      referencia:
        'EcoInventos. (2019).13 turbinas sorprendentes que aspiran a escribir el futuro de la energía eólica. EcoInventos Green Technology',
      tipo: 'Página web',
      link: 'https://ecoinventos.com/turbinas-eolicas-sorprendentes/ ',
    },
    {
      tema: 'Energía hidroeléctrica - tecnología',
      referencia:
        'ACCIONA. (2017). ¿Cómo funciona la energía hidráulica? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Xx_Lxg4hCjc&t=1s ',
    },
    {
      tema: 'Energía hidroeléctrica – algunas aplicaciones',
      referencia:
        'MECATRÓNICA. (2021). Las centrales hidroeléctricas más grandes del mundo [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xHxsSMySgHk',
    },
    {
      tema: 'Energía geotérmica',
      referencia:
        'EcologíaVerde. (2020). Energía geotérmica ¿qué es y cómo funciona? [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SFf6k4OTslc ',
    },
    {
      tema: 'Energía geotérmica – algunas aplicaciones',
      referencia:
        'Departamento de Física - Universidad de Burgos. (2018). Electricidad geotérmica [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MHgmt56lpM8 ',
    },
    {
      tema: 'Energía geotérmica – algunas aplicaciones',
      referencia:
        'Girod Geotermia. (2009). Energía geotérmica en vivienda [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=m6om3dCH7Jk ',
    },
    {
      tema: 'Energía oceánica - mareomotriz',
      referencia:
        'Ecología Verde. (2020). ¿Qué es la energía mareomotriz? (cómo funciona, tipos y características[video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3G2u8XppHwI&t=12s',
    },
    {
      tema: 'Energía oceánica - undimotriz',
      referencia:
        'Centro de Estudios en Medio Ambiente y Energías Renovables (CEMAER). (2020). ¿Qué es la energía undimotriz? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aB1IxAWs0EI',
    },
    {
      tema: 'Energía oceánica – de las corrientes ',
      referencia:
        'Curso Tutorial. (2020). Energía de las corrientes marinas. ¿Cómo se obtiene energía del mar? ¿existen molinos en el mar? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=O-jUPSF2g1U',
    },
    {
      tema: 'Energía oceánica – gradiente térmico',
      referencia: 'TU Delft. (2016). OTEC [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FHBVgRWAt3c ',
    },
    {
      tema: 'Energía oceánica – gradiente de salinidad',
      referencia:
        'ACCIONA. (2018). Energía azul, a medio camino entre los ríos y el mar [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HJDEGxUaWx',
    },
    {
      tema: 'Energía de la biomasa',
      referencia:
        'ACCIONA (2014). ¿Cómo funciona la biomasa? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=F2z1w9Xho44&t=8s ',
    },
    {
      tema: 'Energía de la biomasa - aplicaciones',
      referencia:
        'Ecopetrol. (2016). Conoce el mayor complejo de producción de etanol de Colombia – Bioenergy [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8Fvd5r5g63o',
    },
    {
      tema: 'Energía de la biomasa - aplicaciones',
      referencia:
        'DW Español. (2018). Residuos fecales para producir carbón [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vW2EfDmQx_E ',
    },
    {
      tema: 'Energía de la biomasa - aplicaciones',
      referencia:
        'DW Español. (2013). Un pueblo genera electricidad, ¿un ejemplo para las ciudades? [video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZxUp4IcFWV0',
    },
    {
      tema: 'Hidrógeno verde',
      referencia:
        'Ministerio de Energía – Chile. (2020). Hidrógeno verde [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=P07sG-PNA6I ',
    },
    {
      tema: 'Hidrógeno verde – algunas aplicaciones',
      referencia:
        'JAES Company Español. (2021). ¿Cómo funcionan los coches de hidrógeno? [video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VJc6dxy_FJw ',
    },
    {
      tema: 'Hidrógeno verde – algunas aplicaciones',
      referencia:
        'Tendencias tecnológicas. (2019). El barco propulsado únicamente por hidrógeno y energías renovables | Energy Observer | PlanetSolar [video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6QamKVSPUGc ',
    },
    {
      tema: 'Hidrógeno verde – algunas aplicaciones',
      referencia:
        'DW Español. (2020). Japón apuesta por el hidrógeno como el combustible del futuro [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6QamKVSPUGc ',
    },
    {
      tema: 'Evaluación del impacto ambiental',
      referencia:
        'Autoridad Nacional de Licencias Ambientales (2020). Video de oferta institucional de la ANLA [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FfsB8Vfc2xU',
    },
    {
      tema: 'Evaluación del impacto ambiental',
      referencia:
        'International Institute for Sustainable Development (2021). EIA estudio de caso: minería - Colombia',
      tipo: 'Video',
      link:
        'https://www.iisd.org/learning/eia/es/wp-content/uploads/2016/06/ES-Case-Study-Colombia-Mining.pdf',
    },
    {
      tema: 'Efecto invernadero y gases de efecto invernadero (GEI)',
      referencia:
        'IDEAM Colombia (2016). ¿Qué es el Inventario nacional de gases de efecto invernadero? [video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=juPPvgIEWOE',
    },
    {
      tema: 'Regulación de los servicios públicos domiciliarios',
      referencia:
        'Comisión CREG (2021). La CREG en el sector energético colombiano [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9AB6BtNTM5s',
    },
    {
      tema: 'Regulación de los Servicios Públicos Domiciliarios.',
      referencia:
        'Cracolombia (2018). Y tú, ¿sabes qué hace y qué no hace la CRA? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xl7K4at6H1k',
    },
    {
      tema: 'Vigilancia de los servicios públicos domiciliarios',
      referencia:
        'Superservicios-SSPD (2020). Video institucional Superservicios 2020 [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HBpqUsrB7sU',
    },
    {
      tema: 'Contrato de condiciones uniformes',
      referencia:
        'Superservicios-SSPD (2016). ¿Qué es el contrato de condiciones uniformes? [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=h3qAGsKU38M&t=49s',
    },
    {
      tema: 'Contrato de condiciones uniformes',
      referencia:
        'En el Codensa (2021). Contrato de servicio público de energía eléctrica. ',
      tipo: 'Documento',
      link:
        'https://www.enel.com.co/content/dam/enel-co/espa%C3%B1ol/personas/1-11-5-normatividad-y-seguridad/4--contrato-de-condiciones-uniformes/contrato-servicio-publico-energia-electrica-2021.pdf',
    },
    {
      tema: 'Participantes del MEM',
      referencia:
        'XM SA ESP (2021). Descripción del sistema eléctrico colombiano.',
      tipo: 'Página web',
      link:
        'https://www.xm.com.co/Paginas/Mercado-de-energia/descripcion-del-sistema-electrico-colombiano.aspx',
    },
    {
      tema: 'Participantes del MEM',
      referencia: 'XM SA ESP. (2018). ¿Qué hace XM? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7MyAXAkP048',
    },
    {
      tema: 'Bolsa de energía o mercado de corto plazo',
      referencia:
        'Patrulla renovable. (2020). ¿Cómo se fija el precio de la electricidad? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eG0FgifDJLg&t=122s',
    },
    {
      tema: 'Estado',
      referencia:
        'Patrulla renovable. (2020). ¿Qué es un PPA? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RS6JouoclLg ',
    },
    {
      tema: 'Comercialización',
      referencia:
        'Codensa Energía (2021). Conoce cómo funciona el proceso de comercialización de energía de Enel-Colombia [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=spfmTv6SqRY',
    },
    {
      tema: 'Comercialización',
      referencia:
        'Energía de Pereira. (2016). Conoce el costo unitario de energía eléctrica [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LLm4NoSV3LI&t=16s',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Marlon Augusto Villamizar Morales',
        cargo: 'Experto técnico',
        centro: 'Global Green Growth Institute (GGGI)',
      },
      {
        nombre: 'Linda Díaz Rivera',
        cargo: 'Consultora',
        centro: 'Global Green Growth Institute (GGGI)',
      },
      {
        nombre: 'Carolina Arias',
        cargo: 'Diseñador instruccional',
        centro: ' Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: ' Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Edinson Eduardo Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodríguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
