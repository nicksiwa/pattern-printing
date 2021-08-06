/*

* * * * * 
*     * 
*   * 
* * 
*

*/

const n = 5;

for (let i = n; i > 0; i--) {
  let str = "";

  for (let j = 0; j < i; j++) {
    if (i === n || j === 0 || i - 1 === j) {
      str += "* ";
    } else {
      str += "  ";
    }
  }

  console.log(str);
}
