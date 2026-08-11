// GENERAR TABLERO INICIAL

const tablero = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

// MOSTRAR TABLERO INICIAL

function mostrarTablero() {
  let mostrar = "";

  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      if (tablero[i][j] === 0) {
        mostrar += ". ";
      } else {
        mostrar += tablero[i][j] + " ";
      }

      // DIVISIÓN VERTICAL

      if (j === 2 || j === 5) {
        mostrar += "| ";
      }
    }
    mostrar += "\n";

    // DIVISIÓN HORIZONTAL

    if (i === 2 || i === 5) {
      mostrar += "----+----+----\n";
    }
  }
  alert(mostrar);
}

mostrarTablero();

// CONTAR CASILLAS VACÍAS
let casillasVacias = 0;

for (let i = 0; i < tablero.length; i++) {
  for (let j = 0; j < tablero[i].length; j++) {
    if (tablero[i][j] === 0) {
      casillasVacias++;
    }
  }
}

// COMENZAR EL JUEGO
while (casillasVacias > 0) {
  // PEDIR DATOS AL USUARIO

  let fila = Number(prompt("¿Qué fila quieres modificar del 1 al 9?")) - 1;
  let columna =
    Number(prompt("¿Qué columna quieres modificar del 1 al 9?")) - 1;
  let numero = Number(prompt("¿Qué número quieres poner del 1 al 9"));

  // COMPROBAR QUE LA FILA Y LA COLUMNA SEAN VÁLIDAS
  if (fila < 0 || fila > 8 || columna < 0 || columna > 8) {
    alert("Fila o columna inválida.");
} 
  
  // COMPROBAR SI EL NÚMERO INGRESADO ES VÁLIDO
  else if (numero < 1 || numero > 9) {
    alert("Número inválido.");
  } 
  
  // COMPROBAR QUE EL CASILLERO NO ESTÉ OCUPADO
   else if (tablero[fila][columna] === 0) {
    
    // COMPROBAR QUE EL NÚMERO NO ESTÉ REPETIDO EN LA FILA
    let numeroRepetidoFila = false;

    for (let j = 0; j < tablero[fila].length; j++) {
      if (tablero[fila][j] === numero) {
        numeroRepetidoFila = true;
      }
    }

    // COMPROBAR QUE EL NÚMERO NO ESTÉ REPETIDO EN LA COLUMNA
    let numeroRepetidoColumna = false;

    for (let i = 0; i < tablero.length; i++) {
      if (tablero[i][columna] === numero) {
        numeroRepetidoColumna = true;
      }
    }

    // COMPROBAR QUE EL NÚMERO NO ESTÉ REPETIDO EN EL CUADRANTE
    let numeroRepetidoCuadrante = false;
    let inicioFila = Math.floor(fila / 3) * 3;
    let inicioColumna = Math.floor(columna / 3) * 3;

    for (let i = inicioFila; i < inicioFila + 3; i++) {
      for (let j = inicioColumna; j < inicioColumna + 3; j++) {
        if (tablero[i][j] === numero) {
          numeroRepetidoCuadrante = true;
        }
      }
    }

    // SI EL NÚMERO SE ENCUENTRA REPETIDO MOSTRARLO EN UN MENSAJE
    if (
      numeroRepetidoFila ||
      numeroRepetidoColumna ||
      numeroRepetidoCuadrante
    ) {
      let mensaje = "Ese número ya se encuentra en: ";

      if (numeroRepetidoFila) {
        mensaje += "la fila ";
      }

      if (numeroRepetidoColumna) {
        mensaje += "la columna ";
      }

      if (numeroRepetidoCuadrante) {
        mensaje += "el cuadrante ";
      }

      alert(mensaje);
    } else {
      // COLOCAR EL NÚMERO EN LA CASILLA SI NO SE ENCUENTRA REPETIDO
      tablero[fila][columna] = numero;
      casillasVacias--;
    }
  } else {
    alert("Ese casillero ya está ocupado");
  }

  mostrarTablero();
}

mostrarTablero();
alert("Ganaste!!");
