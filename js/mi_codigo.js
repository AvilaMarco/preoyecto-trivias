//variables y constantes
var indicePreguntaActual = 0;
var totalPuntos = 0;
const NombreAlumno = "Marco Avila";
const MaximoPreguntasPorJugada = 10;
const PuntosResultadoBien = 7;
var musicaHunter = new Audio('op1.mp3');
  musicaHunter.loop  =true;
  musicaHunter.muted  =true;
var musicaGeneral = new Audio('leaf.mp3');
  musicaGeneral.loop  =true;
  musicaGeneral.muted  =true;
var cancionActual;
var preguntasBloques;
var simulador = 0;

//referencia a objetos del html
var htmlSimulador = document.querySelectorAll("#opcionesPreguntas input");
var div_opciones = document.querySelectorAll("#opciones div");
var input_opciones = document.querySelectorAll("#opciones input");
var label_opciones = document.querySelectorAll("#opciones label");
var pantallaResultado = document.querySelector("#pantalla-resultado");
var pantallaPuntos = document.querySelector("#resultado-puntos");
var pantallaMal = document.querySelectorAll(".trivia-resultado-mal");
var pantallaBien = document.querySelectorAll(".trivia-resultado-bien");
var selecciontema = document.querySelector(".elegirtema");
var background = document.querySelector(".background");

//botones
var botonJugar = document.querySelector("#botonjugar").addEventListener("click", iniciarJuego);
var botonVerificar = document.querySelector("#boton-verificar");
var botonSiguiente = document.querySelector("#boton-siguiente");
var botonVolverAJugar = document.querySelector("#resultado-boton-volver-a-jugar");
var botonMusica = document.querySelector("#botonMusica");

//eventos
botonVerificar.addEventListener("click", verificarPreguntaActual);
botonSiguiente.addEventListener("click", manejadorBotónSiguiente);
botonVolverAJugar.addEventListener("click", reinicio);
botonMusica.addEventListener("click", reproducir);
selecciontema.addEventListener("change",fondos);

function fondos()
{
	background.classList.remove("fondohunter","fondoanimal");
	if (selecciontema.value == 1)
	{
		background.classList.add("fondohunter");
	}else if(selecciontema.value == 2)
	{
		background.classList.add("fondoanimal");
	}
}

function elegirPreguntas()
{
  //expresion depende edl valor que reciba del html
  switch (selecciontema.value)
  {
    case "1":
      preguntasBloques = preguntas[indicePreguntaActual];
      if(indicePreguntaActual == 0){desordenarArray(preguntas);}
      cancionActual = musicaHunter;
      break;
    case "2":
      preguntasBloques = preguntas2[indicePreguntaActual];
      if(indicePreguntaActual == 0){desordenarArray(preguntas2);}
      cancionActual = musicaGeneral;
      break;
    default:
  }
}

function reproducir()
{
  cancionActual.play();
  cancionActual.muted = !cancionActual.muted;
  if(cancionActual.muted){
    botonMusica.textContent = "reproducir musica";
  }else{
    botonMusica.textContent = "pausar musica";
  }
}

function reinicio()
{
  pantallaResultado.classList.add("d-none");
  totalPuntos = 0;
  indicePreguntaActual = 0;
  //cuando agregue otras trivias
  document.querySelector(".background").classList.remove("d-none");
}

function iniciarJuego()
{
  if(selecciontema.value != 0)
  {
    document.querySelector(".background").classList.add("d-none");
    document.querySelector("#pantalla-juego").classList.remove("d-none");
    elegirPreguntas();
    mostrarPregunta(preguntasBloques);
  }else {
    alert("elija una opcion");
  }
}

function mostrarPregunta(pregunta)
{
  //agrega el texto de la pregunta con su imagen
  document.querySelector("#pregunta-texto").textContent = pregunta.pregunta;
  document.querySelector("#pregunta-imagen").src = pregunta.imagen_src;

  desordenarArray(pregunta.opciones);

  //"limpia" las opciones que se van a mostrar y las agrega las nuevas
  for(var i = 0; i < input_opciones.length;i++)
  {
    div_opciones[i].classList.remove("correcta","erronea");
    input_opciones[i].checked = false;
    input_opciones[i].value = pregunta.opciones[i];
    label_opciones[i].textContent = pregunta.opciones[i];
  }
}

function verificarPreguntaActual()
{
  //for que recorre las opciones
  for (var i = 0; i < input_opciones.length; i++) {
    //comprueba si hay alguna opciones seleccionada
    if(input_opciones[i].checked)
    {
      if(input_opciones[i].value == preguntasBloques.respuesta_correcta)
      {
        totalPuntos++;
        div_opciones[i].classList.add('correcta');
      }else{
        div_opciones[i].classList.add('erronea');
      }
      botonVerificar.classList.add("d-none");
      botonSiguiente.classList.remove("d-none");
    }
  }
}

function manejadorBotónSiguiente()
{
  indicePreguntaActual++;
  elegirPreguntas();
  if(indicePreguntaActual < MaximoPreguntasPorJugada)
  {
    mostrarPregunta(preguntasBloques);
  }else {
    mostrarResultado();
  }
  botonVerificar.classList.remove("d-none");
  botonSiguiente.classList.add("d-none");
}

function mostrarResultado()
{
  document.querySelector("#pantalla-juego").classList.add("d-none");
  if(totalPuntos >= PuntosResultadoBien)
  {
    bienMal(pantallaMal);
  } else
  {
    bienMal(pantallaBien);
  }
  pantallaPuntos.textContent = totalPuntos;
  pantallaResultado.classList.remove("d-none");
  botonVolverAJugar.classList.remove("d-none");
}

//oculta elementos del html segun el resultado obtenido
function bienMal(pantallita) {
  for (var i = 0; i < pantallita.length; i++) {
    pantallita[i].classList.add("d-none");
  }
}
