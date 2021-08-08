/*

21 20 19 18 17 
22 7  6  5  16 
23 8  1  4  15 
24 9  2  3  14 
25 10 11 12 13

*/

function printSpiral(n) {
  let divideN = Math.floor(n / 2);

  let col = n % 2 === 0 ? divideN - 1 : divideN;
  let row = n % 2 === 0 ? divideN - 1 : divideN;
  let boundary = 2;
  let sizeLeft = 1;
  let flag = 2;
  let move = "d";
  let matrix = new Array(n);

  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill(0);
  }

  matrix[row][col] = 1;

  for (let i = 2; i <= n * n; i++) {
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

    if (i === boundary) {
      boundary += sizeLeft;

      if (flag !== 2) {
        flag = 2;
      } else {
        flag = 1;
        sizeLeft += 1;
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
