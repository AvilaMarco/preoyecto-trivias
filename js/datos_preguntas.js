/*
Archivo: datos_preguntas.js
Configuración de las preguntas del juego.
*/

var preguntas =
[
  {
    pregunta:'¿Por qué Gon quiere convertirse en cazador?',
    opciones:[
      'Para conocer a su padre',
      'Para viajar por el mundo',
      'Para encontrar a su padre',
      "Para saber porque su padre deseaba tanto ser un cazador"
    ],
    imagen_src:'img/preguntas/gon-chibi.jpg',
    respuesta_correcta: 'Para saber porque su padre deseaba tanto ser un cazador'
  },
  {
    pregunta:'¿A quién debía atrapar Gon para que Mito-san le dejara tomar el examen de cazador?',
    opciones:[
      'al señor del lago',
      'a Ging',
      'al oso-zorro',
      "a una ballena"
    ],
    imagen_src:'img/preguntas/gon-chibi.jpg',
    respuesta_correcta: 'al señor del lago'
  },
  {
    pregunta:'¿Cuántos años tiene Gon?',
    opciones:[
      '12',
      '11',
      '10',
      "13"
    ],
    imagen_src:'img/preguntas/gon-chibi.jpg',
    respuesta_correcta: '12'
  },
  {
    pregunta:'¿Cómo se llama la bestia mágica de la imagen?',
    opciones:[
      'kiriko',
      'bestia mafutatsu',
      'gran pisotón',
      "hormiga kimera"
    ],
    imagen_src:'img/preguntas/Kiriko.png',
    respuesta_correcta: 'kiriko'
  },
  {
    pregunta:'¿Cuál es el nombre del aplasta novatos?',
    opciones:[
      'Tompa',
      'Rompa',
      'Tomoe',
      "Tomki"
    ],
    imagen_src:'img/preguntas/tompa.png',
    respuesta_correcta: 'Tompa'
  },
  {
    pregunta:'¿Por qué Leorio quería tomar el examen de cazador?',
    opciones:[
      'Porque quería mucho dinero',
      'Porque quiere ser medico',
      'Porque quiere salvar a los niños de su pueblo',
      "Porque quería ser el mejor cazador del mundo"
    ],
    imagen_src:'img/preguntas/leorio.png',
    respuesta_correcta: 'Porque quería mucho dinero'
  },
  {
    pregunta:'Cuando nadie pudo pasar la segunda etapa del examen de cazador rehicieron la prueba ¿de qué animal tenían que conseguir un huevo para poder completar esa etapa?',
    opciones:[
      'águila-araña',
      'dragón',
      'lagarto melanin',
      "bestia voladora de seis piernas"
    ],
    imagen_src:'img/preguntas/aguila-araña.png',
    respuesta_correcta: 'águila-araña'
  },
  {
    pregunta:'En este juego ¿Qué vela había manipulado el preso Sedokan?',
    opciones:[
      'La vela corta',
      'La vela larga',
      'Ambas velas',
      "Ninguna de las que mostro"
    ],
    imagen_src:'img/preguntas/velas.jpg',
    respuesta_correcta: 'Ninguna de las que mostro'
  },
  {
    pregunta:'¿Cómo hace Gon para ganar el juego? Siendo que la vela que tenia se consumía muy rápido',
    opciones:[
      'Gon a apaga la vela de Sedokan',
      'El viento apaga la vela de Sedokan',
      'Con ayuda del nen Gon hace que su vela dure mas tiempo',
      "Sedokan apaga su vela"
    ],
    imagen_src:'img/preguntas/velas2.jpg',
    respuesta_correcta: 'Gon a apaga la vela de Sedokan'
  },
  {
    pregunta:'¿Qué numero tenía el pin de Hisoka?',
    opciones:[
      '44',
      '45',
      '46',
      "43"
    ],
    imagen_src:'img/preguntas/hisoka.jpg',
    respuesta_correcta: '44'
  }
];

var preguntas2 =
[
  {
    pregunta : "Los tentáculos  de los pulpos ¿son parte de su cerebro?",
    opciones:
    [
      "si",
      "no",
      "ninguna de las anteriores",
      "todas son correctas"
    ],
    respuesta_correcta : "si",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Cuántos brazos tiene un pulpo?",
    opciones:
    [
      "6",
      "7",
      "8",
      "9"
    ],
    respuesta_correcta : "8",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Qué les pasa a los pulpos luego de reproducirse?",
    opciones :
    [
      "Se mueren",
      "Viven felices",
      "Se buscan otra pareja",
      "Todas son correctas"
    ],
    respuesta_correcta : "se mueren",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Por Qué los perros mueven la cola?",
    opciones :
    [
      "Porque la cola no puede mover al perro",
      "Porque es otra parte del cuerpo que pueden mover, como las patas",
      "Porque es su manera de expresarse para demostrar alegría, tristeza, etc",
      "Todas son correctas"
    ],
    respuesta_correcta : "Todas son correctas",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Por Qué los gatos siempre caen de pie?",
    opciones :
    [
      "Poseen una glándula sensor en sus oídos que les permite orientarse rápidamente y darse vuelta para caer de pie",
      "Porque tienen 7 vidas y eso les trae mucha suerte",
      "Los gatos no siempre caen de pie",
      "Todas son correctas"
    ],
    respuesta_correcta : "Los gatos no siempre caen de pie",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Cuál de las siguientes especies de osos se encuentra en peligro de extinción?",
    opciones :
    [
      "Oso polar",
      "Oso pardo",
      "Oso de los andes",
      "Todas son correctas"
    ],
    respuesta_correcta : "Todas son correctas",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Los osos panda hibernan?",
    opciones :
    [
      "Si",
      "No",
      "Algunas veces",
      "Todos los inviernos"
    ],
    respuesta_correcta : "No",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿El oso panda es carnívoro?",
    opciones :
    [
      "Si",
      "No",
      "Algunas veces",
      "Todos son correctas"
    ],
    respuesta_correcta : "Si",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿El oso panda come bambú?",
    opciones :
    [
      "Su dieta se basa en eso",
      "No",
      "Algunas veces",
      "Si"
    ],
    respuesta_correcta : "Su dieta se basa en eso",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Cuanto pesa un oso panda al nacer?",
    opciones :
    [
      "30 gramos",
      "50 gramos",
      "1 kilogramo",
      "2 kilogramos"
    ],
    respuesta_correcta : "30 gramos",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Qué atrae más al mosquito cuando está en búsqueda de alimento? ",
    opciones :
    [
      "El color azul",
      "La luz led",
      "La sangre humana",
      "Todas las anteriores"
    ],
    respuesta_correcta : "El color azul",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Qué animal no necesita beber ni una sola gota de agua en toda su vida?",
    opciones :
    [
      "Ratón doméstico",
      "Sapo",
      "Hormiga",
      "Salamandra"
    ],
    respuesta_correcta : "Ratón doméstico",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Cuál de estos animales tiene la lengua el doble de largo que su cuerpo?",
    opciones :
    [
      "hipopótamo",
      "ratón doméstico",
      "Camaleón",
      "salamandra"
    ],
    respuesta_correcta : "Camaleón",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "Entre los mamíferos, ¿Quiénes viven más, las hembras o los machos?",
    opciones :
    [
      "Los macho",
      "Las hembras",
      "Los dos viven el mismo tiempo promedio",
      "nadie lo sabe"
    ],
    respuesta_correcta : "Las hembras",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Cuál es el pez más rápido?",
    opciones :
    [
      "El delfín",
      "El pez vela",
      "El tiburon",
      "nemo"
    ],
    respuesta_correcta : "el pez vela",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Qué mamífero es mudo?",
    opciones :
    [
      "La tortuga",
      "El caballo",
      "La jirafa",
      "doris"
    ],
    respuesta_correcta : "La jirafa",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Cuál es el insecto más fuerte?",
    opciones :
    [
      "La hormiga",
      "Los grillos",
      "el escarabajo",
      "krilin"
    ],
    respuesta_correcta : "el escarabajo",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "Cuántos dientes tienen los mosquitos?",
    opciones :
    [
      "47",
      "45",
      "137",
      "139"
    ],
    respuesta_correcta : "47",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿cuál es el pez más grande del mundo?",
    opciones :
    [
      "el Tiburón ballena",
      "la ballena azul",
      "Pulpo Gigante del Pacífico",
      "Tiburón Peregrino"
    ],
    respuesta_correcta : "el Tiburón ballena",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  },
  {
    pregunta : "¿Qué animal puede limpiarse las orejas con su lengua?",
    opciones :
    [
      "el león",
      "la jirafa",
      "la vaca",
      "la cabra"
    ],
    respuesta_correcta : "la jirafa",
    imagen_src : "img/animalesLogo.jpg",
    dificil : false
  }
];
