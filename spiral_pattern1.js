/*

1  2  3  4  5  
16 17 18 19 6  
15 24 25 20 7  
14 23 22 21 8  
13 12 11 10 9

*/

function printSpiral(n) {
  let matrix = new Array(n);
  let col = 0;
  let row = 0;
  let boundary = n - 1;
  let sizeLeft = n - 1;
  let flag = 1;
  let move = "r";

  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill(0);
  }

  for (let i = 1; i <= n * n; i++) {
    matrix[row][col] = i;
    console.log('i', i)
    console.log('row', row)
    console.log('col', col)
    console.log('boundary', boundary)
    console.log('sizeLeft', sizeLeft)
    console.log('flag', flag)
    console.log('-------------------')

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
        sizeLeft -= 1;
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

printSpiral(2);
