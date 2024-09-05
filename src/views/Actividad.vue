<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Conceptos nutricionales',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar  los conceptos clave de la nutrición, incluyendo la composición del cuerpo humano, la función y clasificación de los nutrientes, y los procesos de digestión y absorción.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el principal componente del cuerpo humano por peso?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Carbohidratos.', esCorrecta: false },
            { id: 'b', texto: 'Proteínas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Agua.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Minerales.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes nutrientes es esencial y no puede ser sintetizado por el cuerpo?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Glucosa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ácido linoleico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fructosa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Galactosa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la función principal de las enzimas en el cuerpo humano?',
          imagen: require('@/assets/componentes/pregunta_3.svg'),
          opciones: [
            { id: 'a', texto: 'Almacenar energía.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Acelerar reacciones químicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Proveer estructura a las células.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Transportar nutrientes.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué tipo de azúcar es la lactosa?',
          imagen: require('@/assets/componentes/pregunta_4.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Monosacárido.', esCorrecta: false },
            { id: 'b', texto: 'Polisacárido.', esCorrecta: false },
            { id: 'c', texto: 'Disacárido.', esCorrecta: true },
            { id: 'd', texto: 'Oligosacárido.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál de los siguientes es un ejemplo de difusión pasiva?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          opciones: [
            { id: 'a', texto: 'Absorción de glucosa.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Movimiento de agua a través de una membrana.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Transporte activo de sodio.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Síntesis de proteínas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes es un polisacárido no digerible por los humanos?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          opciones: [
            { id: 'a', texto: 'Glucosa.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Celulosa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Lactosa.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Maltosa.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Dónde se produce la secretina?',
          imagen: require('@/assets/componentes/pregunta_3.svg'),
          opciones: [
            { id: 'a', texto: 'Píloro.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Duodeno.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Hígado.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Estómago.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el principal propósito de los triglicéridos en el cuerpo?',
          imagen: require('@/assets/componentes/pregunta_4.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Proveer estructura celular.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenar energía.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Transportar vitaminas.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Sintetizar enzimas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes nutrientes se transforma en ácido araquidónico?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Ácido linoleico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ácido láurico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ácido oleico.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Ácido esteárico.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué porcentaje del peso corporal está compuesto por carbono?',
          imagen: require('@/assets/componentes/pregunta_2.svg'),
          opciones: [
            {
              id: 'a',
              texto: '3 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '4 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '18 %.',
              esCorrecta: true,
            },
            { id: 'd', texto: '65 %.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
