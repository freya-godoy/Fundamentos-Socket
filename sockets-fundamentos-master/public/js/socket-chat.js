let socket = io();

let params2 = new URLSearchParams(window.location.search);

if (!params2.has("nombre") || !params2.has("sala")) {
  window.location = "index.html";
  throw new Error("El nombre y sala son necesarios");
}

let usuario = {
  nombre: params2.get("nombre"),
  sala: params2.get("sala"),
};

socket.on("connect", function () {
  console.log("Conectado al servidor");

  socket.emit("entrarChat", usuario, function (resp) {
    //console.log('Usuarios conectados', resp);
    renderizarUsuarios(resp);
  });
});

// escuchar
socket.on("disconnect", function () {
  console.log("Perdimos conexión con el servidor");
});

// Enviar información
// socket.emit('crearMensaje', {
//     nombre: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on("crearMensaje", function (mensaje) {
  // console.log('Servidor:', mensaje);
  renderizarMensajes(mensaje, false);
  scrollBottom();
});

// Escuchar cambios de usuarios
// cuando un usuario entra o sale del chat
socket.on("listaPersona", function (personas) {
  //console.log('listaPersona', personas);
  renderizarUsuarios(personas);
});

// Mensajes privados
socket.on("mensajePrivado", function (mensaje) {
  console.log("Mensaje Privado:", mensaje);
});
