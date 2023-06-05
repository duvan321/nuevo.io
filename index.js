this.mensaje = "esto es un mensaje de javascript";

function verMensaje() {
  const mensaje = (document.getElementById("mostrar").textContent =
    this.mensaje);
}

this.nombre = "diego";
function verNombre() {
  console.log(`hola: ${this.nombre}`);
}
verNombre();

const objecto ={
    apellido:"patiño",
    saludar:function(){
        console.log(`mi apellido es: ${this.apellido}`);
    }
}
objecto.saludar()

const nuevoObjecto = {
    apellido:"callejas"
}

objecto.saludar.call(nuevoObjecto)

const object = {
  apellido: "penagos",
  saludar: function () {
    console.log(`mi apellido es: ${this.apellido}`);
  },
};
object.saludar();

const nuevoObject = {
  apellido: "Monrroy",
};

let nuevaObejecto = object.saludar.bind(nuevoObject)
nuevaObejecto()

const numeros = [1,2,3,4,5,6,7];
const numeroMaximo = Math.max.apply(null,numeros)
console.log(numeroMaximo);