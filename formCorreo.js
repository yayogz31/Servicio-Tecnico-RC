document.addEventListener('DOMContentLoaded', () => {

    const miFormulario = document.getElementById('info_cliente');

    if (miFormulario) {
        console.log('Formulario encontrado con éxito:', miFormulario);
    } else {
        console.error('¡ERROR! No se pudo encontrar el formulario con id "info_cliente"');
        return; 
    }

    miFormulario.addEventListener('submit', (evento) => {
        
        evento.preventDefault(); 
        
        console.log('Formulario interceptado. Generando HTML del correo...');

        const nombre = document.getElementById('fullName').value;
        const apellido = document.getElementById('lastName').value;
        const tipoConsulta = document.getElementById('consultaTipo').value;
        const marca = document.getElementById('marcaModelo').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('phone').value;
        const mensaje = document.getElementById('problemDescription').value;

        const htmlParaCorreo = `
        <html>
        <head>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333;
            }
            .container { 
              width: 90%; 
              margin: 20px auto; 
              padding: 20px; 
              border: 1px solid #ddd; 
              border-radius: 10px; 
            }
            .header { 
              font-size: 24px; 
              color: #031926; /* Color oscuro de tu web */
            }
            .data-label {
              font-weight: bold;
              color: #555;
              min-width: 150px; /* Alinea los datos */
              display: inline-block;
            }
            .mensaje-bloque {
                background-color: #f9f9f9;
                border: 1px solid #eee;
                padding: 15px;
                border-radius: 5px;
                margin-top: 15px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 class="header">Nueva Solicitud de Servicio Web</h1>
            <p>Se ha recibido un nuevo formulario de contacto desde el sitio web.</p>
            
            <hr>
            
            <h3>Detalles del Cliente:</h3>
            <p><span class="data-label">Nombre Completo:</span> ${nombre} ${apellido}</p>
            <p><span class="data-label">Email:</span> ${email}</p>
            <p><span class="data-label">Teléfono:</span> ${telefono}</p>
            
            <h3>Detalles de la Solicitud:</h3>
            <p><span class="data-label">Tipo de Consulta:</span> ${tipoConsulta}</p>
            <p><span class="data-label">Marca y Modelo:</span> ${marca}</p>
            
            <div class="mensaje-bloque">
              <strong>Descripción del Problema:</strong>
              <p>${mensaje}</p>
            </div>
            
          </div>
        </body>
        </html>
        `;

        console.log('--- HTML GENERADO ---');
        console.log(htmlParaCorreo);
        console.log('--- FIN DEL HTML ---');
        
        alert('¡Solicitud recibida! (HTML generado en consola F12)');

        miFormulario.reset();

        return false;
    });
});