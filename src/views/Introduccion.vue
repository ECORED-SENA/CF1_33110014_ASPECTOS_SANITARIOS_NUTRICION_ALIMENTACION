<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-2.pb-md-2
  
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.py-5
        .row.mb-5
          .col-lg-8
            p.mb-4(data-aos="fade-up") La nutrición es una ciencia fundamental que estudia la relación entre los alimentos y el organismo humano, tanto a nivel individual como colectivo. Comprender la nutrición y la alimentación es esencial para promover la salud y el bienestar a lo largo de las diferentes etapas de la vida. Este componente formativo está diseñado para proporcionar una comprensión detallada de los principios básicos de la nutrición, las funciones de los nutrientes y los procesos metabólicos involucrados en la digestión y absorción de los alimentos.
            .fondo-color-sistema-i.p-4(data-aos="fade-down")
              p.mb-0 A través de este material de formación, los aprendices tendrán la oportunidad de explorar cómo la nutrición influye en la salud física y mental.
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0(data-aos="fade-left")
              img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 400px;")
        .row.align-items-center.pb-5
          .col-lg-3
            figure.mb-4.mb-lg-0(data-aos="fade-right")
              img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 295px;")
          .col-lg-9
            p.mb-4(data-aos="fade-down") Los temas abordados incluyen la alimentación adecuada, el estado nutricional, los nutrientes esenciales y sus funciones, así como los mecanismos del metabolismo. Además, se destacan las diferencias entre una buena y una mala nutrición, proporcionando las bases para identificar y corregir deficiencias nutricionales y fomentar hábitos alimenticios saludables.
            .fondo-color-sistema-j.p-4.py-3
              p.mb-0(data-aos="fade") Al finalizar este componente formativo, los aprendices estarán equipados con las habilidades necesarias para tomar decisiones informadas sobre su dieta y contribuir positivamente a la nutrición y salud de sus comunidades.
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
