export default {
  global: {
    componenteFormativo:
      'Preparación, análisis y presentación de datos masivos',
    descripcionCurso:
      'En las organizaciones los procesos de gestión de datos masivos son necesarios para la toma de decisiones y la buena gestión, para tal fin se requiere de una metodología estructurada que consta de la identificación, el análisis y la depuración de la información recopilada que permita definir un modelo de datos relacional y poder hacer representaciones gráficas de los datos procesados.',
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
        titulo: 'Organización ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características y tipos',
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
        titulo: 'Ciencia de datos ',
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
      tema: 'Ciclo de vida',
      referencia:
        'Yaqoob, I., Targio Hashem, I. A., Inayat, Z., Mahmoud Ali, W. K., Alam, M., Shiraz, M. y Gani, A. (2014). Big Data: Survey, Technologies, Opportunities, and Challenges. The Scientific World Journal 2014, article 712826. ',
      tipo: 'Artículo',
      link: 'http://dx.doi.org/10.1155/2014/712826',
    },
    {
      tema: 'Derechos de autor',
      referencia:
        'Martínez Martínez, R. (2017). Cuestiones de ética jurídica al abordar proyectos de Big Data. El contexto del Reglamento general de protección de datos. Dilemata, (24), 151-164. ',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6066833',
    },
    {
      tema: 'Ingeniería de requisitos',
      referencia:
        'Martínez Martínez, R. (2017). Cuestiones de ética jurídica al abordar proyectos de Big Data. El contexto del Reglamento general de protección de datos. Dilemata, (24), 151-164. ',
      tipo: 'Artículo',
      link: 'http://dx.doi.org/10.4067/S0718-33052018000300473',
    },
    {
      tema: 'Ingeniería de requisitos',
      referencia:
        'Bonfante, M. C., Blanquicett, L. A., Díaz Infante, E. y Guerra García, C. (2018). Reference model for the integration of business modeling to requirements engineering: a proposal from the software industry. Ingeniare. Rev. chil. Ing., 26(4), pp. 645-653.',
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
      termino: 'Hardware',
      significado:
        'cualquier componente físico de un sistema informático que contenga una placa de circuito, circuitos integrados u otros componentes electrónicos. Un ejemplo de hardware es la pantalla o monitor de un computador.',
    },
    {
      termino: 'Inteligencia artificial (IA)',
      significado:
        'simulación de procesos de inteligencia humana por parte de máquinas, especialmente sistemas informáticos. Las aplicaciones específicas de la IA incluyen sistemas expertos, procesamiento de lenguaje natural, reconocimiento de voz y visión artificial.',
    },
    {
      termino: 'Largo plazo',
      significado: 'se refiere al tiempo mayor a un año',
    },
    {
      termino: 'Licencia',
      significado:
        'permiso para hacer algo. Esta puede mencionar al documento o contrato que va a ser licenciado.',
    },
    {
      termino: 'Software',
      significado:
        'conjunto de pasos expresado en un paquete tecnológico que realiza una serie de tareas y debe ser instalado en un dispositivo denominado hardware.',
    },
    {
      termino: 'Tecnología',
      significado:
        'ses la aplicación del conocimiento que se hace en la mayoría de las organizaciones, especialmente en las empresas. La tecnología es el mecanismo para el desarrollo y evolución de la ciencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Borja, D. (2017). Matemáticas en contexto. Bogotá, Colombia: Magisterio',
      link: '',
    },
    {
      referencia:
        'García, J. y Maroto, F. (2018). Interpretación de resultados estadísticos. Medicina Intensiva, 42(6), p.370-379.',
      link: 'https://doi.org/10.1016/j.medin.2017.12.013 ',
    },
    {
      referencia: 'Power Data. (s.f.). Power Data. Obtenido de ',
      link: 'https://www.powerdata.es/big-data',
    },
    {
      referencia:
        'Power Data. (2014, 5 de marzo). Las 6 dimensiones de la calidad de los datos. Obtenido de',
      link:
        'https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/bid/368790/las-6-dimensiones-de-la-calidad-de-los-datos',
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
