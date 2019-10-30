const nombre = prompt("¿Cuál es tu nombre?");
const añoDeNacimiento = prompt("¿En qué año naciste?");
const mesDeNacimiento = prompt("¿Y en qué mes?");
añoActual = 2019;
mesActual = "10";
mesActual >= mesDeNacimiento && alert(`${nombre}, tenes ${añoActual - añoDeNacimiento} años`);
mesActual < mesDeNacimiento && alert(`${nombre}, tenes ${añoActual - añoDeNacimiento - 1} años`);