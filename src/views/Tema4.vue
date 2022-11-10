<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Bases de datos

    .bloque-texto-b.color-cajon.p-1
          .bloque-texto-b__texto
            p En la misma medida que crecen las organizaciones, los datos recopilados se deben ir estructurando con el fin de tomar decisiones importantes que conlleven a consolidar y proyectar mejor la empresa. Es por esto que se hace necesario el uso de las bases de datos. Estas son una colección organizada de información estructurada o de datos, normalmente almacenados electrónicamente en un sistema informático. Generalmente está controlada por un sistema de administración de bases de datos (DBMS, por su nombre en inglés). En la Figura 4 se pueden observar las cinco características principales de una base de datos.

    .row.justify-content-center.mt-4
      .col-lg-10.sm-8
        .titulo-sexto.color-acento-contenido.mt-4
          b Figura 4. 
          | Características de una base de datos

    
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Texto que describa la imagen')
      .col-lg-8.sm-8.mt-3
        figure
          img(src='@/assets/curso/temas/tema4/img2.png', alt='Texto que describa la imagen')

    .bg3
      .row.justify-content-around.align-items-centerrd.mt-4 
        .col-8
          .tarjeta.color-secundario.p-2.mt-2
            .row.justify-content-around.align-items-center
              .col-lg-2
                img(src="@/assets/curso/temas/tema4/img3.svg" )
              .col-10
                .row
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Características y clasificación de las bases de datos
                    p.text-small Para abordar cada una de las características y los tipos de bases de datos, lo invitamos a descargar el documento.
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo 3 Características y clasificación de las bases de datos.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-downloa

      
      h5.mt-5 Herramientas de gestión de bases de datos

      p.mt-4 Toda organización necesita una herramienta tecnológica de base de datos bien diseñada, dado que encontrar un sistema funcional y bien organizado, que le permita a su equipo realizar, fácilmente, tareas relacionadas con datos, es crucial para el éxito de un negocio. Dentro de las principales herramientas tecnológicas se encuentran las siguientes:

      
      .row.justify-content-center.align-items-start.mt-5   
          .col-lg-4
              img(src='@/assets/curso/temas/tema4/img4.svg')                   
                        
          .col-lg-7.ms-5         
            
            ul.lista-ul--
              li 
                i.fas.fa-angle-right.yelllow
                | MySQL
              
              li 
                i.fas.fa-angle-right.yelllow
                | Estudio de administración de SQL Server
              li 
                i.fas.fa-angle-right.yelllow
                | RDBMS de Oracle
              li 
                i.fas.fa-angle-right.yelllow
                | Salesforce y otros 
                i softwares 
                | de ventas o CRM
              li 
                i.fas.fa-angle-right.yelllow
                | DevOps

              li 
                i.fas.fa-angle-right.yelllow
                | VS Code
              
              li 
                i.fas.fa-angle-right.yelllow
                | Herramientas ESM

              li 
                i.fas.fa-angle-right.yelllow
                i phpMyAdmin

              li 
                i.fas.fa-angle-right.yelllow
                | Herramientas que brindan suficiente acceso

              li 
                i.fas.fa-angle-right.yelllow
                | Marcos que permiten consumir, consultar y analizar fuentes de datos

              li 
                i.fas.fa-angle-right.yelllow
                | Sistemas apropiados para el tamaño de cada conjunto de datos

              li 
                i.fas.fa-angle-right.yelllow
                | Redes de colaboración de bases de datos


      .row.justify-content-around.align-items-centerrd.mt-4
        .col-8
          .tarjeta.color-secundario.p-2.mt-2
            .row.justify-content-around.align-items-center
              .col-lg-2
                img(src="@/assets/curso/temas/tema4/img3.svg" )
              .col-9
                .row
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Herramientas tecnológicas de bases de datos
                    p.text-small Para conocer sobre cada una de estas herramientas, lo invitamos a descargar el documento. 
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo 4  Herramientas tecnológicas de bases de datos.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-downloa

      h5.mt-5 #[i Big data:] modelos y sistemas de gestión


      .row
        .col-lg-6.mt-5
          p La necesidad de contar con herramientas y procesos claros no se reduce únicamente a las bases de datos, pues, dentro de una infraestructura definida 
            b (arquitectura #[i big data)]  
            | se revisten de gran importancia los modelos 
            i big data. 
            | El análisis de 
            i big data 
            | es el uso de técnicas analíticas avanzadas de conjuntos de datos muy grandes y diversos que incluyen datos estructurados, semiestructurados y no estructurados, de diferentes fuentes y distintos tamaños: desde 
            i terabytes 
            | hasta 
            i zettabytes.

        .col-lg-5
          figure
            img(src='@/assets/curso/temas/tema4/img5.png')


      p.mt-4 Los modelos de datos y su gestión apuntan al diseño estructurado de un modelo que permita el procesamiento de datos para su posterior análisis y presentación.

      .tarjeta--container.row.mb-5
        .col-md.tarjeta.color-greeoscuro.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema4/img6.png', alt='Texto que describa la imagen')
            
          h2.text-center ¿Qué es un modelo de datos?
          p.text-center Los buenos datos permiten a las organizaciones establecer puntos de referencia y objetivos para seguir avanzando. Para que los datos permitan esta medición, estos deben organizarse de acuerdo con su descripción, semántica y las restricciones de coherencia que se les imponga. Un modelo de datos es abstracto y permite la construcción adicional de modelos conceptuales, además de establecer relaciones entre distintos elementos.

        .col-md.tarjeta.color-greeclaro.text-black.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/tema4/img7.png', alt='Texto que describa la imagen')
            
          h2.text-center Sistema de gestión de base de datos (DBMS)
          p.text-center Este sistema es el motor que permite a los usuarios acceder a los datos y a lo que se conoce como esquema de base de datos o la estructura organizacional de una base de datos. En general, ofrece seguridad y garantiza la integridad de los datos. Algunos de estos sistemas se usan para ofrecer reversiones automatizadas y actividades de reinicio, registro y auditoría.

      .row.justify-content-center.mb-4
        .col-lg-10.sm-8
          .cajon.color-secundario.colorcajontema2.p-4
              p #[b Los sistemas de gestión de base de datos (DBMS) ]
                | constituyen el elemento más relevante de un sistema de base de datos. A estos se les atribuye la posibilidad de administrar, supervisar y controlar las bases de datos. 

      p.mt3 En el siguiente esquema se presentan las ventajas y desventajas de los DBMS.


      .titulo-sexto.color-acento-contenido.mt-4
            b Tabla 1. 
            | Ventajas y desventajas de los DBMS


   
    .tabla-a.color-acento-contenido
      table
        thead
          tr
            th Ventajas
            th Desventajas            
        tbody.colortable
          tr
            td 
              tr
                ul.lista-ul.ms-5
                  li 
                    i.fas.fa-circle
                    p.mb-1.ms-2  Ofrecen una variedad de técnicas para almacenar y recuperar datos.
              tr
                ul.lista-ul.ms-5
                  li 
                    i.fas.fa-circle
                    p.mb-1.ms-2  Sirven como controladores eficientes para equilibrar las necesidades de múltiples aplicaciones que utilizan los mismos datos.                  
                  li 
                    i.fas.fa-circle
                    p.mb-1 Utilizan procedimientos uniformes de administración de datos.
                  li 
                    i.fas.fa-circle
                    p.mb-1.ms-2 Los programadores de aplicaciones nunca se exponen a los detalles de la representación y el almacenamiento de datos.

                  li 
                    i.fas.fa-circle
                    p.mb-1.ms-2 Utilizan varias funciones poderosas para almacenar y recuperar datos de manera eficiente. 

                  li 
                    i.fas.fa-circle
                    p.mb-1.ms-2 Ofrecen integridad y seguridad de datos. 

                  li 
                    i.fas.fa-circle
                    p.mb-1.ms-2 Implican restricciones de integridad para obtener un alto nivel de protección contra el acceso prohibido a los datos.

                  li 
                    i.fas.fa-circle
                    p.mb-1.ms-2 Permiten programar el acceso simultáneo a los datos, para que solo un usuario a la vez pueda acceder a los mismos datos.

                  li 
                    i.fas.fa-circle
                    p.mb-1.ms-2 Reducen el tiempo de desarrollo de aplicaciones.

                  
            td.tablatd 
              ul.lista-ul.ms-5
                  li 
                    i.fas.fa-circle
                    p.mb-1.ms-2 El costo de #[i hardware]  y #[i software] de los DBMS es bastante alto.
              ul.lista-ul.ms-5
                  li 
                    i.fas.fa-circle
                    p.mb-1.ms-2 La mayoría de los sistemas de administración de bases de datos suelen ser complejos, por lo que se requiere capacitación para que los usuarios usen los DBMS.

              ul.lista-ul.ms-5
                  li 
                    i.fas.fa-circle
                    p.mb-1.ms-2 Todos los datos están integrados en una sola base de datos que puede dañarse por causa de una falla eléctrica o fallas relacionadas con los medios de almacenamiento.

              ul.lista-ul.ms-5
                  li 
                    i.fas.fa-circle
                    p.mb-1.ms-2 El uso del mismo programa a la vez por muchos usuarios puede conducir a la pérdida de algunos datos.
              
              ul.lista-ul.ms-5
                  li 
                    i.fas.fa-circle
                    p.mb-1.ms-2 Los DBMS no pueden realizar cálculos sofisticados.
              
              




              
          
            



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
