<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ciencia de datos

    .row
      .col-lg-6.mt-3
        p #[b La ciencia de datos ]        
          | juega un rol importante dentro de una organización para la toma de decisiones. Esta se define como el campo de estudio que combina la experiencia y el dominio de las habilidades de programación con el conocimiento de las matemáticas y la estadística para analizar información significativa de los datos trabajados. Cada vez más organizaciones se dan cuenta de la importancia de la 
          b ciencia de datos, la inteligencia artificial y el aprendizaje automático. 
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img1.png')


    h5.mt-3 Ciclo de vida 

    p.mt-4 La ciencia de datos cuenta con un 
      b ciclo de vida, 
      | definido como un conjunto interactivo de pasos o etapas que se deben tomar para entregar un proyecto o análisis. Puesto que cada proyecto y equipo de trabajo de ciencia de datos son diferentes, cada ciclo de vida específico es diferente. Sin embargo, la mayoría de los proyectos de ciencia de datos tienden a fluir a través de los mismos pasos generales. En la Figura 2, se evidencian los cinco pasos de este ciclo.

    .row.justify-content-center.mt-4
      .col-lg-8.sm-8
        .titulo-sexto.color-acento-contenido.mt-4
          b Figura 2. 
          | Pasos del ciclo de vida de la ciencia de datos

        .row.justify-content-around.align-items-center.mt-2
          .col-11
          figure
          img(src='@/assets/curso/temas/tema2/img2.png')

    p.mt-4 Estos pasos no son estrictamente lineales. Se debe iniciar con el paso uno y luego continuar con el paso dos. Sin embargo, los siguientes pasos deben darse naturalmente, sin importar el orden, según cada caso. Varios pasos pequeños e iterativos son mejores que unas pocas fases integrales más grandes.  #[b El ciclo de vida se centra en los pasos del proyecto. ]
     

     separador
    .bg2 
      #t_2_1

      .titulo-segundo.color-acento-contenido
        h2 2.1 Técnicas de análisis de datos y modelos analíticos

      .row.justify-content-center.align-items-start.mt-5      
          .col-lg-4
              img(src='@/assets/curso/temas/tema2/img3.png')                   
          .col-lg-7
            p.mt-3 En vista de que toda organización genera una gran cantidad de datos, es necesario utilizar diferentes técnicas para su manipulación. El análisis de datos es una técnica que implica diversas actividades, como recopilar, depurar y organizar los datos. Estos procesos, que suelen incluir 
             i software 
             | de análisis de datos, son necesarios para preparar la información con fines comerciales o para la toma de decisiones.
            .cajon.color-primario.p-4
              p Asimismo, los métodos y las técnicas de análisis de datos son útiles para encontrar tendencias, métricas, hechos y cifras. Estos se pueden utilizar de forma independiente o en combinación con otras técnicas y otros métodos para ayudar tanto a líderes o gerentes como a los responsables de tomar decisiones a adquirir conocimientos empresariales, a partir de diferentes tipos de datos.

      p.mt-4 Estas técnicas y estos métodos pueden ser utilizados para el análisis de datos 
        b cualitativos o cuantitativos.
      p A continuación, se abordará cada una de las técnicas de análisis de datos.

      
    
      PasosA.color-secundario.mb-5(tipo="n")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Técnica de análisis de datos cuantitativos
            p Este análisis implica trabajar con variables numéricas como la estadística, los porcentajes, los cálculos o las medidas, ya que la naturaleza de los datos cuantitativos es netamente numérica. Las técnicas de análisis de datos cuantitativos generalmente implican trabajar con algoritmos, herramientas de análisis matemático y software para manipular datos y descubrir información que revele el valor de, por ejemplo, un negocio.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')
              

        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen')
              
          .col-md-5
            h3 Técnicas de análisis de datos cualitativos
            p Los datos cualitativos describen información que normalmente no es numérica. Estas técnicas trabajan con identificadores únicos, como etiquetas y propiedades o variables categóricas como estadísticas, porcentajes y medidas. Ejemplo de estas son la observación de primera mano o de participantes, las entrevistas, los grupos focales o la revisión de documentos y artefactos.


      h5.mt-2 Modelos analíticos

      p De la misma manera como existen técnicas, también se cuenta con diferentes modelos para el análisis de datos. Estos son de naturaleza cuantitativa y se utilizan para responder una pregunta puntual o tomar una decisión de diseño específica. Son diferentes los modelos analíticos para abordar diferentes aspectos del sistema, como también lo es su rendimiento, confiabilidad y sus propiedades.

      p En el siguiente video podrá conocer cuáles son los distintos modelos que existen.


      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption VIDEO


      separador

    #t_2_2.titulo-segundo.color-acento-contenido.mt-2
      h2 2.2   Minería de datos, métodos de recopilación e integración de datos 


    .row
      .col-lg-7.mt-3
        p Así como la 
          b ciencia de datos 
          | recolecta y analiza los datos, existe la 
          b minería de datos 
          | para clasificar grandes conjuntos de datos e identificar patrones y relaciones que pueden ayudar a resolver problemas de las organizaciones, a través del análisis de datos. Las técnicas y herramientas de minería de datos permiten predecir tendencias futuras y tomar decisiones más informadas y soportadas. El objetivo principal de la minería de datos es extraer información valiosa de los datos disponibles.         
      .col-lg-5
        figure
        img(src='@/assets/curso/temas/tema2/img6.png')
    p.mt-2 Por lo anterior, es importante reconocer la importancia y los alcances de la minería de datos. Estos aspectos se describen a continuación.

    .col-lg-11
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--vereee")
        .row(titulo="Importancia")
          .col-md-5.mb-4.mb-md-0
            p La minería de datos es un componente crucial de las iniciativas analíticas exitosas en las organizaciones. La información que esta genera se puede utilizar en inteligencia empresarial y aplicaciones de análisis avanzado que implican el análisis de datos históricos, así como aplicaciones de análisis en tiempo real que examinan la transmisión de datos a medida que se crean o recopilan.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img7.png', alt='Texto que describa la imagen')
              

        .row(titulo="Alcances")
          .col-md-5.mb-4.mb-md-0
            p La minería de datos efectiva ayuda en varios aspectos de la planificación de estrategias comerciales y la gestión de operaciones. Eso incluye funciones orientadas al cliente, como el 
              i marketing, 
              | la publicidad, las ventas y la atención al cliente, además de procesos como la fabricación, la gestión de la cadena de suministro, las finanzas y los recursos humanos. La minería de datos abarca la detección de fraudes, la gestión de riesgos, la planeación de la seguridad informática y demás casos críticos. Asimismo, esta tiene un papel relevante en la atención médica, el gobierno, la investigación científica, las matemáticas, los deportes, entre muchos otros campos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img8.png', alt='Texto que describa la imagen')

    h5.mt-2 Recopilación de datos

     p.mt-3 Otro aspecto importante en la ciencia de datos es la 
      b recopilación, 
      | la cual es el proceso metodológico de reunir información sobre un tema específico. Es crucial asegurar que los datos estén completos durante la fase y que estos se recopilen de manera legal y ética. De lo contrario, su análisis no será preciso y podría tener consecuencias de distinta índole y largo alcance.       
              
    p.mt-4 En general, existen tres tipos de datos de consumo a recopilar. Estos se describen a continuación.   





        TabsA.color-primario.orangecolor.mt-4  
          .tarjeta.colorblue.p-4(titulo="Datos propios")       
            .row
              .col-xl-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img9.svg', alt='Texto que describa la imagen')
                 
              .col-xl-10
                
                p Los recopila una organización directamente de los usuarios y los clientes.

          .tarjeta.colorblue.p-4(titulo="Datos de la segunda parte")

            .row
              .col-xl-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img10.svg', alt='Texto que describa la imagen')
                 
              .col-xl-10
               
                p Datos de clientes o datos de primera parte que comparte una organización con otra.
          
          .tarjeta.colorblue.p-4(titulo="Datos de terceros")
            
            .row
              .col-xl-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema2/img11.svg', alt='Texto que describa la imagen')
                 
              .col-xl-10
               
                p Son los datos agregados alquilados o vendidos por organizaciones que no tienen conexión con la organización o los usuarios.

    p Para la recopilación de datos existen diferentes métodos, tales como las encuestas, el seguimiento transaccional, las entrevistas y los grupos focales, la observación, el seguimiento en línea, los formularios o el monitoreo de redes sociales.
    .row.justify-content-center
      .col-lg-8.sm-8
        .cajon.color-secundario.colorcajontema2.p-4
            p Los datos no solo son recopilados, sino también integrados, lo que implica combinar cuidadosamente las diferentes fuentes de la organización para que los analistas, los usuarios y las aplicaciones puedan tener acceso a una imagen completa de toda la organización. Abordar esta importante tarea tiene numerosos beneficios como la eliminación de silos de datos, la mejora de la colaboración, el apoyo para una mejor toma de decisiones y la mejora de la calidad e integridad de los datos.


    .row.justify-content-around.align-items-centerrd.mt-4
      .col-8
        .tarjeta.color-secundario.p-2.mt-2
          .row.justify-content-around.align-items-center
            .col-lg-2
              img(src="@/assets/curso/temas/tema2/img12.svg" )
            .col-10
              .row
                .col.mb-3.mb-sm-0
                  h3.mb-1 Métodos de recopilación e integración de datos
                  p.text-small Para abordar cada uno de estos métodos, lo invitamos a descargar el documento 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo2Métodosderecopilacióneintegracióndedatos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    separador

    #t_2_3

    .titulo-segundo.color-acento-contenido.mt-2
      h2 2.3 Preparación de datos estructurados y ecosistemas de datos abiertos


    p La preparación es una parte clave de la ciencia de datos. La mayoría de veces, los datos que tiene una organización no se pueden usar de inmediato para su análisis. Generalmente, estos requieren cierta manipulación y adaptación, sobre todo si es necesario agregar otras fuentes al análisis. En la Figura 3 se presentan los pasos para preparar datos.

    .titulo-sexto.color-acento-contenido.mt-4
          b Figura 3. 
          | Pasos para la preparación de datos
    
    col-lg-9
      figure
        img(src="@/assets/curso/temas/tema2/img13.png" )



    h5.mt-4 Ecosistemas de datos abiertos


    .row
      .col-lg-6.mt-3
        p De acuerdo con lo anterior, se definen los 
          b ecosistemas de datos 
          | como una colección de infraestructura, análisis y aplicaciones utilizadas para capturar y analizar datos. Estos ecosistemas proporcionan a las organizaciones datos confiables para comprender a sus clientes y tomar mejores decisiones en aspectos como la definición de precios, el desarrollo de operaciones y campañas de 
          i marketing.

        .cajon.cajon.color-secundario.colorcajonorange.p-4
            p El término 
              b ecosistema de datos abiertos 
              |  (ODE, por su nombre en inglés) es un concepto emergente para el intercambio de datos bajo licencias públicas en ecosistemas de 
              i software 
              | similares al de 
              i Open Source Software (OSS). 
              | Este tiene ciertas similitudes con el 
              i Open Government Data (OGD), 
              | que permite a las agencias públicas compartir datos para la innovación y la transparencia.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img14.png')

    h5.mt-4 Fases

    p.mt-4 Los ecosistemas de datos se caracterizan por tener las siguientes fases: detección, colección, disputas, análisis y almacenamiento.

    p.mt-4 A continuación, se describe cada una de estas fases.

    .row.justify-content-center         
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img16.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
             
              p Se refiere al proceso de identificar fuentes de datos para un proyecto. Implica evaluar la calidad de los datos para que se pueda determinar su valor de mejor manera. Estos datos pueden obtenerse de fuentes internas y externas.

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img17.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
            
              
              p La colección o recopilación de datos se puede completar a través de procesos manuales o automatizados. Generalmente, para el caso de los datos a gran escala no es factible recopilarlos de forma manual. Por esta razón, los científicos de datos usan lenguajes de programación para escribir 
                i software 
                | diseñado para automatizar este proceso.

      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img18.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              
              
              p Es el conjunto de procesos diseñados para transformar datos sin procesar en un formato más utilizable. Según la calidad de los datos analizados, las disputas pueden implicar la fusión de varios conjuntos de datos, la identificación y el llenado de lagunas en estos, la eliminación de datos innecesarios o incorrectos y la "limpieza" o estructuración de datos para análisis futuros.       
      
    .row.justify-content-center.mt-5         
      .col-sm-4.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img19.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              
              
              p Una vez los datos sin procesar se han inspeccionado y han quedado en un estado fácilmente utilizable, es posible proceder con su análisis. Según el desafío específico que busca abordar un proyecto de datos, este análisis puede ser de diagnóstico, descriptivo, predictivo o prescriptivo. 
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img20.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
            
              
              p A lo largo de todas las etapas del ciclo de vida de los datos, estos deben almacenarse de manera segura y accesible. El medio exacto utilizado para el almacenamiento está determinado por los procedimientos de gobierno de datos de cada organización
    
    
    
  

    














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
