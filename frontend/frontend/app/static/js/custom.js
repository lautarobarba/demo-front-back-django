// Notifico en consola que se cargo el documento
console.log('Custom JS cargado');

// Selecciono el boton para agregarle acciones
const buscarBtn = document.getElementById('buscarBtn');

// Busco los usuarios al presionar el boton
buscarBtn.onclick(() => {
	console.log('Buscando usuarios...')
});