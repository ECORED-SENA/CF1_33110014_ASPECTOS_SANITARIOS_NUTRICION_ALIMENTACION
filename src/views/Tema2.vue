<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Digestión, absorción y metabolismo
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.py-4
        .row(data-aos="fade-down")
          .col-lg-9.pe-lg-0
            .fondo-color-sistema-i.p-4.h-100
              p.mb-0 Los procesos del metabolismo son difíciles de explicar. A continuación, se describen algunos detalles. Por ejemplo, es posible seguir la digestión, la absorción y el metabolismo intermedio en un carbohidrato específico o en cualquier nutriente, pero esto puede causar una impresión errónea debido a la multitud de fenómenos metabólicos que se presentan dentro de las células. Cada fenómeno está afectado por otros que lo preceden o que se realizan al mismo tiempo. La utilización de cualquier nutriente se interrelaciona con muchos otros.
          .col-lg-3.ps-lg-0.order-first.order-lg-last
            .fondo-color-acento-contenido.p-2.h-100.align-content-center
              figure
                img.mx-auto(src="@/assets/curso/temas/18.svg",style="max-width: 249px;")
        
        Separador

        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-down")
          h2 2.1 Composición del cuerpo
        
        p.mb-4(data-aos="fade-down") El cuerpo está compuesto de agua, que constituye aproximadamente las dos terceras partes del peso corporal de un individuo y está distribuida en todos los tejidos. #[b Las proteínas y las grasas] constituyen cada una el 18% del peso corporal, variando considerablemente según la cantidad de depósitos de grasa.

        .row.justify-content-center.mb-4(data-aos="fade-down")
          .col-lg-3.pe-lg-0
            .fondo-color-sistema-m.p-4.align-content-center.h-100
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/19.svg",style="max-width: 218px;")
          .col-lg-5.ps-lg-0
            .fondo-color-primario.p-3.align-content-center.h-100
              p.mb-0 #[b Por ejemplo], en un bebé recién nacido, su reserva adiposa es relativamente baja, pero en un adulto obeso, el porcentaje de grasa puede exceder en un amplio margen al de las proteínas.
    
    p.mb-4(data-aos="fade-down") En el cuerpo se encuentran presentes solamente #[b 350 g de carbohidratos]. Estos son principalmente una fuente de combustible y solo una cantidad de estos se localiza dentro de la estructura de los tejidos.

    p.mb-4.fw-bold(data-aos="fade-down") Los elementos químicos predominantes en el cuerpo son:

    .row(data-aos="fade-down") 
      .col-lg-6.mb-4.mb-lg-0
        .row
          .col-md-6.pe-md-0
            .fondo-color-sistema-n.p-4.h-100.align-content-center
              figure
                img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 109px;")
          .col-md-6.ps-md-0
            .fondo-color-primario.p-4.ps-lg-5.h-100.align-content-center
                div
                  .fondo-color-sistema-o.d-inline-flex.p-3.pe-md-5.borde-8.mb-3
                    p.mb-0.fw-bold Oxígeno 65 %
                div
                  .fondo-color-sistema-o.d-inline-flex.p-3.pe-md-5.borde-8.mb-3
                    p.mb-0.fw-bold Carbono 18 %
                div
                  .fondo-color-sistema-o.d-inline-flex.p-3.pe-md-5.borde-8.mb-3
                    p.mb-0.fw-bold Nitrógeno 3 %
                div
                  .fondo-color-sistema-o.d-inline-flex.p-3.pe-md-5.borde-8
                    p.mb-0.fw-bold Minerales 4 %
      .col-lg-6
        .fondo-color-sistema-k.p-4.h-100.align-content-center
          figure.mb-4
            img.me-auto(src="@/assets/curso/temas/21.svg",style="max-width: 116px;")
          p Muchos de los constituyentes más importantes del cuerpo son compuestos orgánicos presentes en cantidades tan pequeñas que no tienen efectos importantes sobre el peso total del cuerpo; entre estos se encuentran las #[b vitaminas, las hormonas y las enzimas].
    
    .titulo-decorativo.mt-5.mb-4(data-aos="fade-down")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Las células como unidades de funcionamiento

    .row(data-aos="fade-down") 
      .col-lg-9.pe-lg-0
        .fondo-color-primario.p-4.h-100.align-content-center
          p.mb-0 El cuerpo humano puede estudiarse a varios niveles de organización; el organismo como un todo, los órganos y los tejidos, las células que forman los órganos, los tejidos y los componentes estructurales dentro de las células. Los procesos nutricionales del organismo son la suma de las actividades físicas y químicas que tienen lugar dentro de las células y las relaciones que existen entre estas y el medio que las rodea.
      .col-lg-3.ps-lg-0.order-first.order-lg-last
        .fondo-color-sistema-m.p-3.h-100.align-content-center
          figure
            img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 167px;")
    
    .titulo-decorativo.mt-5.mb-4(data-aos="fade-down")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Naturaleza de las enzimas

    p.mb-5(data-aos="fade-down") Todos los seres vivos producen miles de enzimas. Sin estas, la mayoría de las reacciones químicas que se realizan internamente no podrían llevarse a cabo.

    .bloque-texto-g.fondo-color-sistema-m.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las enzimas son catalizadores orgánicos de naturaleza proteica, que aumentan considerablemente la velocidad de las reacciones. Cuando una proteína se desnaturaliza, por ejemplo, por medio del calor, en muchos casos se pierde la actividad de las enzimas. 
    
    Separador 

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-down")
      h2 2.2 Metabolismo
    
    p.mb-4(data-aos="fade-down") El metabolismo es un sinfín de reacciones bioquímicas y fisicoquímicas que ocurren en las células y en el organismo. En los seres humanos es realizado por enzimas generadas por el hígado. El metabolismo implica la coordinación de varios procesos:

    .row.align-items-center(data-aos="fade-down") 
      .col-lg-6
        LineaTiempoD.linea-tiempo-1
          .row(numero="1" titulo="Ingestión de alimentos")
            .col-12
              p Proceso de consumir alimentos.
          .row(numero="2" titulo="Digestión")
            .col-12
              p Proceso en el cual los alimentos se descomponen en sustancias más simples para ser utilizados por el cuerpo.
          .row(numero="3" titulo="Absorción de nutrientes")
            .col-12
              p Transferencia de nutrientes desde el tracto gastrointestinal hacia el sistema circulatorio, donde pueden ser distribuidos a diferentes partes del cuerpo.
          .row(numero="4" titulo="Transporte de nutrientes")
            .col-12
              p Distribución de nutrientes a través del sistema circulatorio hacia los lugares donde son necesarios y transporte de desechos hacia los puntos de excreción.
          .row(numero="5" titulo="Respiración")
            .col-12
              p Proceso que suministra oxígeno a los alimentos y elimina dióxido de carbono, un producto de desecho. El sistema respiratorio es responsable de transportar estos gases.
          .row(numero="6" titulo="Uso de nutrientes")
            .col-12
              p Proceso en el cual el organismo utiliza los nutrientes a través de la oxidación para producir calor y energía, necesarios para el funcionamiento y regeneración de células y tejidos.
          .row(numero="7" titulo="Excreción de desechos")
            .col-12
              p Eliminación de alimentos no digeridos y otros productos de desecho del cuerpo. Por ejemplo, el dióxido de carbono y sales minerales se eliminan a través de los pulmones, mientras que los riñones y la piel eliminan otros productos del metabolismo.
      .col-lg-6.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 610px;")
    
    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-down")
      h2 2.3 Digestión
    
    p.mb-4(data-aos="fade-down") Solo unas pocas sustancias contenidas en los alimentos pueden ser utilizadas por el cuerpo sin necesidad de sufrir ningún cambio.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-3.pe-lg-0
        .fondo-color-sistema-m.p-4.align-content-center.h-100
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/25.svg",style="max-width: 95px;")
      .col-lg-5.ps-lg-0
        .fondo-color-primario.p-3.h-100
          p.mb-0.pt-lg-4 #[b Por ejemplo], el agua, los azúcares simples, algunas sales minerales y vitaminas.
    
    .fondo-color-sistema-k.mb-4(data-aos="fade-down")
      .row
        .col-lg-5
          .h-100.align-content-center
            figure
              img.mx-auto(src="@/assets/curso/temas/26.png")
        .col-lg-7
          .p-4.align-content-center.h-100
            p.mb-0 La digestión comprende #[b procesos mecánicos y químicos] por medio de los cuales los materiales alimenticios complejos son hidrolizados a formas adecuadas para poder ser absorbidas por la pared de la mucosa y así ser utilizadas por el organismo. Además, estas sustancias hidrolíticas controlan ciertas sustancias que se absorben en el tracto intestinal, como el calcio o el hierro, y también previenen la absorción de moléculas no deseadas. Aquí también se sintetizan #[b enzimas y hormonas] requeridas para el proceso digestivo, se eliminan los desechos residuales de la digestión de los alimentos, así como otras sustancias endógenas, y se renueva su propia estructura cada 24 a 48 horas.

    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      p.mb-0 #[b Tabla 1.] Hormonas que regulan la actividad secretora y motora del tracto digestivo
    
    .tabla-a.tabla-p-1(data-aos="fade-down")
      table
        thead
          tr
            th Hormona
            th Dónde se produce
            th Estímulo a la secreción
            th Acción
        tbody
          tr
            td Gastrina
            td Mucosa del píloro y el duodeno
            td Alimento en el estómago, especialmente proteínas, cafeína, especias y alcoholes
            td Estimula el flujo del jugo gástrico
          tr
            td Enterogastrona
            td Duodeno
            td Quimo ácido, grasas
            td Inhibe la secreción del jugo gástrico y reduce la motilidad
          tr
            td Colecistoquinina
            td Duodeno
            td Grasa en el duodeno
            td Contracción de la vesícula biliar y flujo de bilis al duodeno
          tr
            td Secretina
            td Duodeno
            td Quimo ácido y polipéptidos
            td Secreción del jugo pancreático, delgado, alcalino y pobre en enzimas
          tr
            td Pancreozimina
            td Duodeno y el yeyuno
            td Quimo ácido y polipéptidos
            td Secreción de jugo pancreático viscoso, rico en enzimas
          tr
            td Enterocrinina
            td Intestino delgado superior
            td Quimo
            td Secreción de las glándulas de la mucosa intestinal

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido.mb-0(data-aos="fade-down")
      h2 2.4 Absorción
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pt-5
        p.mb-5(data-aos="fade-down") Es el proceso por el cual los nutrientes se mueven desde el lumen intestinal hasta la sangre, dando como resultado la absorción de nutrientes en el organismo. Es un proceso activo en el cual las sustancias son transportadas dentro del cuerpo; también es un proceso selectivo en el cual algunos materiales, como la glucosa, son transportados casi en su totalidad a través de las células.

        .row.justify-content-center(data-aos="fade-down")
          .col-lg-3.pe-lg-0
            .fondo-color-sistema-m.p-4.align-content-center.h-100
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/27.svg",style="max-width: 72px;")
          .col-lg-5.ps-lg-0
            .fondo-color-primario.p-3.h-100
              p.mb-0.pt-lg-4 #[b Otro ejemplo] es el del calcio y el hierro, que se absorben solo de acuerdo con las necesidades del organismo.
        
        .titulo-decorativo.my-5(data-aos="fade-down")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Punto y velocidad de absorción
        
        .row(data-aos="fade-down")
          .col-lg-8
            p.mb-0 La absorción se realiza principalmente en el duodeno y el yeyuno. Normalmente, el 98 % de los carbohidratos, el 95 % de la grasa y el 92 % de la proteína de la dieta se hidrolizan y se absorben los productos finales. Estos porcentajes son conocidos como coeficientes de digestibilidad.
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/28.svg",style="max-width: 400px;")
        
        .titulo-decorativo.mt-5.mb-4(data-aos="fade-down")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Mecanismos de absorción
        
        p.mb-0(data-aos="fade-down") Se conocen tres mecanismos para explicar la absorción, los cuales se detallan a continuación:

    .row.align-items-center.mb-4.mt-5(data-aos="fade-down")
      .col-lg-3
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/29.png",style="max-width: 295px;")
      .col-lg-9
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="Difusión simple a través de los poros o canales")
            .ps-md-5.ms-md-3
              p Se realiza cuando las sustancias de muy bajo peso molecular, como el agua, se pueden mover libremente a través de la membrana, desde el lado de alta concentración hasta el lado de baja concentración. Este proceso es fundamental para el transporte de moléculas pequeñas por la membrana celular y es uno de los principales mecanismos de la regulación osmótica de células.
          .div(titulo="Difusión pasiva facilitada por transportadores")
            .ps-md-5.ms-md-3
              p Los nutrientes que son solubles en agua no pueden penetrar la membrana de la célula, que es rica en lípidos. En este proceso entran los llamados transportadores, que facilitan el cruce de estos nutrientes a la membrana celular; esto se conoce como difusión facilitada.
          .div(titulo="Transporte activo")
            .ps-md-5.ms-md-3
              p La mayor absorción de los nutrientes se lleva a cabo mediante un transporte activo. Este transporte bombea los nutrientes hacia arriba y desde el lumen a la circulación, lo que significa que los nutrientes se mueven desde un punto de baja concentración a otro de alta concentración. Para que esto funcione, se requiere energía para el transporte activo, suministrada por los ATP (Adenosín trifosfato) del mecanismo de la glucosa dentro de la célula. El sodio tiene un papel fundamental en el transporte activo del agua, azúcares y aminoácidos.
    
    p.mb-4(data-aos="fade-down") La siguiente figura presenta el proceso de absorción de nutrientes en el sistema digestivo humano. En ella, se destacan los diferentes mecanismos de absorción, como la difusión, la difusión facilitada y el transporte activo, que permiten la incorporación de diversas sustancias esenciales desde el intestino hacia la sangre y la linfa.

    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      p.mb-0 #[b Figura 1.] Absorción
    .fondo-color-sistema-h.p-4(data-aos="fade-down")
      figure
        img.mx-auto(src="@/assets/curso/temas/30.svg",style="max-width: 1155px;",alt="La figura  de absorción de nutrientes en el intestino delgado y grueso, se ilustra el proceso de absorción de diversas vitaminas, minerales, nutrientes y agua en diferentes partes del intestino, incluyendo el duodeno, yeyuno, íleon y colon. Se destacan los mecanismos de difusión, difusión facilitada y transporte activo.")

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
