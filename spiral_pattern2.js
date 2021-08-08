/*

1  16 15 14 13 
2  17 24 23 12 
3  18 25 22 11 
4  19 20 21 10 
5  6  7  8  9 

*/

function printSpiral(n) {
  let col = 0;
  let row = -1;
  let boundary = n;
  let sizeLeft = n - 1;
  let flag = 1;
  let move = "d";
  let matrix = new Array(n);

  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill(0);
  }

  for (let i = 1; i <= n * n; i++) {
    switch (move) {
      case "d":
        row += 1;
        break;
      case "r":
        col += 1;
        break;
      case "u":
        row -= 1;
        break;
      case "l":
        col -= 1;
        break;
    }

    if (i == boundary) {
      boundary += sizeLeft;

      if (flag !== 2) {
        flag = 2;
      } else {
        flag = 1;
        sizeLeft -= 1;
      }

      switch (move) {
        case "d":
          move = "r";
          break;
        case "r":
          move = "u";
          break;
        case "u":
          move = "l";
          break;
        case "l":
          move = "d";
          break;
      }
    }

    matrix[row][col] = i;
  }

  let countNPowerDigit = (n * n).toString().length;

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      let currentValue = matrix[i][j];
      str +=
        `${currentValue} ` +
        " ".repeat(countNPowerDigit - currentValue.toString().length);
    }
    console.log(str);
  }
}

printSpiral(5);
