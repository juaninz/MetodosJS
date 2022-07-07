const Pizzas = [{
        id: 1,
        nombre: "Mozzarella",
        ingredientes: ['queso', 'tomate', 'aceitunas', 'orégano'],
        precio: 800
    },
    {
        id: 2,
        nombre: "Calabresa",
        ingredientes: ['queso', 'salame', 'tomate'],
        precio: 900
    },
    {
        id: 3,
        nombre: "Fugazzeta",
        ingredientes: ['queso', 'cebolla', 'aceitunas'],
        precio: 950
    },
    {
        id: 4,
        nombre: "Especial",
        ingredientes: ['queso', 'tomate', 'aceitunas', 'orégano', 'jamón,morrones'],
        precio: 1000
    },
    {
        id: 5,
        nombre: "Palmitos",
        ingredientes: ['palmitos', 'salsa golf', 'tomates', 'queso', 'jamón'],
        precio: 400
    },
    {
        id: 6,
        nombre: "Rucula",
        ingredientes: ['queso', 'jamon', 'rucula'],
        precio: 700
    },
]

// Obtenemos los elementos necesarios del HTML
const input = document.getElementById('select-id');
const btnId = document.getElementById('btn-id');
const nombreP = document.getElementById('namePizza');
const precioP = document.getElementById('precioPizza');

// * Ahora tenemos que traernos lo que escribamos en el input cuando hagamos click al boton
btnId.addEventListener('click', selectPizza);

// * Funcion para agregar tareas
// function selectPizza() {
//     const pizzaId = input.value;
//     Pizzas.forEach((pizza) => {
//         if (pizza.id == pizzaId) {
//             nombreP.innerHTML = `Pizza Seleccionada: ${pizza.nombre}`;
//             precioP.innerHTML = `Precio: $ ${pizza.precio}`;
//         } else {
//             nombreP.innerHTML = `SIN STOCK`;
//         }
//     })
// }

// function selectPizza() {
//     const pizzaId = input.value;
//     if (Pizzas.some((pizza) => pizza.id == pizzaId)) 
//     {
//         nombreP.innerHTML = `Pizza Seleccionada: ${pizza.nombre}`;
//         precioP.innerHTML = `Precio: $ ${pizza.precio}`;
//     } else {
//         nombreP.innerHTML = `SIN STOCK`;
//     }
// }
function selectPizza() {
    const pizzaId = input.value
    if (Pizzas.some((pizza) => pizza.id == pizzaId)) {
        Pizzas.forEach((pizza) => {
            if (pizza.id == pizzaId) {
                nombreP.innerHTML = `Pizza Seleccionada: ${pizza.nombre}`;
                precioP.innerHTML = `Precio: $ ${pizza.precio}`;
            } else {
                return
            }
        })
    } else {
        nombreP.innerHTML = `SIN STOCK`;
        precioP.innerHTML = ` `
    }
}