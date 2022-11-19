// Notifico en consola que se cargo el documento
console.log('Custom JS cargado');

// ================== USUARIOS ==============================
// Selecciono el boton para agregarle comportamiento
const buscarBtn = document.getElementById('buscar-button');

// Busco los usuarios al presionar el boton
buscarBtn.addEventListener('click', () => {
	console.log('Buscando usuarios...');

	fetch('http://127.0.0.1:7000/users/?format=json')
		.then(response => response.json())
		.then(data => {
			console.log(data);

			// El array que queremos esta en el atributo result
			const usuarios = data.results;

			// Voy a agregar los usuarios a la lista vacia
			const listadeUsuariosVacia =  document.getElementById('lista-de-usuarios');
			usuarios.forEach(user => {
				const itemUsuario = document.createElement('li');
				itemUsuario.textContent = `${user.username} (${user.email})`;
				listadeUsuariosVacia.appendChild(itemUsuario);
			});
		});
});

// Selecciono el boton para agregarle comportamiento
const limpiarBtn = document.getElementById('limpiar-button');

// Busco los usuarios al presionar el boton
limpiarBtn.addEventListener('click', () => {
	console.log('Limpiando lista...');

	// Voy a agregar los usuarios a la lista vacia
	const listadeUsuarios =  document.getElementById('lista-de-usuarios');
	listadeUsuarios.textContent = null;
});


// ================== NOTAS ==============================
// Cuando se carga la pagina busco automaticamente todas las notas
// TODO:

// Crear nueva nota

// Borrar nota