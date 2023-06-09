export class Usuarios {
  // clase que se encarga de los usuarios conectados

  constructor() {
    this.personas = [];
  }

  agregarPersona(id, nombre, sala) {
    // metodo que recibe el nombre y id de la persona y la agrega
    let persona = { id, nombre, sala };

    this.personas.push(persona);

    return this.personas;
  }

  getPersona(id) {
    //Obtener una persona por id
    const persona = this.personas.filter((persona) => {
      return persona.id === id;
    })[0];

    return persona;
  }

  getPersonas() {
    //Obtener personas
    return this.personas;
  }

  getPersonasPorSala(sala) {
    let PersonasEnSala = this.personas.filter(persona => persona.sala === sala)
    return PersonasEnSala;
  }

  borrarPersona(id) {
    let personaBorrada = this.getPersona(id);
    // console.log("borrarPersona-this.personas", this.personas);
    // console.log("borrarPersona-personaBorrada", personaBorrada);
    this.personas = this.personas.filter((persona) => persona.id != id);

    return personaBorrada;
  }
}
