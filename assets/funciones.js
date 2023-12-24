// Función para mostrar u ocultar los contenedores de tarjetas según la selección en el combo box
function mostrarProductos() {
    var selectedProduct = document.getElementById('productSelect').value;
    var crepasContainer = document.getElementById('crepasContainer');
    var tortasContainer = document.getElementById('tortasContainer');
    var sandwichContainer = document.getElementById('sandwichContainer');

    // Oculta todos los contenedores de tarjetas
    crepasContainer.style.display = 'none';
    omeletteContainer.style.display = 'none';
    tortasContainer.style.display = 'none';
    sandwichContainer.style.display = 'none';

    // Muestra el contenedor correspondiente según la selección en el combo box
    if (selectedProduct === "Crepas") {
        crepasContainer.style.display = 'block';
    } else if (selectedProduct === "Omelette") {
        omeletteContainer.style.display = 'block';
    } else if (selectedProduct === "Tortas") {
        tortasContainer.style.display = 'block';
    }  else if (selectedProduct === "Sandwich") {
        sandwichContainer.style.display = 'block';
    }
}

// Llama a la función cuando se cambia la selección del combo box
document.getElementById('productSelect').addEventListener('change', mostrarProductos);

// Llama a la función al cargar la página para mostrar el producto predeterminado
mostrarProductos();
