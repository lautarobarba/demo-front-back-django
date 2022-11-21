// Notifico en consola que se cargo el documento
console.log('Custom JS cargado');

// ================== USUARIOS ==============================
// Selecciono el boton para agregarle comportamiento
const buscarBtn = document.getElementById('buscar-button');

// Busco los usuarios al presionar el boton
buscarBtn.addEventListener('click', () => {
	console.log('Buscando usuarios...');

	fetch('http://127.0.0.1:7000/users/?format=json', { method: 'get' })
		.then(response => response.json())
		.then(data => {
			// El array que queremos esta en el atributo result
			const usuarios = data.results;
			console.log(usuarios);

			// Voy a agregar los usuarios a la lista vacia
			const listadeUsuariosVacia = document.getElementById('lista-de-usuarios');
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
	const listadeUsuarios = document.getElementById('lista-de-usuarios');
	listadeUsuarios.textContent = null;
});


// ================== NOTAS ==============================
// Funcion para agregar una nota a la tabla
const agregarNotaATabla = (nota) => {
	const tablaNotas = document.getElementById('tabla-de-notas');

	// Renglon de la tabla
	const tableRow = document.createElement('tr');
	// Casilla del renglon con la nota
	const tableData1 = document.createElement('td');
	// Casilla del renglon con el boton eliminar
	const tableData2 = document.createElement('td');
	// Boton eliminar
	const botonEliminar = document.createElement('button');

	// 1° Le agrego el texto eliminar
	botonEliminar.textContent = 'ELIMINAR';
	// 2° Le doy estilos de bootstrap
	botonEliminar.classList.add('btn');
	botonEliminar.classList.add('text-danger');

	// Cuando se clickea voy a enviar una request para eliminar la nota
	botonEliminar.addEventListener('click', () => {
		console.log(`Eliminando nota: ${nota.id}`);

		// Elimino la nota usando el backend
		const bodyData = { id: nota.id };
		const JsonBodyData = JSON.stringify(bodyData);
		console.log(JsonBodyData);
		fetch('http://127.0.0.1:7000/notas/', { 
			method: 'delete',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JsonBodyData
		}).then(() => {
			// Elimino la nota visualmente de la tabla
			tableRow.remove();
		});

	});

	// Agrego la nota a la casilla1
	tableData1.textContent = `${nota.contenido}`;
	// Agrego el boton eliminar a la casilla2
	tableData2.appendChild(botonEliminar);
	tableData2.classList.add('text-right');

	// Agreno las celdas al renglon de la tabla
	tableRow.appendChild(tableData1);
	tableRow.appendChild(tableData2);

	// Agrego el renglon a la tabla
	tablaNotas.appendChild(tableRow);
}

// Cuando se carga la pagina busco automaticamente todas las notas
fetch('http://127.0.0.1:7000/notas/', { method: 'get' })
	.then(response => response.json())
	.then(data => {
		// En este endpoint no hay paginado asi que las notas estan en data
		const notas = data;
		console.log(notas);

		// Voy las notas a la tabla
		notas.forEach(nota => {
			agregarNotaATabla(nota);
		});
	});

// Crear nueva nota
const botonCrear = document.getElementById('crear-nota-button');
botonCrear.addEventListener('click', () => {
	const inputData = document.getElementById('data-nueva');
	const contenido = inputData.value;

	// Creo la nueva nota usando el backend
	console.log(contenido);
	const bodyData = { contenido: contenido };
	const JsonBodyData = JSON.stringify(bodyData);
	console.log(JsonBodyData);
	fetch('http://127.0.0.1:7000/notas/', { 
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JsonBodyData
	})
	.then(response => response.json())
	.then(data => {
		// En data recibo la nota creada
		const nuevaNota = data;
		console.log(nuevaNota);
		agregarNotaATabla(nuevaNota);
	});

	// Borro el campo input
	inputData.value = '';
});