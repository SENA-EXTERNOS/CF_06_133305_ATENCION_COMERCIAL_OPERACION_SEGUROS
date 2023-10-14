export default {
  global: {
    componenteFormativo:
      'Preparación, análisis y presentación de datos masivos',
    descripcionCurso:
      'En este componente, se indica cómo, los procesos de gestión de datos masivos, son necesarios para la toma de decisiones y la buena gestión. Para tal fin, se requiere de una metodología estructurada que consiste en la identificación, el análisis y la depuración de la información recopilada, que permita definir un modelo de datos relacional y poder hacer representaciones gráficas de los datos procesados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        titulo: 'La organización  ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características y tipos de las organizaciones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Reglas y políticas de negocio',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ciencia de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Técnicas de análisis de datos y modelos analíticos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Minería de datos, métodos de recopilación e integración de datos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Preparación de datos estructurados y ecosistemas de datos abiertos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estadística',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Bases de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Técnicas de gestión de bases de datos masivos ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Derechos de autor',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: 'Técnicas de gestión de bases de datos masivos',
      referencia:
        'La revista del mundo científico (2014). <i>Big Data: Encuesta, Tecnologías, Oportunidades y Desafíos</i>. Hindawi.',
      tipo: 'Artículo',
      link: 'http://dx.doi.org/10.1155/2014/712826',
    },
    {
      tema: 'Técnicas de gestión de bases de datos masivos',
      referencia:
        'Martínez, R. (2017). Cuestiones de ética jurídica al abordar proyectos de <i>Big Data. El contexto del Reglamento general de protección de datos</i>, (24), p. 151-164.',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6066833',
    },
    {
      tema: 'Ciencia de datos',
      referencia:
        'Carrizo, D. & Rojas, J. (2018). Metodologías, técnicas y herramientas en ingeniería de requisitos: un mapeo sistemático. <i>Ingeniare, 26</i>(3), p. 473-485.',
      tipo: 'Artículo',
      link: 'http://dx.doi.org/10.4067/S0718-33052018000300473',
    },
    {
      tema: 'Ciencia de datos',
      referencia:
        'Bonfante, M., Blanquicett, L., Díaz, E. & Guerra, C. (2018). Modelo de Referencia para la Integración del Modelado de Negocios a la Ingeniería de Requerimientos: Una Propuesta de la Industria del <i>Software. Revista chilena de Ingeniería, 26</i>(4), p. 645-653.',
      tipo: 'Artículo',
      link:
        'https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0718-33052018000400645&lng=en&nrm=iso&tlng=en',
    },
  ],
  glosario: [
    {
      termino: 'Ánimo de lucro',
      significado:
        'se refiere a la destinación que los socios o realizadores de una actividad económica dan a los excedentes económicos.',
    },
    {
      termino: 'Aprendizaje automático',
      significado:
        'rama de la inteligencia artificial (IA) y la informática que se enfoca en el uso de datos y algoritmos para imitar la forma en que los humanos aprenden, mejorando gradualmente su precisión.',
    },
    {
      termino: 'Corto plazo',
      significado: 'se refiere al tiempo menor a un año.',
    },
    {
      termino: 'Dato abierto',
      significado:
        'un dato o contenido es abierto cuando cualquier persona es libre de usarlo, reutilizarlo o distribuirlo. Los datos abiertos están sujetos como máximo a medidas que preserven la procedencia y la apertura.',
    },
    {
      termino: '<em>Hardware<em>',
      significado:
        'cualquier componente físico de un sistema informático que contenga una placa de circuito, circuitos integrados u otros componentes electrónicos. Un ejemplo de <em>hardware</em> es la pantalla o monitor de un computador.',
    },
    {
      termino: 'Inteligencia artificial (IA)',
      significado:
        'simulación de procesos de inteligencia humana por parte de máquinas, especialmente sistemas informáticos. Las aplicaciones específicas de la IA incluyen sistemas expertos, procesamiento de lenguaje natural, reconocimiento de voz y visión artificial.',
    },
    {
      termino: 'Largo plazo',
      significado: 'se refiere al tiempo mayor a un año.',
    },
    {
      termino: 'Licencia',
      significado:
        'permiso para hacer algo. Esta puede mencionar al documento o contrato que va a ser licenciado.',
    },
    {
      termino: '<em>Software<em>',
      significado:
        'conjunto de pasos expresado en un paquete tecnológico que realiza una serie de tareas y debe ser instalado en un dispositivo denominado <em>hardware.<em>',
    },
    {
      termino: 'Tecnología',
      significado:
        'es la aplicación del conocimiento que se hace en la mayoría de las organizaciones, especialmente en las empresas. La tecnología es el mecanismo para el desarrollo y evolución de la ciencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Borja, D. (2017). <em>Matemáticas en contexto.<em> Magisterio.',
    },
    {
      referencia:
        'García, J. & Maroto, F. (2018). Interpretación de resultados estadísticos. <i>Medicina Intensiva</i>, 42(6), p. 370-379.',
      link: 'https://doi.org/10.1016/j.medin.2017.12.013 ',
    },
    {
      referencia:
        'Power Data (s.f.). <i>Big Data: ¿En qué consiste? Su importancia, desafíos y gobernabilidad</i>. Powerdata.',
      link: 'https://www.powerdata.es/big-data',
    },
    {
      referencia:
        'Power Data (2014). <i>Las 6 dimensiones de la calidad de los datos</i>. Powerdata.',
      link:
        'https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/bid/368790/las-6-dimensiones-de-la-calidad-de-los-datos',
    },
    {
      referencia:
        'Alfredo Baronio, S. C. (2018).Saber y Saber Hacer con Estadística. Argentina UniRio Recuperado de',
      link:
        'http://www.unirioeditora.com.ar/wp-content/uploads/2018/10/978-987-688-265-1.pdf#page=18',
    },
    {
      referencia:
        'Salazar, C., & Castillo, S. D. (2018). Fundamentos básicos de estadística. Recuperado de',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w24899w/Trabajo%20Final/Fundamentos_Basicos_de_Estadistica.pdf',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
