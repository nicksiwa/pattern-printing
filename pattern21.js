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

  for (let j = 0; j <= i; j++) {
    if (i === n - 1 || j === 0 || j === i) {
      str += "* ";
    } else {
      str += "  ";
    }
  }

  console.log(str);
}
