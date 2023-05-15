const carta = {
    platos: [
        {nombre: "Hamburguesa", precio: 1200},
        {nombre: "Pizza", precio: 1500},
        {nombre: "Ensalada", precio: 750}
    ],
    bebidas: [
        {nombre: "Gaseosa", precio: 370 },
        {nombre: "Agua" , precio: 200},
        {nombre: "Cerveza", precio: 400}
    ],
    postres: [
        {nombre: "Helado", precio: 240},
        {nombre: "Chocotorta", precio: 300},
        {nombre: "LemonPie", precio: 250}
    ] 
}

const pedido = new Pedido();

pedido.agregarPlato("Hamburguesa" , 2)
pedido.agrgarBebida("Gaseosa", 1)
pedido.agregarPostre("Chocotorta", 2)
pedido.calcularTotal() 