/*

    *****
   *   *
  *   *
 *   *
*****

*/

const n = 5;

for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = i; j < n - 1; j++) {
    str += " ";
  }

  for (let k = 0; k < n; k++) {
    if (k === 0 || k === n - 1 || i === 0 || i === n - 1) {
      str += "*";
    } else {
      str += " ";
    }
  }

  console.log(str);
}
