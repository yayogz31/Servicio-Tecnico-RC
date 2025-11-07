/* === CÓDIGO formCorreo.js CON EMAILJS === */

// 1. Inicializa EmailJS con tu Llave Pública
// Pega tu Public Key (antes llamada User ID) aquí
(function() {
    emailjs.init({
      publicKey: "99ypAWhI5clRILcmr",
    });
})();

// 2. Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // 3. Busca tu formulario por su ID
    const miFormulario = document.getElementById('info_cliente');

    if (miFormulario) {
        console.log('Formulario encontrado. Listo para enviar con EmailJS.');
    } else {
        console.error('¡ERROR! No se pudo encontrar el formulario con id "info_cliente"');
        return;
    }

    // 4. Añade el "escuchador"
    miFormulario.addEventListener('submit', (evento) => {
        
        // 5. CANCELAMOS la recarga de la página
        evento.preventDefault(); 
        
        console.log('Formulario interceptado. Enviando a EmailJS...');
        
        // Deshabilita el botón de envío para evitar clics duplicados
        const submitButton = miFormulario.querySelector('.submit-button');
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // 6. Crea el objeto de "parámetros"
        // Las llaves (ej. 'nombre', 'apellido') DEBEN coincidir
        // con las variables de tu plantilla de EmailJS (ej. {{nombre}})
        const params = {
            nombre: document.getElementById('fullName').value,
            apellido: document.getElementById('lastName').value,
            tipoConsulta: document.getElementById('consultaTipo').value,
            marca: document.getElementById('marcaModelo').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('phone').value,
            mensaje: document.getElementById('problemDescription').value
        };

        // 7. Usa la función .send() de EmailJS
        // Pega tu Service ID y tu Template ID aquí
        emailjs.send("service_k4t018s", "template_6l3b0sq", params)
            .then(
                (response) => {
                    // Éxito
                    console.log('ÉXITO!', response.status, response.text);
                    alert('¡Solicitud enviada con éxito! Nos pondremos en contacto contigo a la brevedad.');
                    
                    // Limpia el formulario y restaura el botón
                    miFormulario.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = 'Enviar Solicitud';
                },
                (error) => {
                    // Error
                    console.log('FALLÓ...', error);
                    alert('Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo o contáctanos directamente.');
                    
                    // Restaura el botón para que el usuario pueda reintentar
                    submitButton.disabled = false;
                    submitButton.textContent = 'Enviar Solicitud';
                }
            );

        // 8. Seguridad extra para evitar la recarga
        return false;
    });
});