document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de compra
    const botonesComprar = document.querySelectorAll('.boton-comprar');

    // Iterar sobre cada botón
    botonesComprar.forEach(boton => {
        // Agregar un evento de clic al botón
        boton.addEventListener('click', function() {
            // Cambiar el texto del botón
            boton.textContent = 'Llama al +52 2227149355, o mándanos WhatsApp';
        });
    });
});
