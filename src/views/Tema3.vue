<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondotema3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estadística 



    .row
      .col-lg-6.mt-3
        p La estadística, siendo una disciplina de la ciencia matemática que estudia las probabilidades de ocurrencia de fenómenos en el tiempo, utiliza datos históricos o actuales, esto es porque a través de sus técnicas y/o métodos, organiza y analiza las fuentes numéricas de datos, y permite establecer conclusiones numéricas y gráficas, respecto al comportamiento de los fenómenos en el momento actual y hacer proyecciones futuras (García y Maroto, 2018, pp.370-379). Asimismo, permite el procesamiento oportuno y científico de los datos, visualizando de manera gráfica la información para la comprensión del comportamiento de la organización.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img1.png')

    h5.mt-2 Métodos estadísticos

    .row.justify-content-center.mt-5
      .col-lg-9.sm-8
        .cajon.cajon.color-primario.p-4
            p En el análisis de datos se utilizan dos modelos: 
              b la estadística descriptiva, 
              | que resume los datos mediante índices como la media o la mediana y la 
              b estadística inferencial, 
              | que extrae conclusiones de los datos mediante pruebas estadísticas como la prueba t de Student. Estos modelos que fueron descritos en el video 
              b Modelos de análisis de datos 
              | se apoyan en métodos que se describen y ejemplifican a continuación.

    h5.mt-5 Ejemplos de métodos estadísticos
    p.mt-4 A continuación, se presenta una lista de métodos estadísticos con ejemplos que facilitan su comprensión.

    .row.justify-content-center.mt-5
      .col-lg-9.sm-8
        TabsA.color-primario.orangecolor.mt-4  
              .tarjeta.colorblue.p-4(titulo="Riesgos enfermedades")       
                .row
                  .col-xl-2.mb-4
                    figure
                      img(src='@/assets/curso/temas/tema3/img2.svg', alt='Texto que describa la imagen')
                    
                  .col-xl-10
                    
                    p Ejemplo: identificar los factores de riesgo del cáncer de próstata.
              .tarjeta.colorblue.p-4(titulo="Predicciones")

                .row
                  .col-xl-2.mb-4
                    figure
                      img(src='@/assets/curso/temas/tema3/img3.svg', alt='Texto que describa la imagen')
                    
                  .col-xl-10
                     
                    p Ejemplo: predecir si alguien sufrirá un ataque al corazón sobre la base de mediciones demográficas, dietéticas o clínicas.

              .tarjeta.colorblue.p-4(titulo="Detección de correos")            
                .row
                  .col-xl-2.mb-4
                    figure
                      img(src='@/assets/curso/temas/tema3/img4.svg', alt='Texto que describa la imagen')
                    
                  .col-xl-10
                    
                    p Ejemplo: personalizar un sistema de detección de correo no deseado.
              .tarjeta.colorblue.p-4(titulo="Código postal")            
                .row
                  .col-xl-2.mb-4
                    figure
                      img(src='@/assets/curso/temas/tema3/img5.svg', alt='Texto que describa la imagen')
                    
                  .col-xl-10
                    
                    p Ejemplo: identificar los números en un código postal escrito a mano.

              .tarjeta.colorblue.p-4(titulo="Clasificar elementos")            
                .row
                  .col-xl-2.mb-4
                    figure
                      img(src='@/assets/curso/temas/tema3/img6.svg', alt='Texto que describa la imagen')
                    
                  .col-xl-10
                   
                    p Ejemplo: clasificar una muestra de tejido como uno afectado por un tipo específico de cáncer.
              .tarjeta.colorblue.p-4(titulo="Relación de variables")            
                .row
                  .col-xl-2.mb-4
                    figure
                      img(src='@/assets/curso/temas/tema3/img7.svg', alt='Texto que describa la imagen')
                    
                  .col-xl-10
                   
                    p Ejemplo: establecer la relación entre salario y variables demográficas a partir de los datos de encuestas de población.

    h5.mt-5 Selección del método estadístico

    p.mt-4 Frente a cada situación específica, se puede disponer de métodos estadísticos para el análisis e interpretación de los datos. Escoger el método estadístico más adecuado para el análisis de datos implica conocer las suposiciones y las condiciones de cada uno de estos
    
    .row.justify-content-center.mb-4
      .col-lg-10.sm-8
        .cajon.color-secundario.colorcajontema2.p-4
            p Todos los métodos estadísticos que se utilizan para comparar las medias se denominan paramétricos, mientras que los métodos estadísticos que se utilizan para comparar datos distintos a las medias (mediana, rango medio o proporciones) se denominan métodos no paramétricos.

    p.mt-3 La selección del método estadístico apropiado depende de los tres factores que se describen a continuación.  

    .row.justify-content-center.mt-3
      .col-lg-8.sm-5
        TabsA.color-primario.orangecolor.mt-4  
              .tarjeta.colorblue.p-4(titulo="Objetivo")       
                .row
                  .col-xl-2.mb-4
                    figure
                      img(src='@/assets/curso/temas/tema3/img16.svg', alt='Texto que describa la imagen')
                    
                  .col-xl-10
                    
                    p Propósito del estudio.
              .tarjeta.colorblue.p-4(titulo="Comportamiento")

                .row
                  .col-xl-2.mb-4
                    figure
                      img(src='@/assets/curso/temas/tema3/img17.svg', alt='Texto que describa la imagen')
                    
                  .col-xl-10
                    
                    p Tipo y distribución de los datos usados.
              .tarjeta.colorblue.p-4(titulo="Naturaleza")            
                .row
                  .col-xl-2.mb-4
                    figure
                      img(src='@/assets/curso/temas/tema3/img18.svg', alt='Texto que describa la imagen')
                    
                  .col-xl-10
                   
                    p Naturaleza de las observaciones (pareadas o no pareadas).  

    h5.mt-5 Evaluación de rendimiento de los métodos

    p.mt-4 Es importante entender las ideas que subyacen a las diversas técnicas, para saber cómo y cuándo usarlas. En ese sentido, se deben entender primero los métodos más simples, para luego poder comprender los más sofisticados. Para ello, es necesario evaluar con precisión el rendimiento de un método, a fin de determinar qué tan bien o mal está funcionando.

    h5.mt-5 Variables y niveles de medición
    p.mt-4 En la investigación científica, una variable es cualquier categoría que pueda tomar diferentes valores en su conjunto de datos, por ejemplo, la altura o los puntajes de un examen. Los niveles de medición, también llamados escalas de medición, indican con qué precisión se registran las variables.

    p.mt-5 A continuación, se describen los cuatro niveles de medición que existen.
    
    
    
    .row.mb-5.mt-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.imgdimension(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img8.png')})`}")
            .tarjeta-flip__contenido.imgdimension.p-4.p-xl-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img12.png')})`}")
              

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.imgdimension(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img9.png')})`}")
            .tarjeta-flip__contenido.imgdimension.p-4.p-xl-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img13.png')})`}")
              
      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.imgdimension(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img10.png')})`}")
            .tarjeta-flip__contenido.imgdimension.p-4.p-xl-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img14.png')})`}")


      .col-sm-5.col-xl-3
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.imgdimension(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img11.png')})`}")
            .tarjeta-flip__contenido.imgdimension.p-4.p-xl-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img30.svg')})`}")
              
              













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
