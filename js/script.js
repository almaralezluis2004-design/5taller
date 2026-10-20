
function mostrarInicio(contenedor) {
    contenedor.innerHTML = `
        <div class="principal">

            <div class="encabezado-inicio">
                <div class="titulo">Taller Práctico #5</div>
            </div>

            <div class="presentacion">
                <div class="titulo">Menú Principal</div>

                <div class="texto">
                    Bienvenido. Selecciona el ejercicio que deseas visitar.
                </div>
            </div>

            <div class="opciones">

                <div class="tarjeta">
                    <div class="numero-ejercicio">01</div>

                    <div class="subtitulo">Ejercicio CSS #2</div>

                    <div class="enlace" onclick="irA('ejercicio2.html')">
                        OPCIÓN 1
                    </div>
                </div>

                <div class="tarjeta">
                    <div class="numero-ejercicio">02</div>

                    <div class="subtitulo">Ejercicio CSS #3</div>

                    <div class="enlace" onclick="irA('ejercicio3.html')">
                        OPCIÓN 2
                    </div>
                </div>

            </div>
        </div>
    `;
}


function mostrarMenu() {
    return `
        <div class="menu">

            <div class="enlace" onclick="irA('index.html')">
                Menú Principal
            </div>

            <div class="enlace" onclick="irA('ejercicio2.html')">
                Opción 1
            </div>

            <div class="enlace" onclick="irA('ejercicio3.html')">
                Opción 2
            </div>

        </div>
    `;
}


function mostrarEjercicio2(contenedor) {
    const disenos = [
        ['7.png', 'Real Estate'],
        ['8.png', 'Library'],
        ['img3.png', 'Transportation'],
        ['6.png', 'Gas & Oil'],
        ['img1.png', 'Marketing Agency'],
        ['1.webp', 'Pizza'],
        ['2.png', 'Flooring'],
        ['3.jpg', 'Steel Processing'],
        ['img4.png', 'Coming Soon']
    ];

    let tarjetas = '';

    disenos.forEach(function(diseno) {
        tarjetas += `
            <div class="diseno">

                <img
                    src="../recursos/${diseno[0]}"
                    alt="${diseno[1]}"
                >

                <div class="texto">
                    ${diseno[1]}
                </div>

            </div>
        `;
    });

    contenedor.innerHTML = `
        ${mostrarMenu()}

        <div class="galeria">

            <div class="titulo-galeria">
                Beautiful, Hand-crafted Layouts
            </div>

            <div class="contenedor-galeria">
                ${tarjetas}
            </div>

            <div class="volver">
                <div class="enlace" onclick="irA('index.html')">
                    Volver al menú principal
                </div>
            </div>

        </div>
    `;
}


function mostrarEjercicio3(contenedor) {
    const servicios = [
        [
            '11.png',
            'Market Analysis',
            'Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna.'
        ],
        [
            '12.png',
            'Fast Support',
            'Credit goes to Pexels website for all images used in this template. Cras condimentum mi et sapien dignissim luctus.'
        ],
        [
            '13.png',
            'Top Security',
            'You have no authority to post this template as a ZIP file on your template collection websites. You can use this template for your commercial websites.'
        ],
        [
            '14.png',
            'Social Work',
            'You can change icons and customize this template. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ]
    ];

    let tarjetas = '';

    servicios.forEach(function(servicio) {
        tarjetas += `
            <div class="servicio">

                <img
                    src="../recursos/${servicio[0]}"
                    alt="${servicio[1]}"
                >

                <div>

                    <div class="subtitulo">
                        ${servicio[1]}
                    </div>

                    <div class="texto">
                        ${servicio[2]}
                    </div>

                </div>
            </div>
        `;
    });

    contenedor.innerHTML = `
        ${mostrarMenu()}

        <div class="contenido-servicios">

            <div class="titulo-servicios">
                What We Do
            </div>

            <div class="introduccion">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sed pharetra lorem, blandit convallis mi.
                Aenean ornare elit ac metus lacinia, sed iaculis nibh
                semper. Pellentesque est urna.
            </div>

            <div class="lista-servicios">
                ${tarjetas}
            </div>

            <div class="botones-servicios">

                <div class="enlace" onclick="mostrarAviso('Learn More')">
                    Learn More
                </div>

                <div class="enlace" onclick="mostrarAviso('Details')">
                    Details
                </div>

            </div>

        </div>
    `;
}


function irA(pagina) {
    const contenedor = document.getElementById('app');
    const paginaActual = contenedor ? contenedor.getAttribute('data-pagina') : '';

    if (paginaActual === 'inicio') {
        if (pagina === 'ejercicio2.html' || pagina === 'ejercicio3.html') {
            window.location.href = 'html/' + pagina;
            return;
        }
    } else {
        if (pagina === 'index.html') {
            window.location.href = '../index.html';
            return;
        }
    }

    window.location.href = pagina;
}


function mostrarAviso(mensaje) {
    alert(mensaje);
}


function iniciarPagina() {
    const contenedor = document.getElementById('app');

    if (contenedor === null) {
        return;
    }

    const pagina = contenedor.getAttribute('data-pagina');

    if (pagina === 'inicio') {
        mostrarInicio(contenedor);
    }

    if (pagina === 'ejercicio2') {
        mostrarEjercicio2(contenedor);
    }

    if (pagina === 'ejercicio3') {
        mostrarEjercicio3(contenedor);
    }
}

iniciarPagina();



