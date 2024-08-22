import titulo from './titulo'

export default {
  global: {
    componenteFormativo: 'Fundamentos de nutrición',
    descripcionCurso:
      'Este componente formativo abarca los principios básicos de la nutrición, incluyendo la relación entre alimentos y el organismo, procesos metabólicos, y funciones de los nutrientes. Proporciona conocimientos sobre alimentación adecuada, estado nutricional y hábitos saludables, destacando la importancia de la buena nutrición para la salud física y mental.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Nutrición y alimentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Digestión, absorción y metabolismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Composición del cuerpo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Metabolismo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Digestión',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Absorción',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Función nutritiva de los nutrientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Hidratos de carbono',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Lípidos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Proteínas',
            hash: 't_3_3',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: 'Nutrición y alimentación',
      referencia:
        'Lifeder Educación (2021).  La FUNCIÓN DE LA NUTRICIÓN - Procesos, alimentos y nutrientes  [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=rnIVAVF7cpg&ab_channel=LifederEducaci%C3%B3n',
    },
    {
      tema: 'Digestión, absorción y metabolismo',
      referencia:
        'Universidad Nacional de Educación a Distancia (UNED). (s.f.). <em>Guía de alimentación y salud: Guía nutricional</em>.',
      tipo: 'Documento',
      link:
        'https://www2.uned.es/pea-nutricion-y-dietetica-I/guia/PDF/Guia%20de%20Alimentacion%20y%20Salud%20-%20Guia%20Nutricional.pdf',
    },
    {
      tema: 'Metabolismo',
      referencia:
        'Suárez, F. (2015, agosto 18). <em>Episodio # 868 El Metabolismo y el Bicarbonato</em> [Podcast]. YouTube Music.',
      tipo: 'Podcast',
      link: 'https://music.youtube.com/watch?v=JZn4nE-o22A',
    },
    {
      tema: 'Digestión',
      referencia:
        'Gil Hernández, Á., Fontana Gallego, L., Dolores Mesa García, M., & Dolores Mesa García, M. (2024). Gil. Tratado de Nutrición (4. ed.). E-book.',
      tipo: 'Libro',
      link:
        'https://mieureka-medicapanamericana-com.bdigital.sena.edu.co/viewer/gil-tratado-de-nutricion/29',
    },
    {
      tema: 'Absorción',
      referencia:
        'JUVENTUD MEDICA (2017) ABSORCION NUTRIENTES ( LOCALIZACION ) [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=Lfx5QoWe96I&ab_channel=JUVENTUDMEDICA',
    },
    {
      tema: 'Función nutritiva de los nutrientes',
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). <em>Guías alimentarias basadas en alimentos</em>.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SNA/guias-alimentarias-basadas-en-alimentos.pdf',
    },
    {
      tema: 'Hidratos de carbono',
      referencia:
        'Educar Portal (2020). Hidratos de carbono [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=7nduMwW18nI&ab_channel=EducarPortal',
    },
    {
      tema: 'Lípidos',
      referencia:
        'Es Ciencia  (2022). Lípidos Biomoléculas [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iUJGSgglBL8&ab_channel=EsCiencia',
    },
    {
      tema: 'Proteínas',
      referencia:
        'Es Ciencia  (2022). Proteínas  Biomoléculas [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=7YL86s_nBYQ&ab_channel=CamachLearn',
    },
  ],
  glosario: [
    {
      termino: 'Absorción',
      significado:
        'proceso por el cual los nutrientes se incorporan al organismo desde el lumen intestinal.',
    },
    {
      termino: 'Ácido linoleico',
      significado: 'ácido graso esencial no sintetizable por el cuerpo humano.',
    },
    {
      termino: 'Difusión',
      significado:
        'movimiento de moléculas desde alta a baja concentración a través de una membrana.',
    },
    {
      termino: 'Enzimas',
      significado:
        'catalizadores orgánicos que aceleran reacciones químicas en el cuerpo.',
    },
    {
      termino: 'Fosfolípidos',
      significado:
        'componentes de las membranas celulares y agentes emulsionantes.',
    },
    {
      termino: 'Galactosa',
      significado:
        'monosacárido que se forma a partir de la hidrólisis de la lactosa.',
    },
    {
      termino: 'Metabolismo',
      significado:
        'conjunto de reacciones bioquímicas y fisicoquímicas en las células.',
    },
    {
      termino: 'Monosacáridos',
      significado: 'azúcares simples como la glucosa y la fructosa.',
    },
    {
      termino: 'Polisacáridos',
      significado: 'carbohidratos complejos como el almidón y la celulosa.',
    },
    {
      termino: 'Triglicéridos',
      significado:
        'forma principal de almacenamiento de energía en los lípidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Astiasarán, I., Lasheras, B., Ariño, A., & Martínez, J.A. (2003). Alimentos y nutrición en la práctica sanitaria. Madrid: Ediciones Díaz de Santos S.A.',
      link: '',
    },
    {
      referencia:
        'Corinne, H. (1982). Fundamentos de nutrición. México: Editorial Continental.',
      link: '',
    },
    {
      referencia:
        'Hernández, M., & Sastre, A. (1999). Tratado de nutrición. Madrid: Ediciones Díaz Santos, S.A.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, V.M., & Magro, E.S. (2008). Bases de la alimentación humana. La Coruña, España: Editorial Netbiblo S. L.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta técnica',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
