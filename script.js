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
