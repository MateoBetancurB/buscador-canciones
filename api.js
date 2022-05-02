import * as UI from "./interfaz.js";

class API {
	constructor(artista, cancion) {
		this.artista = artista;
		this.cancion = cancion;
	}

	consultarAPI() {
		fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`)
			.then((respuesta) => {
				return respuesta.json();
			})
			.then((resultado) => {
				console.log(resultado);
			});
	}
}

export default API;
