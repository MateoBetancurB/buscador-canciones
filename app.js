import * as UI from "./interfaz.js";
import API from "./api.js";

UI.formularioBuscar.addEventListener("submit", buscarCancion);

function buscarCancion(e) {
	e.preventDefault();

	//obtener datos del formulario
	const artista = document.querySelector("#artista").value;
	const cancion = document.querySelector("#cancion").value;

	//validaciones de campos
	if (artista === "" || cancion === "") {
		UI.divMensajes.textContent = "Todos los campos son obligatorios";
		UI.divMensajes.classList.add("error");

		setTimeout(() => {
			UI.divMensajes.textContent = "";
			UI.divMensajes.classList.remove("error");
		}, 3000);
		return;
	}

	//consultar la API
	const busqueda = new API(artista, cancion);
	busqueda.consultarAPI();
}
