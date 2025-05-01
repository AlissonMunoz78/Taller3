//Variables globales
var cantidadProductos = 1
let usuariosConectados = 3200

//Datos - Primitivos
let numOrden = 127 //INT
let modulo = "Detalle del producto" //String
let status = true //Boolean
let tipoPago = 'T' //Char
let precioFinal = 1419.00 //Float
let descuentoAplicado //Undefined

//Datos - Compuestos
let productosRelacionados = ["iPhone 16 Pro Max", "iPhone 15 Pro", "iPhone 14 Pro"] //Array
let detalleProducto = {
    id: 593086554,
    nombre: "iPhone 16 Pro 128GB Dual SIM",
    disponible: true,
    precio: 1419.00,
    colores: ["Titanio Negro", "Titanio Blanco", "Titanio Natural"]
}

//strings
let nombreProducto = "iPhone 16 Pro 128GB Dual SIM"
nombreProducto.length //validar nombre del producto
nombreProducto.toUpperCase() //guardar en bdd
nombreProducto.toLocaleLowerCase() //guardar en bdd
nombreProducto.trim() //remueve los espacios en blanco del string
nombreProducto.includes("iPhone") //validar si es un producto Apple

//ES6
//Strings
console.log("Producto seleccionado: " + nombreProducto)
console.log(`Producto seleccionado: ${nombreProducto}`) 

//Numbers
let cuotas = "12"
console.log(cuotas + 1) //concatenación
console.log(+cuotas + 1) //conversión de string a number

console.log(5 * 2 ** 3) //potencia

//Boolean
let stockDisponible = 10
let stockSolicitado = "10"

console.log(stockDisponible == stockSolicitado) //true
console.log(stockDisponible === stockSolicitado) //false

//condicionales
let carritoCompras = []
if (carritoCompras.length > 0){
    console.log("Tienes productos en tu carrito")
}
else{
    console.log("Tu carrito está vacío")
}

//ES6 operador ternario
carritoCompras.length === 0 ? console.log("Carrito vacío") : console.log("Carrito con productos")

//ES6 operador ternario
carritoCompras.length === 0 
? console.log("Carrito vacío\nPor favor, añade productos") 
: console.log("Carrito con productos\nPuedes proceder al pago")


//funciones
//funcion - bloque de código reutilizable

//funcion declarada
function aplicarDescuento(){
    console.log("Descuento aplicado al producto")
}

//funcion expresada
const procesarPago = function(){
    console.log("Pago procesado correctamente")
}

//ES6 - funcion flecha
const enviarConfirmacion = ()=>{
    console.log("Correo de confirmación enviado")
}
