<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Nutrición y alimentación
    
    .fondo-personalizado-1.bottom-1.f1
      .fondo-personalizado-1__contenido.pt-5
        .row.mb-4
          .col-lg-10
            p.mb-0(data-aos="fade-right") La nutrición y la alimentación son esenciales para la salud. La alimentación implica seleccionar y consumir alimentos, influenciada por factores socioeconómicos y culturales. Los nutrientes en los alimentos son vitales para el cuerpo. La nutrición estudia cómo estos nutrientes benefician nuestra salud. Un buen balance de nutrientes es crucial para el bienestar, mientras que una mala nutrición puede afectar negativamente la salud.
          .col-lg-2.order-first.order-lg-last
            figure.mb-4.mb-lg-0(data-aos="fade-left")
              img.mx-auto(src="@/assets/curso/temas/3.svg",style="max-width: 190px;")
        
        p.mb-4(data-aos="fade") A continuación, se explican estos conceptos:


        .fondo-color-primario.borde-20.p-4.mb-4(data-aos="zoom-in-out")
          SlyderA.slider-personalizado-1.pt-lg-2(tipo="b")
            .row.justify-content-center.pt-lg-4
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Nutrientes
                p.mb-0 Son componentes que se encuentran en los alimentos y que deben ser suministrados al cuerpo en cantidades adecuadas. Estos incluyen agua, proteínas y aminoácidos, grasas y ácidos grasos, carbohidratos, minerales y vitaminas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/4.png",style="max-width: 400px;")
            .row.justify-content-center.pt-lg-4
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Nutrición
                p.mb-0 Ciencia que estudia las relaciones entre los nutrientes y el organismo humano a nivel individual y colectivo, a lo largo de la vida, en diferentes situaciones fisiológicas y patológicas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/5.png",style="max-width: 400px;")
            .row.justify-content-center.pt-lg-4
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Estado nutricional
                p.mb-0 Puede determinarse correlacionando la información obtenida a través de una historia clínica y dietética, un análisis físico completo e investigaciones de laboratorio adecuadas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/6.png",style="max-width: 400px;")
            .row.justify-content-center.pt-lg-4
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Mala nutrición
                p.mb-0 Puede presentarse como un deterioro de la salud a consecuencia de la deficiencia de nutrientes o por desnutrición, es decir, por la falta de calorías o de nutrientes esenciales.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/7.png",style="max-width: 400px;")
            .row.justify-content-center.pt-lg-4
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Buena nutrición
                p.mb-0 Esfuerzo que los seres humanos realizan para aportar todos los nutrientes que el organismo necesita para mantenerse saludable, utilizando las cantidades correctas de nutrientes esenciales y balanceándolos para obtener el más alto desarrollo físico y mental a lo largo del ciclo de vida.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/8.png",style="max-width: 400px;")
    
    p.mb-4(data-aos="fade-right") Para adquirir una buena nutrición se requiere lo siguiente:

    .fondo-personalizado-1.f2(style="overflow-y: clip;",data-aos="flip-up")
      img.figu-1(src="@/assets/curso/temas/16.png")
      img.figu-2(src="@/assets/curso/temas/17.png")
      .fondo-personalizado-1__contenido.py-5
        .row.align-items-center 
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 359px;")
          .col-lg-8.pe-lg-5
            SlyderF.slider-personalizado-2(columnas="col-md-6 py-3",data-aos="flip-up")
              .borde-14.bg-white.p-4.sombra-p-1.h-100
                figure.mb-3.mt-2
                  img.mx-auto(src="@/assets/curso/temas/10.svg",style="max-width: 92px;")
                .fondo-color-sistema-l.mb-4.align-content-center.p-2(style="min-height: 68px;")
                  p.text-white.fw-bold.text-center.mb-0(style="font-size: 17px;") Ciencia en la agricultura y tecnología
                p.mb-0.pb-5.text-center Producción de suficientes alimentos nutritivos vegetales y animales. 
              .borde-14.bg-white.p-4.sombra-p-1.h-100
                figure.mb-3.mt-2
                  img.mx-auto(src="@/assets/curso/temas/11.svg",style="max-width: 92px;")
                .fondo-color-sistema-l.mb-4.align-content-center.p-2(style="min-height: 68px;")
                  p.text-white.fw-bold.text-center.mb-0(style="font-size: 17px;") Procesamiento de alimentos
                p.mb-0.pb-5.text-center Mantener el valor nutritivo de los alimentos durante su procesamiento.
              .borde-14.bg-white.p-4.sombra-p-1.h-100
                figure.mb-3.mt-2
                  img.mx-auto(src="@/assets/curso/temas/12.svg",style="max-width: 92px;")
                .fondo-color-sistema-l.mb-4.align-content-center.p-2(style="min-height: 68px;")
                  p.text-white.fw-bold.text-center.mb-0(style="font-size: 17px;") Almacenamiento y transporte
                p.mb-0.pb-5.text-center Asegurar que los alimentos lleguen a tiempo y donde se necesiten. 
              .borde-14.bg-white.p-4.sombra-p-1.h-100
                figure.mb-3.mt-2
                  img.mx-auto(src="@/assets/curso/temas/13.svg",style="max-width: 92px;")
                .fondo-color-sistema-l.mb-4.align-content-center.p-2(style="min-height: 68px;")
                  p.text-white.fw-bold.text-center.mb-0(style="font-size: 17px;") Leyes de alimentos 
                p.mb-0.pb-5.text-center Normas que aseguran que los alimentos mantengan su valor nutritivo.
              .borde-14.bg-white.p-4.sombra-p-1.h-100
                figure.mb-3.mt-2
                  img.mx-auto(src="@/assets/curso/temas/14.svg",style="max-width: 92px;")
                .fondo-color-sistema-l.mb-4.align-content-center.p-2(style="min-height: 68px;")
                  p.text-white.fw-bold.text-center.mb-0(style="font-size: 17px;") Condiciones económicas
                p.mb-0.pb-5.text-center Hacer que los alimentos sean accesibles económicamente para los consumidores.  
              .borde-14.bg-white.p-4.sombra-p-1.h-100
                figure.mb-3.mt-2
                  img.mx-auto(src="@/assets/curso/temas/15.svg",style="max-width: 92px;")
                .fondo-color-sistema-l.mb-4.align-content-center.p-2(style="min-height: 68px;")
                  p.text-white.fw-bold.text-center.mb-0(style="font-size: 17px;") Educación en nutrición
                p.mb-0.pb-5.text-center Programas educativos sobre nutrición en escuelas y comunidades.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
