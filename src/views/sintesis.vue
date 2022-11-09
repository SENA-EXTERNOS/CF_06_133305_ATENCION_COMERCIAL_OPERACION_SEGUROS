<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .col-lg-12
      p.mt-1.text-small En este componente formativo se aborda la identificación de requerimientos de información y las condiciones establecidas para su análisis, el proceso de identificación de las fuentes válidas, la depuración de la información recopilada, la definición de un modelo de datos relacional y las representaciones gráficas de los datos procesados.
    .row.justify-content-center.mt-4
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/Sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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
