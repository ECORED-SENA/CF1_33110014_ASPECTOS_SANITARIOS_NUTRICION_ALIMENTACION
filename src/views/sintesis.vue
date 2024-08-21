<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-s.borde-20.p-4
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis  presenta los fundamentos de la nutrición, abarcando la ciencia de la nutrición, la obtención e ingestión de alimentos y los nutrientes. Incluye factores socioeconómicos, culturales y psicológicos, así como los procesos de digestión, absorción y las funciones de los nutrientes en el organismo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
