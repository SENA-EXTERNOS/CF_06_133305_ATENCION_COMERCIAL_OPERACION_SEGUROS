<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción



    .row.justify-content-center.align-items-start.mb-2           
        .col-lg-2.my3
            img(src='@/assets/curso/temas/introduccion/img1.png')                    
        
    
        .col-lg-10.col-sm-16
          .bloque-texto-b.color-cajon.p-1
            .bloque-texto-b__texto
              p Apreciado aprendiz, bienvenido a este componente formativo, en el que se aborda la identificación de requerimientos de información y las condiciones establecidas para su análisis, el proceso de identificación de las fuentes válidas, la depuración de la información recopilada, la definición de un modelo de datos relacional y las representaciones gráficas de los datos procesados. Estos planteamientos lo llevarán a comprender la preparación y presentación de datos masivos que podrá aplicar en cualquier organización.

        .col-lg-7
          p.mt-4 A continuación, lo invitamos a ver el video que le dará un panorama general sobre las diferentes temáticas que se van a estudiar.#[b ¡Éxitos en este proceso de aprendizaje!]                                              
                                                                                    
                                                       
          


        .row.mt-4
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption   VIDEO





    
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
