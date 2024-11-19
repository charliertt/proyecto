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
    let name, description, image, age;

    switch (participant) {
        case 'carlos':
            name = "Carlos Viveros";
            description = "Carlos es un apasionado del cine y desarrollador web.";
            image = "assets/img/foto4.jpg"; // Cambia esto por la ruta real de la imagen
            age = "Edad: 28 años";
            break;
        case 'ian':
            name = "Ian Abadia";
            description = "Ian es un amante del cine y experto en análisis cinematográfico.";
            image = "assets/img/foto3.jpg"; // Cambia esto por la ruta real de la imagen
            age = "Edad: 30 años";
            break;
        case 'ana':
            name = "Ana Valencia";
            description = "Ana es diseñadora gráfica y entusiasta del cine.";
            image = "assets/img/foto2.jpg"; // Cambia esto por la ruta real de la imagen
            age = "Edad: 25 años";
            break;
        case 'alejandro':
            name = "Alejandro Diaz";
            description = "Alejandro es programador y crítico de cine.";
            image = "assets/img/foto5.jpg"; // Cambia esto por la ruta real de la imagen
            age = "Edad: 27 años";
            break;
        case 'rosa':
            name = "Rosa Rosero";
            description = "Rosa es productora y amante del cine independiente.";
            image = "assets/img/foto1.jpg"; // Cambia esto por la ruta real de la imagen
            age = "Edad: 29 años";
            break;
    }

    document.getElementById('modalLabel').innerText = name;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalAge').innerText = age; 

    // Mostrar el modal
    var modal = new bootstrap.Modal(document.getElementById('infoModal'));
    modal.show();
}