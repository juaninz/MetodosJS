const Pizzas = [
  { id: 1, nombre: "Mozzarella", ingredientes: ['queso','tomate','aceitunas','orégano'], precio:800},
  { id: 2, nombre: "Calabresa", ingredientes: ['queso','salame','tomate'], precio:900},
  { id: 3, nombre: "Fugazzeta", ingredientes: ['queso','cebolla','aceitunas'], precio:950},
  { id: 4, nombre: "Especial", ingredientes: ['queso','tomate','aceitunas','orégano','jamón,morrones'], precio:1000},
  { id: 5, nombre: "Palmitos", ingredientes: ['palmitos','salsa golf', 'tomates', 'queso', 'jamón'], precio:400},
  { id: 6, nombre: "Rucula", ingredientes: ['queso','jamon','rucula'], precio:700},
]

//a) pizzas con id impar

function clasificarId(impar){
  let impares = [];
  for (let index = 0; index < Pizzas.length; index++) {
      if (Pizzas[index].id%2 !== 0){
          impares.push(Pizzas[index].nombre)
      }
      else {
          continue
      }
  }
  console.log(`Las pizzas con id impares son: ${impares}`)
}
clasificarId(Pizzas)

//b alguna pizza vale menos de 600?
console.log("las pizzas que salen menos de 600 son:")
Pizzas.forEach((pizza)=> {
  if (pizza.precio < 600){
      console.log(`la pizza ${pizza.nombre}, que tiene un valor de $${pizza.precio}`)
  }
  else{
      return
  }
})

//c) Los nombres de todos las pizzas.

console.log("las pizzas que tenemos para ofrecer son:")
Pizzas.forEach((pizza)=> {
      console.log(`${pizza.nombre},`)
})

//d) Los precios de las pizzas.
console.log("las precios que tenemos para ofrecer son:")
Pizzas.forEach((pizza)=> {
      console.log(`$${pizza.precio},`)
})

//e) El nombre de cada pizza con su respectivo precio.
console.log("las pizzas con sus respectivos precios que tenemos para ofrecer son las siguientes:")
Pizzas.forEach((pizza)=> {
      console.log(`Pizza: ${pizza.nombre} - Precio: $${pizza.precio},`)
})