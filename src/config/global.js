export default {
  global: {
    componenteFormativo: 'Control de calidad de color',
    descripcionCurso:
      'Con el estudio de este componente, el aprendiz estará más y mejor capacitado para aplicar la gestión del color en sus procesos profesionales y de desempeño. Podrá afianzarse en medición de color, control de calidad del proceso del color, digitalización, vista previa, ajustes en la gestión del color, generación de PDFs y, finalmente, impresión.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
        titulo: 'Medición del color',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Sistemas de medición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Densitómetro y espectrofotómetro',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ajustes para la gestión de color',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Control de calidad del proceso',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Control de procesos previos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Control de procesos de elaboración',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Organización de ficheros',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Generación de PDF',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Áreas de control de impresión y estándares',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Densidad tonal',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Aplicación y tira de control',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia: 'Adobe. (2021). <em>Configurar la gestión de color</em>.',
      link:
        'https://helpx.adobe.com/es/photoshop-elements/using/setting-color-management.html',
    },
    {
      referencia:
        'Aula Creactiva. (2020). <em>El Diseño Gráfico y el proceso de producción gráfica</em>.',
      link:
        'https://www.aulacreactiva.com/diseno-grafico-y-proceso-produccion-grafica/',
    },
    {
      referencia:
        'Eguaras, M. (2019). <em>Cómo preparar archivos para impresión de manera correcta (arte final)</em>. Mariana Eguaras Consultoría Editorial.',
      link:
        'https://marianaeguaras.com/como-preparar-archivos-para-impresion-de-manera-correcta-arte-final/',
    },
    {
      referencia:
        'Fernández, J. (2018). <em>Nuevo espacio de color para impresión flexo de alta densidad</em>. El empaque.',
      link:
        'https://www.elempaque.com/temas/Nuevo-espacio-de-color-para-impresion-flexo-de-alta-densidad+126841?pagina=4',
    },
    {
      referencia:
        'Gamboa, W. (2015). <em>Densitometría en artes gráficas</em>. El mundo de las artes gráficas.',
      link:
        'http://wgamboa-wilder.blogspot.com/2015/09/densitometria-en-artes-graficas.html',
    },
    {
      referencia:
        'Leigh, B. (2021). <em>¿Qué es un espectro-densitómetro?</em> Alborum.',
      link: 'https://www.alborum.com/que-es-un-espectro-densitometro/',
    },
    {
      referencia:
        'Makertan. (2013). <em>Las etapas de la preimpresión en el proceso gráfico</em>. La Prestampa.',
      link:
        'https://laprestampa.com/el-proceso-grafico/etapas-de-la-preimpresion/',
    },
    {
      referencia:
        'Makertan, (2020). <em>La gestión del color en artes gráficas: espacios, perfiles y propósitos de conversión</em>. La Prestampa.',
      link:
        'https://laprestampa.com/el-proceso-grafico/preimpresion/gestion-del-color/',
    },
    {
      referencia:
        'Manual del operador INEO+1060/1070/1060L. (s. f.). <em>Control de densidad de color</em>.',
      link:
        'https://manuals.konicaminolta.eu/ineo-plus-1060L-1060-1070/ES/contents/id06-_100510308.html',
    },
    {
      referencia:
        'Oposinet. (s. f.). <em>Tema 13 - Ficheros. tipos, características, organizaciones</em>.',
      link:
        'https://www.oposinet.com/temario-de-informatica/temario-1-informatica/tema-13-ficheros-tipos-caractersticas-organizaciones/',
    },
    {
      referencia:
        'PCC Group. (2020). <em>Medición de color y sus escalas de calificación</em>.',
      link:
        'https://www.products.pcc.eu/es/blog/medicion-de-color-y-sus-escalas-de-calificacion/',
    },
    {
      referencia:
        'Sánchez, G. (s. f.). <em>Norma ISO 12647</em>. Glosario gráfico.',
      link: 'http://www.glosariografico.com/norma_iso_12647',
    },
    {
      referencia:
        'Sirope Agencia Creativa. <em>¿Qué es la saturación?</em> Sirope.',
      link: 'https://sirope.es/glosario-branding/que-es-la-saturacion/',
    },
  ],
  glosario: [
    {
      termino: 'Calibración de color',
      significado:
        'La calibración del color es un proceso que garantiza una reproducción precisa del color en las imágenes, cuenta con dos pasos: la calibración del dispositivo de entrada, como un escáner, y la calibración del dispositivo de salida, como una impresora o monitor.',
    },
    {
      termino: 'Densidad tonal',
      significado:
        'Es el número de grises que tiene una imagen entre la densidad máxima y la densidad mínima. En una imagen digital, la mínima unidad de información espacial es el píxel, determinado por la cantidad de tonos que un píxel puede reproducir.',
    },
    {
      termino: 'Ficheros',
      significado:
        'Es un sistema real o virtual de organización de la información mediante una clasificación determinada.',
    },
    {
      termino: 'Filtros de luz',
      significado:
        'El filtro Efectos de iluminación le permite crear infinidad de efectos de iluminación en imágenes RGB. También puede utilizar texturas de archivos de escala de grises (llamadas mapas de texturas) para producir efectos tridimensionales y guardar sus propios estilos para utilizarlos en otras imágenes.',
    },
    {
      termino: 'Iluminancia',
      significado:
        'Magnitud que expresa el flujo luminoso que incide sobre la unidad de superficie, y cuya unidad en el sistema internacional es el lux.',
    },
    {
      termino: 'Luminancia ',
      significado:
        'Magnitud que expresa el flujo luminoso en una dirección determinada por unidad de ángulo sólido y por unidad de área proyectada de la superficie radiante sobre el plano normal a la dirección de radiación, y cuya unidad en el sistema internacional es la candela por metro cuadrado.',
    },
    {
      termino: 'Perfil ICC',
      significado:
        'Es un conjunto de datos que caracteriza a un dispositivo de entrada o salida de color según los estándares. (Consorcio Internacional del Color o International Color Consortium)',
    },
    {
      termino: 'PDF',
      significado:
        'Portable Document Format, es un formato de almacenamiento para documentos digitales. Facilita el intercambio de documentación digital de manera fiable, independientemente del <em>software</em>, el <em>hardware</em> o el sistema operativo que haya generado el archivo original, o la plataforma que lo reciba para su lectura.',
    },
    {
      termino: 'Tira de control',
      significado:
        'La tira de control se imprime en un extremo del pliego y su finalidad es proporcionar al impresor una guía de las cualidades de la impresión. Algunos impresores editan y crean tipos especiales de tiras de control para trabajos específicos, sin embargo, generalmente se utilizan determinadas convenciones estándar. ',
    },
    {
      termino: 'Saturación',
      significado:
        'La saturación indica el nivel de intensidad de un cierto matiz de un color. Dependiendo de la pureza del color (que estará determinada por la intensidad de la luz y de la longitud de las ondas en el espectro de color).',
    },
  ],
  complementario: [
    {
      texto:
        'ARG Estudio. (2019). <em>PDF Interactivo con InDesign</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jhyp2wOysE4',
    },
    {
      texto:
        'Id-Soft - Consultoría de Color y Automatización. (2021). <em>Medir el color, espectrofotómetro, densitómetro o espectro densitómetro, diferencias</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CMy1wkzs9Mk',
    },
    {
      texto:
        'Lazcano, B. (2020). <em>Curso de colorimetría fondos de decoloración clase num.1</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZWLOFFhl5PY',
    },
    {
      texto:
        'Productividad digital con Nacho. (2020). <em>Cómo ordenar las carpetas y ficheros | Nomenclaturas y estructuras</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z3340X2pYN8',
    },
    {
      texto:
        'Santarsiero, H. (2018). <em>Tira control de color preprensa</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ukbeTU8Q28E',
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
      {
        nombre: 'Carlos Suescun',
        cargo: 'Experto Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Amparo López escudero',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
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
