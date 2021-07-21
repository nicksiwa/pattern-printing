/*

* * * * *
 * * * * 
  * * *  
   * *   
    *    
    *    
   * *   
  * * *  
 * * * * 
* * * * *

*/

const n = 5;

for (let i = 1; i <= n * 2; i++) {
  let str = "";

  if (i <= n) {
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (!(j < i || j + i > n * 2)) {
        if (i % 2 === 0) {
          if (j % 2 === 0) {
            str += "*";
          } else {
            str += " ";
          }
        } else {
          if (j % 2 !== 0) {
            str += "*";
          } else {
            str += " ";
          }
        }
      } else {
        str += " ";
      }
    }
  } else {
    for (let k = 1; k <= n * 2 - 1; k++) {
      if (i + k > n * 2 && k < i) {
        if (i % 2 !== 0) {
          if (k % 2 === 0) {
            str += "*";
          } else {
            str += " ";
          }
        } else {
          if (k % 2 !== 0) {
            str += "*";
          } else {
            str += " ";
          }
        }
      } else {
        str += " ";
      }
    }
  }

  console.log(str);
}
