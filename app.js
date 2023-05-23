document.addEventListener("DOMContentLoaded", function () {
    const platos = document.querySelectorAll(".menu-section #plato1, .menu-section #plato2, .menu-section #plato3");
    const bebidas = document.querySelectorAll(".menu-section #bebida1, .menu-section #bebida2, .menu-section #bebida3");
    const postres = document.querySelectorAll(".menu-section #postre1, .menu-section #postre2, .menu-section #postre3");

    // Función para agregar plato al pedido
    function agregarPlato(event) {
        event.preventDefault();
        const nombrePlato = event.target.textContent;
        pedido.agregarPlato(nombrePlato);
        mostrarPedido();
    }

    // Función para agregar bebida al pedido
    function agregarBebida(event) {
        event.preventDefault();
        const nombreBebida = event.target.textContent;
        pedido.agregarBebida(nombreBebida);
        mostrarPedido();
    }

    // Función para agregar postre al pedido
    function agregarPostre(event) {
        event.preventDefault();
        const nombrePostre = event.target.textContent;
        pedido.agregarPostre(nombrePostre);
        mostrarPedido();
    }

    // Agrega eventos de escucha a los elementos del menú
    platos.forEach((plato) => {
        plato.addEventListener("click", agregarPlato);
    });

    bebidas.forEach((bebida) => {
        bebida.addEventListener("click", agregarBebida);
    });

    postres.forEach((postre) => {
        postre.addEventListener("click", agregarPostre);
    });
});
function mostrarPedido() {
    const pedidoItems = document.getElementById("pedido-items");
    pedidoItems.innerHTML = ""; // Limpiar elementos previos

    pedido.platos.forEach((plato) => {
        agregarItemPedido(plato.nombre, plato.precio);
    });

    pedido.bebidas.forEach((bebida) => {
        agregarItemPedido(bebida.nombre, bebida.precio);
    });

    pedido.postres.forEach((postre) => {
        agregarItemPedido(postre.nombre, postre.precio);
    });
}
function agregarItemPedido(nombre, precio) {
    const pedidoItems = document.getElementById("pedido-items");
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${nombre}</td>
      <td>${precio}</td>
    `;
    pedidoItems.appendChild(fila);
  }

const carta = {
    platos: [
        { nombre: "Hamburguesa", precio: 1200 },
        { nombre: "Pizza", precio: 1500 },
        { nombre: "Ensalada", precio: 750 }
    ],
    bebidas: [
        { nombre: "Gaseosa", precio: 370 },
        { nombre: "Agua", precio: 200 },
        { nombre: "Cerveza", precio: 400 }
    ],
    postres: [
        { nombre: "Helado", precio: 240 },
        { nombre: "Chocotorta", precio: 300 },
        { nombre: "LemonPie", precio: 250 }
    ]
}
const pedido = new Pedido();

// const pedido = new Pedido();

// pedido.agregarPlato("Hamburguesa" , 2)
// pedido.agrgarBebida("Gaseosa", 1)
// pedido.agregarPostre("Chocotorta", 2)
// pedido.calcularTotal()
