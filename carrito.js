let carrito = [];

function addToCart(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function removeFromCart(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const carritoTotal = document.getElementById('carrito-total');

    carritoLista.innerHTML = '';
    let total = 200;
    
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.nombre} - $${item.precio.toFixed(2)}</span> <button onclick="removeFromCart(${index})">X</button>`;
        carritoLista.appendChild(li);
        total += item.precio;
    });

    carritoTotal.textContent = total.toFixed(2);
}

function toggleCarrito() {
    const carrito = document.getElementById('carrito');
    if (carrito.style.display === 'none') {
        carrito.style.display = 'block';
    } else {
        carrito.style.display = 'none';
    }
}
