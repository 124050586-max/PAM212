const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Carlos", edad: 28 }
];

const nombresTexto = personas.map(function(persona) {
  return persona.nombre;
}).join(" ");

console.log(nombresTexto);

const sumaDeEdades = personas.reduce(function(acumulador, persona) {
  return acumulador + persona.edad;
}, 0);

console.log("Suma total de edades:", sumaDeEdades);