<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondot6
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Técnicas de gestión de bases de datos masivos 

    .row
      .col-lg-6.mt-5
        p La gestión eficaz de #[em big data] por parte de las organizaciones ayuda a ordenar, administrar y controlar grandes volúmenes de datos estructurados y no estructurados. Con esta gestión se garantiza un alto nivel de calidad y accesibilidad de los datos para su análisis y la aplicación de inteligencia empresarial. Las corporaciones, las agencias gubernamentales y otras organizaciones emplean estrategias de administración de #[em big data] para lidiar con grupos de datos de rápido crecimiento, que generalmente involucran muchos #[em terabytes] o incluso #[em petabytes] almacenados en una variedad amplia de formatos de archivo.
      .col-lg-5
        figure
        img(src='@/assets/curso/temas/tema5/img1.png')


      h5.mt-2  Características del  #[i big data ]

      p.mt-5 Los desafíos en el manejo y almacenamiento de 
        i big data 
        | son aspectos que las organizaciones deben reconocer y frente a los que estas deben generar acciones para garantizar su manejo. 

      p.mt-3 A continuación, se presenta una descripción de los desafíos que enfrentan la gestión y el almacenamiento de <i>Big data</i>:


    .row.justify-content-center.mb-4
      .col-lg-4
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--vereee")
        .row(titulo="Principales desafíos") 
          
          .col-md-5.mb-4.mb-md-0
            p.ms-5 Los grandes datos suelen ser complejos. Además de su volumen y variedad, a menudo incluyen datos de transmisión y otros tipos de datos que se crean y actualizan a gran velocidad. Como resultado, el procesamiento y la gestión de #[em big data] son tareas complicadas
          .col-md-5.ms-5
            figure
              img(src='@/assets/curso/temas/tema5/img2.png', alt='')
              

        .row(titulo="Almacenamiento ")
          .col-md-5.mb-4.mb-md-0
            p.ms-5 La infraestructura de almacenamiento de <i>Big data</i> está diseñada específicamente para guardar, administrar y recuperar cantidades masivas de datos. Esta infraestructura permite el almacenamiento y la clasificación, de tal manera que las aplicaciones y los servicios que trabajan con <i>Big data</i> puedan acceder a ellos, utilizarlos y procesarlos con facilidad.
            p.ms-5 Por lo general, el almacenamiento de <i>Big data</i> se compone de unidades de disco duro, debido al menor costo de estos medios. Sin embargo, el almacenamiento <i>flash</i> está ganando popularidad, por su costo decreciente. Los sistemas pueden construirse exclusivamente en medios <i>flash</i> o como híbridos de <i>flash</i> y almacenamiento en disco.

          .col-md-5.ms-5
            figure
              img(src='@/assets/curso/temas/tema5/img12.png', alt='')

      h5.mt-2  Lenguaje de manipulación y herramientas para el análisis de datos

      p.mt-5 Existe una amplia variedad de plataformas y herramientas para administrar big data, con versiones comerciales y de código abierto disponibles. Para su uso es necesario conocer su lenguaje de manipulación.

      p.mb-5 Estas son algunas herramientas para el análisis de datos y el lenguaje de manipulación:
    
      TabsB.color-acento-contenido.mb-5
        .py-4.py-md-5.colorpesta(titulo="Lenguaje de manipulación" :icono="require('@/assets/curso/temas/tema5/img3.svg')")
          .row
            .col-md-7.mb-4.mb-md-0
              
              p.ms-5 El lenguaje de manipulación de datos o DML es un subconjunto de operaciones utilizadas para insertar, eliminar y actualizar datos en una base. La selección de datos de solo lectura está estrechamente relacionada y, a veces, también se le considera un componente de un DML, ya que algunos usuarios pueden realizar selecciones tanto de lectura como de escritura. Habría que decir, también, que un lenguaje de manipulación de datos popular es el lenguaje de consulta estructurado, o SQL, que se utiliza para recuperar y manipular datos en una base de datos relacional. Con el SQL, se pueden realizar operaciones en la base de datos y se puede usar este lenguaje para crear una base de datos. 
            .col-lg-1
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema5/img5.png', alt='')
              
        .py-4.py-md-5.colorpesta(titulo="Herramientas para el análisis de datos " :icono="require('@/assets/curso/temas/tema5/img4.svg')")
          .row
            .col-md-7.mb-4.mb-md-0
              
              p.ms-5 Para permitir una escalabilidad más sencilla y una mayor flexibilidad en las implementaciones, las cargas de trabajo se ejecutan cada vez más en la nube, donde las organizaciones pueden configurar sus propios sistemas o utilizar ofertas de servicios gestionados. Los principales proveedores de gestión de #[em big data] incluyen a los líderes del mercado de plataformas en la nube como AWS, #[em Google] y #[em Microsoft], además de Cloudera, #[em Databricks] y otros que se centran, principalmente, en aplicaciones de #[em big data].
            .col-lg-1
            .col-md-3
              figure
                img(src='@/assets/curso/temas/tema5/img6.png', alt='')
              
    h5.mt-2  Técnicas de transformación de datos 

    p.my-5 La transformación de datos es el mapeo y conversión de un formato a otro. Las herramientas y técnicas utilizadas para la transformación de datos dependen del formato, la complejidad, la estructura y el volumen de estos. Dichas técnicas permiten a un desarrollador traducir entre formatos de datos XML, no XML y Java. Con ello, facilitan una integración rápida de aplicaciones heterogéneas, independientemente del formato utilizado para representar los datos.
    img.img-a.img-t(src='@/assets/curso/temas/tema5/1.svg', alt='')
    //- .row.justify-content-around.align-items-centerrd.mt-5
    //-   .col-8
    //-     .tarjeta.color-secundario.p-2.mt-2
    //-       .row.justify-content-around.align-items-center
    //-         .col-lg-2
    //-           img(src="@/assets/curso/temas/tema4/img3.svg" )
    //-         .col-9
    //-           .row
    //-             .col.mb-3.mb-sm-0
    //-               h3.mb-1 Técnicas de transformación de datos 
    //-               p Algunas técnicas de transformación de datos son:
    //-             .col-sm-auto
    //-               a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_5_Tecnicas_de_gestion_de_bases_de_datos_masivos.pdf')" target="_blank")
    //-                 span Descargar
    //-                 i.fas.fa-file-downloa


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
