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

for (let i = 0; i < n * 2 + 1; i++) {
  let str = "";

  if (i <= n) {
    for (let j = n; j > i; j--) {
      str += "* ";
    }
  } else if (i > n) {
    for (let k = 0; k < i - n; k++) {
      str += "* ";
    }
  }

  console.log(str);
}
