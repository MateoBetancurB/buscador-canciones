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
				const { lyrics } = resultado;
				UI.divResultado.textContent = lyrics;
				UI.headingResultado.textContent = `Letra de la canción ${this.cancion} de ${this.artista}`;
			});
	}
}

export default API;
