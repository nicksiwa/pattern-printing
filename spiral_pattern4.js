/*

x x x x x
o o o o x
x x x o x
x o o o x
x x x x x

*/

function printSpiral(n) {
  let matrix = new Array(n);
  let col = -1;
  let row = 0;
  let boundary = n;
  let sizeLeft = n % 2 !== 0 ? n - 1 : n - 2;
  let flag = 1;
  let move = "r";

  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill("o");
  }

  for (let i = 1; i <= n * n; i++) {
    switch (move) {
      case "r":
        col += 1;
        break;
      case "l":
        col -= 1;
        break;
      case "u":
        row -= 1;
        break;
      case "d":
        row += 1;
        break;
    }

    if (i === boundary) {
      boundary += sizeLeft;

      if (flag === 1) {
        flag = 2;
      } else {
        flag = 1;
        sizeLeft -= 2;
      }

      switch (move) {
        case "r":
          move = "d";
          break;
        case "d":
          move = "l";
          break;
        case "l":
          move = "u";
          break;
        case "u":
          move = "r";
          break;
      }
    }

    console.log("i", i);
    console.log("row", row);
    console.log("col", col);
    console.log("boundary", boundary);
    console.log("sizeLeft", sizeLeft);
    console.log("flag", flag);
    console.log("move", move);
    console.log("-------------------");

    matrix[row][col] = "x";

    if (i === boundary && sizeLeft === 0) break;
  }

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      let currentValue = matrix[i][j];
      str += `${currentValue} `;
    }
    console.log(str);
  }
}

printSpiral(5);
