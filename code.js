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
  datosPersona.nombre = prompt("Enter your name")
  let fechaNacimiento = prompt("Enter your year of birth")
  datosPersona.ciudad = prompt("Enter the city where you live")
  datosPersona.interesPorJs = confirm("you are interested in Javascript?")
  let año = new Date();
  datosPersona.edad = año.getFullYear() - fechaNacimiento
  console.log(datosPersona)
}
function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre = document.querySelector("#nombre")
  let edad = document.querySelector("#edad")
  let ciudad = document.querySelector("#ciudad")
  let interes = document.querySelector("#javascript")

  nombre.textContent = datosPersona.nombre
  edad.textContent = datosPersona.edad
  ciudad.textContent = datosPersona.ciudad
  interes.textContent = datosPersona.interesPorJs
}
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  for (let len of listado) {
    let createCard = () => {
      let cotenedor = document.createElement('section');
      cotenedor.className = 'contenedor';
      let imagen = document.createElement('img');
      imagen.src = len.imgUrl;
      let nombre = document.createElement('h2');
      nombre.innerText = len.lenguajes;
      let bimestre = document.createElement('p');
      bimestre.innerText = len.bimestre;
      cotenedor.appendChild(imagen);
      cotenedor.appendChild(nombre);
      cotenedor.appendChild(bimestre);

      return cotenedor
    }
    const newCard = createCard();
    const con = document.querySelector('#fila');
    con.appendChild(newCard);
  }
}
function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let cambiarTema = document.querySelector("#sitio")

  if (cambiarTema.classList.contains("dark")) {
    cambiarTema.classList.remove("dark");
  } else {
    cambiarTema.classList.add("dark");
  }
}
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let descripcion = document.querySelector("#sobre-mi");
let prueba = document.querySelector("oculto");
window.addEventListener("keypress", function (event) {
  if (event.key == "f" || "F") {
    descripcion.textContent =
      "Nombre: " + datosPersona.nombre + "\n" +
      "Edad: " + datosPersona.edad + "\n" +
      "Ciudad: " + datosPersona.ciudad + "\n" +
      "Interés en JavaScript: " + datosPersona.interesPorJs
    descripcion.classList.remove("oculto")
  }
});