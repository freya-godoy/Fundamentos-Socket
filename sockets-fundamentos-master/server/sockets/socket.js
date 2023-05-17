// import { io } from "../server";
// import { crearMensaje } from "../utilidades/utilidades.js";
// import { Usuarios } from "../classes/usuarios.js";


// const usuarios = new Usuarios();

// io.on("connection", (client) => {
//   client.on("entrarChat", (data, callback) => {
//     if (!data.nombre) {
//       return callback({
//         error: true,
//         mensaje: "El nombre es necesario",
//       });
//     }

//     let personas = usuarios.agregarPersona(client.id, data.nombre);

//     client.broadcast.emit('listaPersona', usuarios.getPersona());

//     callback(personas);
//   });

//   client.on("disconnect", () => {
//     let personaBorrada = usuarios.borrarPersona(client.id);
//     client.broadcast.emit('crearMensaje', crearMensaje('Administrador', `${personaBorrada.nombre} salio`));
//     client.broadcast.emit('listaPersona', usuarios.getPersona());
//   });
// });
