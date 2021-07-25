/*

    * 
   * * 
  *   * 
 *     * 
* * * * *

*/

const n = 5;

for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = i; j < n - 1; j++) {
    str += " ";
  }

  for (let k = 0; k <= i; k++) {
    if (k == 0 || k == i || i == n - 1) {
      str += "* ";
    } else {
      str += "  ";
    }
  }

  console.log(str);
}
