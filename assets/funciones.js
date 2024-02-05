function ordenarPorWhatsApp() {
    var producto = document.querySelector('.custom-card h3').textContent;
    var precio = document.querySelector('.custom-card h4').textContent;

    var numeroWhatsApp = '+525560341556'; // Reemplaza con el número de WhatsApp deseado
    var mensaje = '¡Hola! Me gustaría ordenar el producto: ' + producto + ', con precio: ' + precio;

    // Crear el enlace de WhatsApp
    var whatsappURL = 'https://wa.me/' + numeroWhatsApp + '?text=' + encodeURIComponent(mensaje);

    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappURL);
  }
