(function () {
  /*-----------------------------------*/
  /* variables */
  /*-----------------------------------*/
  var formulario = document.getElementById('formulario');
  var btn_ver = document.getElementById('ver');
  var btn_agregar = document.getElementById('agregar');
  var btn_mensajes = document.getElementById('mensajes');
  /*-----------------------------------*/
  /* eventos */
  /*-----------------------------------*/
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  btn_ver.addEventListener('click', () => {
    window.location.href = "ver.html";
  });
  btn_agregar.addEventListener('click', () => {
    window.location.href = "agregar.html";
  });
  btn_mensajes.addEventListener('click', () => {
    window.location.href = "mensajes.html";
  });
}())
