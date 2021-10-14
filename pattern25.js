/*

        *
      *   *
    *       *
  *           *
*               *
  *           *
    *       *
      *   *
        *

*/

const n = 5;

for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = n; j > i + 1; j--) {
    str += "  ";
  }

  for (let k = 0; k < i * 2 + 1; k++) {
    if (k === 0 || k === i * 2) {
      str += "* ";
    } else {
      str += "  ";
    }
  }

  console.log(str);
}

for (let i = n - 1; i > 0; i--) {
  let str = "";

  for (let j = n; j > i; j--) {
    str += "  ";
  }

  for (let k = 0; k < i * 2 - 1; k++) {
    if (k === 0 || k === i * 2 - 2) {
      str += "* ";
    } else {
      str += "  ";
    }
  }

  console.log(str);
}
