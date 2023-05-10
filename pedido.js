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
class Pedido {
    platos;
    bebidas;
    postres;

    constructor(){
        this.platos = [];
        this.bebidas = [];
        this.postres = [];
        
        this.agregarPlato = (nombrePlato, cantidad = 1)=> {
            const platoEncontrado = carta.platos.find((plato) => plato.nombre === nombrePlato)
            if (platoEncontrado){
                this.platos.push ({ nombre: platoEncontrado.nombre, precio: platoEncontrado.precio, cantidad});
                console.log(`Se ha agregado ${cantidad} ${nombrePlato}` + " al pedido.")
            } else {
                console.log(`Lo sentimos, no se encuentra ${nombrePlato}` + " en la carta.")
            }
        }


        this.agrgarBebida = (nombreBebida, cantidad = 1)=> {
            const bebidaEncontrada = carta.bebidas.find((bebida) => bebida.nombre === nombreBebida);
            if (bebidaEncontrada) {
                this.bebidas.push({ nombre: bebidaEncontrada.nombre, precio: bebidaEncontrada.precio, cantidad});
                console.log(`Se ha agregado ${cantidad} ${nombreBebida} al pedido`);
            } else {
                console.log(`Lo sentimos, no se encuentra ${nombreBebida} en la carta.`);
            }
        }


        this.agregarPostre = (nombrePostre, cantidad = 1) => {
            const postreEncontrado = carta.postres.find((postre) => postre.nombre === nombrePostre);
            if (postreEncontrado) {
                this.postres.push ({ nombre: postreEncontrado, precio: postreEncontrado.precio, cantidad});
                console.log(`Se ha agregado ${cantidad} ${nombrePostre} al pedido.`);
            } else {
                console.log (`Lo sentimos, no se encuentra ${nombrePostre} en la carta.`)
            }
        }


        this.calcularTotal = (carta, Pedido) => {
        let total = 0;
        this.platos.forEach((plato) => {
            total += plato.precio * plato.cantidad;
        });

        this.bebidas.forEach((bebida) => {
            total += bebida.precio * bebida.cantidad;
        });
        this.postres.forEach((postre) => {
            total += postre.precio * postre.cantidad;
        });
        console.log("El total del pedido es " + total)
        return total;
        
        }
    }
    
}
