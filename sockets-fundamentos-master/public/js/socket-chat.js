var socket = io();

let params = new URLSearchParams(window.location.search);

if (!params.has("nombre") || !params.has("sala")) {
  window.location = "index.html";
  throw new Error("El nombre y sala son necesarios");
}

let usuario = {
  nombre: params.get("nombre"),
  sala: params.get("sala"),
};

socket.on("connect", function () {
  console.log("Conectado al servidor"); // Cuando un usuario se conecta dispara en el servidor en la parte de sockets que el usuario se conecto
  socket.emit("entrarChat", usuario, function (resp) {
    console.log("Usuarios conectados", resp);
  }); // Dispara un evento
});

// escuchar
socket.on("disconnect", function () {
  console.log("Perdimos conexión con el servidor");
});

// Enviar información
socket.emit(
  "enviarMensaje",
  {
    usuario: "Fernando",
    mensaje: "Hola Mundo",
  },
  function (resp) {
    console.log("respuesta server: ", resp);
  }
);

// Escuchar información
socket.on("crearMensaje", function (mensaje) {
  console.log("Servidor:", mensaje);
});

//Escuchar cambios de usuarios
// Cuando un usuario entra / sale del chat
socket.on("listaPersona", function (personas) {
  console.log(personas);
});

// Mensaje privados
socket.on("mensajePrivado", function (mensaje) {
  console.log("Mensaje Privado:", mensaje);
});
