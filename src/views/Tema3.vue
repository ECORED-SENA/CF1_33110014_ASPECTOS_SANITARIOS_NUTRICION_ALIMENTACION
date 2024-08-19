<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Función nutritiva de los nutrientes
    
    .row.mb-4(data-aos="fade-down")
      .col-lg-9.pe-lg-0
        .fondo-color-sistema-i.p-4.h-100
          p.mb-0 Los procesos del metabolismo son difíciles de explicar. A continuación, se describen algunos detalles. Por ejemplo, es posible seguir la digestión, la absorción y el metabolismo intermedio en un carbohidrato específico o en cualquier nutriente, pero esto puede causar una impresión errónea debido a la multitud de fenómenos metabólicos que se presentan dentro de las células. Cada fenómeno está afectado por otros que lo preceden o que se realizan al mismo tiempo. La utilización de cualquier nutriente se interrelaciona con muchos otros.
      .col-lg-3.ps-lg-0.order-first.order-lg-last
        .fondo-color-sistema-i.h-100.align-content-center
          figure
            img.mx-auto(src="@/assets/curso/temas/31.png")
    
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 2.] Uso de nutrientes
    .fondo-color-sistema-g.p-4.py-lg-5
      figure
        img.mx-auto(src="@/assets/curso/temas/32.svg",style="max-width: 1007px;",alt="La figura presenta la función de los hidratos de carbono, grasa, proteínas, minerales y vitaminas en la estructura del cuerpo, la producción de energía y la regulación metabólica. Se pregunta por la posibilidad de reservas corporales de estos nutrientes.")


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
