<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondot6
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estadística 

    .row
      .col-lg-6.mt-3
        p La estadística, siendo una disciplina de la ciencia matemática que estudia las probabilidades de ocurrencia de fenómenos en el tiempo, utiliza datos históricos o actuales; esto es porque a través de sus técnicas y/o métodos, organiza y analiza las fuentes numéricas de datos y permite establecer conclusiones numéricas y gráficas, respecto al comportamiento de los fenómenos en el momento actual, y hacer proyecciones futuras (García y Maroto, 2018, pp.370-379). 
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img1.png')

    h5.mt-2 Métodos estadísticos

    .row.justify-content-center.mt-5
      .col-lg-9.sm-8
        .cajon.cajon.color-primario.p-4
            p.mb-0 En el análisis de datos se utilizan dos modelos: <b>la estadística descriptiva</b>, que resume los datos mediante índices como la media o la mediana y la <b>estadística inferencial</b>, que extrae conclusiones de los datos mediante pruebas estadísticas como la prueba <b>t de <i>Student</i></b>. 

    h5.mt-5 Ejemplos de métodos estadísticos
    p.mt-5 A continuación, se presenta una lista de métodos estadísticos; procure tomar nota de lo más destacado:

    TabsA.color-primario.orangecolor.mt-5  
      .tarjeta.colorblue.p-4(titulo="Riesgos enfermedades")       
        .row
          .col-xl-2.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img2.svg', alt='')
            
          .col-xl-10
            
            p Ejemplo: identificar los factores de riesgo del cáncer de próstata.
      .tarjeta.colorblue.p-4(titulo="Predicciones")

        .row
          .col-xl-2.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img3.svg', alt='')
            
          .col-xl-10
              
            p Ejemplo: predecir si alguien sufrirá un ataque al corazón sobre la base de mediciones demográficas, dietéticas o clínicas.

      .tarjeta.colorblue.p-4(titulo="Detección de correos")            
        .row
          .col-xl-2.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img4.svg', alt='')
            
          .col-xl-10
            
            p Ejemplo: personalizar un sistema de detección de correo no deseado.
      .tarjeta.colorblue.p-4(titulo="Código postal")            
        .row
          .col-xl-2.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img5.svg', alt='')
            
          .col-xl-10
            
            p Ejemplo: identificar los números en un código postal escrito a mano.

      .tarjeta.colorblue.p-4(titulo="Clasificar elementos")            
        .row
          .col-xl-2.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img6.svg', alt='')
            
          .col-xl-10
            
            p Ejemplo: clasificar una muestra de tejido como uno afectado por un tipo específico de cáncer.
      .tarjeta.colorblue.p-4(titulo="Relación de variables")            
        .row
          .col-xl-2.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img7.svg', alt='')
            
          .col-xl-10
            
            p Ejemplo: establecer la relación entre salario y variables demográficas a partir de los datos de encuestas de población.

    h5.mt-5 Selección del método estadístico

    p.mt-5 Frente a cada situación específica, se puede disponer de métodos estadísticos para el análisis e interpretación de los datos. Escoger el método estadístico más adecuado para el análisis de datos, implica conocer las suposiciones y las condiciones de cada uno de estos.
    
    .row.justify-content-center.mb-4
      .col-lg-10.sm-8
        .cajon.color-secundario.colorcajontema2.p-4
            p Todos los métodos estadísticos que se utilizan para comparar las medias, se denominan paramétricos. Mientras que los métodos estadísticos que se utilizan para comparar datos distintos a las medias (mediana, rango medio o proporciones) se denominan métodos no paramétricos.

    p.mt-3 La selección del método estadístico apropiado, depende de los tres factores que se describen a continuación:  

    .row.justify-content-center.mt-3
      .col-lg-10.sm-5
        TabsA.color-primario.orangecolor.mt-5  
          .tarjeta.colorblue.p-4(titulo="Objetivo")       
            .row.justify-content-center.align-items-center
              .col-xl-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema3/img16.svg', alt='')
                
              .col-xl-10
                
                p Propósito del estudio.
          .tarjeta.colorblue.p-4(titulo="Comportamiento")

            .row.justify-content-center.align-items-center
              .col-xl-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema3/img17.svg', alt='')
                
              .col-xl-10
                
                p Tipo y distribución de los datos usados.
          .tarjeta.colorblue.p-4(titulo="Naturaleza")            
            .row.justify-content-center.align-items-center
              .col-xl-2.mb-4
                figure
                  img(src='@/assets/curso/temas/tema3/img18.svg', alt='')
                
              .col-xl-10
                
                p Naturaleza de las observaciones (pareadas o no pareadas).  

    h5.mt-5 Evaluación de rendimiento de los métodos

    p.mt-5 Es importante entender las ideas que subyacen a las diversas técnicas, para saber cómo y cuándo usarlas. En ese sentido, se deben entender primero los métodos más simples, para luego poder comprender los más sofisticados. Para ello, es necesario evaluar con precisión el rendimiento de un método, a fin de determinar qué tan bien o mal está funcionando.

    h5.mt-5 Variables y niveles de medición
    p.mt-5 En la investigación científica, una variable es cualquier categoría que pueda tomar diferentes valores en su conjunto de datos, por ejemplo, la altura o los puntajes de un examen. Los niveles de medición, también llamados escalas de medición, indican con qué precisión se registran las variables.

    p.mt-5 A continuación, se describen los cuatro niveles de medición que existen:
    .row.mt-5.text-center      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.svg')})`}")
            .tarjeta-flip__contenido.p-5
              .p-2
                h4.mb-3 Nominal
                p.mb-0 Los datos solo se pueden categorizar.
              

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/2.svg')})`}")
            .tarjeta-flip__contenido.p-5
              .p-2
                h4.mb-3 Ordinal
                p.mb-0 Los datos se pueden categorizar y clasificar.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/3.svg')})`}")
            .tarjeta-flip__contenido.p-5
              .p-2
                h4.mb-3 Intervalos
                p.mb-0 Los datos se pueden categorizar, clasificar y espaciar uniformemente.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/4.svg')})`}")
            .tarjeta-flip__contenido.p-5
              .p-2
                h4.mb-3 Proporción o razón
                p.mb-0 Los datos se pueden categorizar, clasificar, espaciar uniformemente y tienen un cero natural.                         
          
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
