/*

  *  
 * * 
* * *

*/

const n = 3;

for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = 0; j < n * 2 - 1; j++) {
    if (j >= n - i - 1 && j <= n + i - 1) {
      if (n % 2 !== 0) {
        if ((i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 === 0)) {
          str += "*";
        } else {
          str += " ";
        }
      } else if (n % 2 === 0) {
        if ((i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 === 0)) {
          str += " ";
        } else {
          str += "*";
        }
      }
    } else {
      str += " ";
    }
  }

  console.log(str);
}
