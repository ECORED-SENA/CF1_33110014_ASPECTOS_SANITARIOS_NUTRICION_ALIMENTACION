<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Función nutritiva de los nutrientes
    
    .fondo-personalizado-1.bottom-1.f1
      .fondo-personalizado-1__contenido.pt-5
        .row.mb-4(data-aos="fade-down")
          .col-lg-9.pe-lg-0(data-aos="fade-right")
            .fondo-color-sistema-i.p-4.h-100
              p.mb-0 Los procesos del metabolismo son difíciles de explicar. A continuación, se describen algunos detalles. Por ejemplo, es posible seguir la digestión, la absorción y el metabolismo intermedio en un carbohidrato específico o en cualquier nutriente, pero esto puede causar una impresión errónea debido a la multitud de fenómenos metabólicos que se presentan dentro de las células. Cada fenómeno está afectado por otros que lo preceden o que se realizan al mismo tiempo. La utilización de cualquier nutriente se interrelaciona con muchos otros.
          .col-lg-3.ps-lg-0.order-first.order-lg-last(data-aos="fade-left")
            .fondo-color-sistema-i.h-100.align-content-center
              figure
                img.mx-auto(src="@/assets/curso/temas/31.png")
        
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 2.] Uso de nutrientes
        .fondo-color-sistema-g.p-4.py-lg-5(data-aos="fade")
          figure
            img.mx-auto(src="@/assets/curso/temas/32.svg",style="max-width: 1007px;",alt="La figura presenta la función de los hidratos de carbono, grasa, proteínas, minerales y vitaminas en la estructura del cuerpo, la producción de energía y la regulación metabólica. Se pregunta por la posibilidad de reservas corporales de estos nutrientes.")
    
    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Hidratos de carbono
    
    .row.align-items-center
      .col-lg-9
        .fondo-color-sistema-p.p-4.h-100.align-content-center(data-aos="fade-right")
          p.mb-0 Los hidratos de carbono, también conocidos como glúcidos, se clasifican como monosacáridos o azúcares simples, disacáridos o azúcares dobles, y polisacáridos, que son los de mayor complejidad. La función más relevante de los carbohidratos es el suministro de energía.
      .col-lg-3.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/33.svg",style="max-width: 295px;")
    
    .fondo-personalizado-1.bottom-1.f1(data-aos="fade-right")
      .fondo-personalizado-1__contenido
        .titulo-decorativo.my-4
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Azúcares simples
        
        p.mb-4(data-aos="fade-right") #[b Los monosacáridos] son compuestos que no pueden ser hidrolizados a otros más simples. Dentro de este grupo se encuentran la glucosa y la fructosa.

        .row.justify-content-center.mb-3(data-aos="fade-up")
          .col-lg-2.pe-lg-0
            .fondo-color-sistema-m.p-4.h-100.align-content-center
              figure
                img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 125px;")
          .col-lg-8.ps-lg-0
            .fondo-color-sistema-q.p-3.h-100.align-content-center 
              p.mb-3.fw-bold Glucosa
              p.mb-0 También conocida como dextrosa, es un monosacárido libre que, aunque es el más abundante, se encuentra en pequeñas cantidades. Está presente en frutas dulces como la uva, la mora y la naranja, y en algunos vegetales como el maíz y la zanahoria. Además, la mayoría de los hidratos de carbono se transforman en glucosa tras el proceso de digestión.
        .row.justify-content-center.mb-3(data-aos="fade-up")
          .col-lg-2.pe-lg-0
            .fondo-color-sistema-m.p-4.h-100.align-content-center
              figure
                img.mx-auto(src="@/assets/curso/temas/35.svg",style="max-width: 125px;")
          .col-lg-8.ps-lg-0
            .fondo-color-sistema-q.p-3.h-100.align-content-center 
              p.mb-3.fw-bold Fructosa
              p.mb-0 Denominada el azúcar de las frutas. Es un azúcar muy soluble que no se cristaliza rápidamente. Es mucho más dulce que el azúcar de caña y se encuentra en la miel, las frutas maduras y en algunos vegetales; también es producto de la hidrólisis de la sacarosa.
        .row.justify-content-center.mb-3(data-aos="fade-up")
          .col-lg-2.pe-lg-0
            .fondo-color-sistema-m.p-4.h-100.align-content-center
              figure
                img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 160px;")
          .col-lg-8.ps-lg-0
            .fondo-color-sistema-q.p-3.h-100.align-content-center 
              p.mb-3.fw-bold Galactosa
              p.mb-0 Este compuesto no se encuentra libre en ningún alimento; solo se forma a partir de la hidrólisis de la lactosa. Además, es un componente de polisacáridos de los vegetales, como es el caso de las pectinas, gomas y mucílagos.

        .titulo-decorativo.my-4(data-aos="fade")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Disacáridos
        
        p.mb-4(data-aos="fade-left") Son azúcares abundantes en los alimentos, los más conocidos son la sacarosa y la lactosa.
        
        .fondo-color-primario.borde-20.p-4.overflow-hidden.position-relative.mb-4(data-aos="flip-up")
          img.fig-abs-p-1(src="@/assets/curso/temas/37.png")
          PasosB.pasos-personalizado-1
            .row.justify-content-center.pt-lg-4(titulo="Lactosa")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Lactosa
                p.mb-0.me-lg-4 Azúcar de la leche producida por los mamíferos. Es el único carbohidrato de origen animal de gran importancia en la dieta. La concentración en la leche varía del 2 % al 8 %, dependiendo de la especie del animal.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/38.png",style="max-width: 400px;")
            .row.justify-content-center.pt-lg-4(titulo="Sacarosa")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Sacarosa
                p.mb-0.me-lg-4 Azúcar de mesa más conocido, presente en la caña de azúcar y la remolacha. Su fórmula química está compuesta por una molécula de fructosa y una de glucosa. Se encuentra de forma natural en muchas frutas y se usa en productos de panadería, pastelería y bebidas refrescantes. Su hidrólisis da como resultado el llamado azúcar invertido.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/39.png",style="max-width: 400px;")
            .row.justify-content-center.pt-lg-4(titulo="Maltosa")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Maltosa
                p.mb-0.me-lg-4 Azúcar de la malta, compuesta por dos moléculas de glucosa. Se produce durante la germinación de los granos y está presente en la cerveza y en los cereales malteados.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/40.png",style="max-width: 400px;")
        
    p.fw-bold.mb-5(data-aos="fade") Los monosacáridos y disacáridos poseen características comunes, tales como:

    .row(data-aos="fade-down")
      .col-lg-3.col-md-6.mb-4
        .tarjeta-p-1.p-3.h-100
          p Absorción rápida y fácil
      .col-lg-3.col-md-6.mb-4
        .tarjeta-p-1.p-3.h-100
          p Sabor dulce
      .col-lg-3.col-md-6.mb-4
        .tarjeta-p-1.p-3.h-100
          p Solubilidad en agua y facilidad para formar jarabes
      .col-lg-3.col-md-6.mb-4
        .tarjeta-p-1.p-3.h-100
          p Capacidad de cristalización
      .col-lg-3.col-md-6.mb-4
        .tarjeta-p-1.p-3.h-100
          p Valor energético
      .col-lg-3.col-md-6.mb-4
        .tarjeta-p-1.p-3.h-100
          p Carácter de carbohidratos fermentables
      .col-lg-3.col-md-6.mb-4
        .tarjeta-p-1.p-3.h-100
          p Capacidad de inhibir el crecimiento de microorganismos en concentraciones elevadas
      .col-lg-3.col-md-6.mb-4
        .tarjeta-p-1.p-3.h-100
          p Capacidad de caramelizar
    
    .row.justify-content-center(data-aos="zoom-in-out")
      .col-lg-10
        .fondo-color-sistema-p.p-4
          .row 
            .col-lg-9
              p.mb-0.pt-lg-4 Algunos de los monosacáridos que tienen el grupo carbonilo libre pueden unirse con proteínas y ser responsables de colores oscuros (reacciones de pardeamiento). En algunos casos pueden encontrarse polioles derivados de hidrogenados de hexosas como sorbitol o manitol.
            .col-lg-3.order-first.order-lg-last.mb-4.mb-lg-0
              .bg-white.borde-8.p-4.h-100.align-content-center
                figure
                  img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 173px;")
    
    .titulo-decorativo.my-4.mb-0(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Polisacáridos
    
    .fondo-personalizado-1.f1.mb-5
      .fondo-personalizado-1__contenido.pt-4
        p.mb-4(data-aos="fade") Son compuestos complejos de peso molecular alto, son amorfos y no son dulces. Los almidones, las dextrinas, glicógeno y varios carbohidratos no digeribles son de interés nutricional.

        .row.justify-content-center.mb-4(data-aos="fade-right")
          .col-lg-3.pe-lg-0
            .h-100.align-content-center
              figure
                img.mx-auto(src="@/assets/curso/temas/42.png",style="max-width: 400px;")
          .col-lg-5.ps-lg-0
            .fondo-color-primario.h-100.align-content-center.p-4
              p.mb-4.fw-bold Polisacáridos no digeribles
              p.mb-0 Están compuestos por celulosa y hemicelulosa, de importancia en el estudio de la nutrición. Los rumiantes pueden utilizar la celulosa para producir energía porque tienen enzimas que les ayudan en este proceso. Para el ser humano, la celulosa es un constituyente dietético no digerible. Algunos polisacáridos no digeribles son de mucha utilidad en el procesamiento de los alimentos, como las pectinas que se encuentran en las frutas y que tienen la capacidad de absorber agua y formar geles.

        .row.justify-content-center.mb-4(data-aos="fade-left")
          .col-lg-3.ps-lg-0.order-first.order-lg-last
            .h-100.align-content-center
              figure
                img.mx-auto(src="@/assets/curso/temas/43.png",style="max-width: 400px;")
          .col-lg-5.pe-lg-0
            .fondo-color-primario.h-100.align-content-center.p-4
              p.mb-4.fw-bold Funciones
              p.mb-0 Casi todos los carbohidratos de la dieta se utilizan para suplir las necesidades energéticas del cuerpo. Una fracción muy pequeña de los carbohidratos disponibles se emplea para la síntesis de varios compuestos reguladores.

        .row.justify-content-center.mb-4(data-aos="fade-right")
          .col-lg-3.pe-lg-0
            .h-100.align-content-center
              figure
                img.mx-auto(src="@/assets/curso/temas/44.png",style="max-width: 400px;")
          .col-lg-5.ps-lg-0
            .fondo-color-primario.h-100.align-content-center.p-4
              p.mb-4.fw-bold Energía
              p.mb-0 #[b Al oxidarse], cada gramo de carbohidratos produce un promedio de #[b cuatro calorías]. Parte de los carbohidratos en forma de glucosa se usan directamente para cubrir las necesidades energéticas de tejidos inmediatos, unas pocas se almacenarán como glicógeno en el hígado y los músculos, y otra parte lo hará como tejido adiposo para convertir energía cuando sea necesario. La glucosa es la única forma de energía para #[b el cerebro y el sistema nervioso].
    
        Separador.pb-0

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Lípidos
    
    p.mb-4(data-aos="fade") Una de las funciones más importantes de los lípidos es servir de #[b fuente de energía metabólica y aportar elementos estructurales para la membrana celular]. También sirven como transportadores de las vitaminas liposolubles y precursores de hormonas. Los lípidos en forma de triglicéridos son una fuente importante para el almacenamiento de energía en el organismo (Rodríguez & Magro, 2008).

    p.mb-5(data-aos="fade") Los lípidos se clasifican en tres grupos:

    .fondo-personalizado-1.pos-top.f3
      .fondo-personalizado-1__contenido
        .row 
          .col-lg-4.mb-4(data-aos="fade-right")
            .tarjeta-p-2.p-4
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/45.png",style="max-width: 309px;")
              h4.mb-4.tarjeta-p-2__titulo Grasas
              p Son una importante fuente de energía. Su función principal es suministrarla, y al oxidarse, cada gramo de grasa produce aproximadamente 9 calorías. Esta energía se encuentra continuamente a disposición en los tejidos adiposos. La alta densidad y baja solubilidad de las grasas las hacen una forma ideal para el almacenamiento de energía. Ejemplo: mantequilla, aceite de oliva.
          .col-lg-4.mb-4(data-aos="fade-up")
            .tarjeta-p-2.p-4
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 309px;")
              h4.mb-4.tarjeta-p-2__titulo Ácidos grasos esenciales
              p El ácido linoleico es un ácido graso esencial que no puede ser sintetizado por el cuerpo y debe estar presente en la dieta. Este compuesto se convierte rápidamente en ácido araquidónico. Ejemplo: aceite de girasol, aceite de soja. 
          .col-lg-4.mb-4(data-aos="fade-left")
            .tarjeta-p-2.p-4
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/47.png",style="max-width: 309px;")
              h4.mb-4.tarjeta-p-2__titulo Fosfolípidos 
              p Todas las células contienen fosfolípidos, pero los tejidos del cerebro, los tejidos nerviosos y el hígado son especialmente ricos en ellos. Los fosfolípidos son poderosos agentes emulsionantes y tienen afinidad con el agua. Son esenciales en la digestión y facilitan la absorción de ácidos grasos por las células. Ejemplo: lecitina (en huevo y soja).

        Separador
    
    #t_3_3.titulo-segundo.color-acento-contenido.mb-0(data-aos="fade")
      h2 3.3 Proteínas
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pt-5
        p.mb-0(data-aos="fade-right") Las proteínas son una fuente importante de nitrógeno y tienen una función estructural y plástica.

        .titulo-decorativo.my-4(data-aos="fade-left")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Mantenimiento y crecimiento
        
        .row(data-aos="flip-up")
          .col-lg-8.mb-4
            .fondo-color-sistema-q.p-4.h-100.borde-8
              p.mb-0 Las proteínas son la principal materia prima de #[b los músculos, órganos y glándulas endocrinas]. Son las formadoras de la matriz de los huesos y los dientes, e incluso de la #[b piel, las uñas, el cabello, las células y el suero sanguíneo]. También cumplen #[b la función reguladora de hormonas y enzimas]. Adicionalmente, desempeñan una función defensiva en el organismo.
          .col-lg-4.mb-4
            .fondo-color-sistema-p.p-3.borde-8
              figure
                img.mx-auto(src="@/assets/curso/temas/49.svg",style="max-width: 264px;")
        
        p.mb-0(data-aos="fade-right") Son una fuente potencial de energía puesto que cada proteína produce un promedio de 4 calorías. Su importancia en los alimentos radica en #[b la retención de agua], así como en sus propiedades #[b gelificantes, emulsionantes y espumantes].

        .titulo-decorativo.my-4(data-aos="fade-right")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Fracción no digerible de los alimentos
        
        p.mb-4(data-aos="fade-right") La fracción no digerible de los alimentos incluye diversos componentes que el cuerpo humano no puede descomponer ni absorber durante el proceso de digestión. Estos componentes son:

        .row.justify-content-center(data-aos="fade-up")
          .col-lg-10
            .fondo-color-sistema-i.p-4
              .row.align-items-center 
                .col-lg-4
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/50.png",style="max-width: 295px;")
                .col-lg-8
                  ul.lista-ul.lista-p-1 
                    li
                      span.fas.fa-check-circle.c-color-acento-contenido
                      div
                        p.fw-bold.mb-0 Fibra alimentaria
                        p.mb-0 Celulosa, hemicelulosa, pectinas, lignina, gomas y mucílagos.
                    li
                      span.fas.fa-check-circle.c-color-acento-contenido
                      div
                        p.fw-bold.mb-0 Almidón resistente
                        p.mb-0 Almidón modificado por tratamientos térmicos y de conservación en frío de los alimentos.
                    li
                      span.fas.fa-check-circle.c-color-acento-contenido
                      div
                        p.fw-bold.mb-0 Oligosacáridos
                        p.mb-0 Rafinosa, estaquiosa, verbascosa, etc.
                    li
                      span.fas.fa-check-circle.c-color-acento-contenido
                      div
                        p.fw-bold.mb-0 Polifenoles
                        p.mb-0 Polímeros de ácido gálico (taninos) y flavonoides.
                    li
                      span.fas.fa-check-circle.c-color-acento-contenido
                      div
                        p.fw-bold.mb-0 Proteína resistente
                        p.mb-0 Proteína no hidrolizada por enzimas digestivas.
    
    .titulo-decorativo.my-4(data-aos="fade")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Tipos de proteínas en el cuerpo y sus funciones
    
    p.mb-4(data-aos="fade-left") Las proteínas desempeñan roles esenciales en el cuerpo humano, cada una con funciones específicas y vitales para el correcto funcionamiento del organismo. A continuación, se presentan los principales tipos de proteínas y sus respectivas funciones:

    .fondo-color-primario.borde-20.p-4.overflow-hidden.position-relative.mb-4(data-aos="flip-up")
      img.fig-abs-p-1(src="@/assets/curso/temas/37.png")
      PasosB.pasos-personalizado-1
        .row.justify-content-center.pt-lg-4.mb-4(titulo="Enzimas")
          .col-lg-6.mb-4.mb-lg-0
            h4.mb-4 Enzimas
            p.mb-0.me-lg-4 Biocatalizadores que ayudan en las reacciones bioquímicas que ocurren en el cuerpo todo el tiempo. Ejemplo: Pepsina.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/51.png",style="max-width: 400px;")
        .row.justify-content-center.pt-lg-4.mb-4(titulo="Proteínas de transporte")
          .col-lg-6.mb-4.mb-lg-0
            h4.mb-4 Proteínas de transporte
            p.mb-0.me-lg-4 Llevan diferentes sustancias de la sangre a diferentes tejidos. Ejemplo: Hemoglobina.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/52.png",style="max-width: 400px;")
        .row.justify-content-center.pt-lg-4.mb-4(titulo="Proteínas contráctiles")
          .col-lg-6.mb-4.mb-lg-0
            h4.mb-4 Proteínas contráctiles
            p.mb-0.me-lg-4 Responsables de la contracción muscular para el movimiento y la locomoción. Ejemplo: Miosina.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/53.png",style="max-width: 400px;")
        .row.justify-content-center.pt-lg-4.mb-4(titulo="Proteínas estructurales")
          .col-lg-6.mb-4.mb-lg-0
            h4.mb-4 Proteínas estructurales
            p.mb-0.me-lg-4 Forman parte de las células y los tejidos. Ejemplo: Colágeno.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/54.png",style="max-width: 400px;")
        .row.justify-content-center.pt-lg-4.mb-4(titulo="Proteínas protectoras")
          .col-lg-6.mb-4.mb-lg-0
            h4.mb-4 Proteínas protectoras
            p.mb-0.me-lg-4 Ayudan a combatir las infecciones. Ejemplo: Anticuerpos y gammaglobulinas.
          .col-lg-5
            figure
              img.mx-auto(src="@/assets/curso/temas/55.png",style="max-width: 400px;")
    
    .titulo-decorativo.my-4.mb-0(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Clasificación de los alimentos
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pt-4.pb-5
        p.mb-4(data-aos="fade-up") El objetivo de esta clasificación es la función de los nutrientes más importantes en las dietas alimenticias. Los gobiernos de cada país llevan a cabo políticas nutricionales y establecen los requerimientos que la población necesita.

        .row.justify-content-center.mb-2(data-aos="fade-right")
          .col-lg-2.col-md-4.pe-md-0.align-content-center
            figure
              img.mx-auto(src="@/assets/curso/temas/56.png")
          .col-lg-8.col-md-8.ps-md-0
            .fondo-color-sistema-i.p-4.h-100
              p.fw-bold.mb-3 Alimentos plásticos
              p.mb-0 Leche y derivados, carne, pescado y huevos.
        .row.justify-content-center.mb-2(data-aos="fade-left")
          .col-lg-2.col-md-4.pe-md-0.align-content-center
            figure
              img.mx-auto(src="@/assets/curso/temas/57.png")
          .col-lg-8.col-md-8.ps-md-0
            .fondo-color-sistema-i.p-4.h-100
              p.fw-bold.mb-3 Alimentos energéticos
              p.mb-0 Cereales y derivados, patatas, grasas y aceites.
        .row.justify-content-center.mb-2(data-aos="fade-right")
          .col-lg-2.col-md-4.pe-md-0.align-content-center
            figure
              img.mx-auto(src="@/assets/curso/temas/58.png")
          .col-lg-8.col-md-8.ps-md-0
            .fondo-color-sistema-i.p-4.h-100
              p.fw-bold.mb-3 Alimentos fundamentalmente energéticos
              p.mb-0 Legumbres, frutos secos.
        .row.justify-content-center.mb-2(data-aos="fade-left")
          .col-lg-2.col-md-4.pe-md-0.align-content-center
            figure
              img.mx-auto(src="@/assets/curso/temas/59.png")
          .col-lg-8.col-md-8.ps-md-0
            .fondo-color-sistema-i.p-4.h-100
              p.fw-bold.mb-3 Alimentos reguladores
              p.mb-0 Verduras y hortalizas, frutas.
        .row.justify-content-center.mb-5(data-aos="fade-right")
          .col-lg-2.col-md-4.pe-md-0.align-content-center
            figure
              img.mx-auto(src="@/assets/curso/temas/60.png")
          .col-lg-8.col-md-8.ps-md-0
            .fondo-color-sistema-i.p-4.h-100
              p.fw-bold.mb-3 Alimentos complementarios
              p.mb-0 Azúcares y productos azucarados, sal, grasas animales y de adición, bebidas refrescantes, estimulantes y alcohólicas.
  
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
