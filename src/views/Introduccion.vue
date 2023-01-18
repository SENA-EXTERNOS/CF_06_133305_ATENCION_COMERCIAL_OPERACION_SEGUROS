<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción



    .row.justify-content-center.align-items-center.mb-5          
      .col-auto
          img(src='@/assets/curso/temas/introduccion/img1.png')
      .col
        .bloque-texto-b.color-cajon.p-1.mb-4
          .bloque-texto-b__texto
            p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordará la identificación de requerimientos de información y las condiciones establecidas para su análisis, el proceso de identificación de las fuentes válidas, la depuración de la información recopilada, la definición de un modelo de datos relacional y las representaciones gráficas de los datos procesados. 

        p Estos planteamientos le llevarán a comprender la preparación y presentación de datos masivos, que podrá aplicar en cualquier organización.
    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.mt-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
