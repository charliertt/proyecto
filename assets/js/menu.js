function fmenu(page) {
    fetch(`${page}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar la página');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('pagPrincipal').innerHTML = data;                      
        })
        .catch(error => console.log('Error al cargar la página', error));
}

function mostrarModal(participant) {
    let name, description, image;

    switch (participant) {
        case 'carlos':
            name = "Carlos Viveros";
            description = "Carlos es un apasionado del cine y desarrollador web.";
            image = "ruta/a/la/foto/carlos.jpg"; // Cambia esto por la ruta real de la imagen
            break;
        case 'ian':
            name = "Ian Abadia";
            description = "Ian es un amante del cine y experto en análisis cinematográfico.";
            image = "ruta/a/la/foto/ian.jpg"; // Cambia esto por la ruta real de la imagen
            break;
        case 'ana':
            name = "Ana Valencia";
            description = "Ana es diseñadora gráfica y entusiasta del cine.";
            image = "ruta/a/la/foto/ana.jpg"; // Cambia esto por la ruta real de la imagen
            break;
        case 'alejandro':
            name = "Alejandro Diaz";
            description = "Alejandro es programador y crítico de cine.";
            image = "ruta/a/la/foto/alejandro.jpg"; // Cambia esto por la ruta real de la imagen
            break;
        case 'rosa':
            name = "Rosa Rosero";
            description = "Rosa es productora y amante del cine independiente.";
            image = "ruta/a/la/foto/rosa.jpg"; // Cambia esto por la ruta real de la imagen
            break;
    }

    document.getElementById('modalLabel').innerText = name;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalImage').src = image;

    // Mostrar el modal
    var modal = new bootstrap.Modal(document.getElementById('infoModal'));
    modal.show();
}