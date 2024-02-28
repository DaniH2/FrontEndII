/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 datosPersona.nombre = prompt("Ingresa tu nombre");
 
 let anoNacimiento = prompt("Ingrese su año de nacimiento");
 datosPersona.anoNacimiento = parseInt(anoNacimiento,10);
 
 let anoActual = new Date().getFullYear();
 datosPersona.edad = anoActual - datosPersona.anoNacimiento;
 
 datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
 datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?");
 datosPersona.interesPorJs = datosPersona.interesPorJs ? "Si" : "No";

 return (datosPersona);
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let obtenerNombre = document.getElementById('nombre');
  obtenerNombre.innerHTML = datosPersona.nombre;
  
  let obtenerEdad = document.getElementById('edad');
  obtenerEdad.innerHTML = datosPersona.edad;
  
  let obtenerCiudad = document.getElementById('ciudad');
  obtenerCiudad.innerHTML = datosPersona.ciudad;

  let interesJavascript = document.getElementById('javascript');
  interesJavascript.innerHTML = datosPersona.interesPorJs;

}
renderizarDatosUsuario(obtenerDatosDelUsuario);

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
//   for(let i = 0; i < listado.length; i ++) {
//   const img =

// }


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitioElemento = document.getElementById('sitio');
  sitioElemento.setAttribute('class', 'dark');
  sitioElemento.classList.contains('dark');
  console.log(sitioElemento);

  if(sitioElemento) {
    sitioElemento.style.color = "white"
    
  }; 
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui ----------------()----- */

