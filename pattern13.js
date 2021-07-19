/*

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * 
* * * 
* * 
*

*/

const n = 5;

for (let i = 1; i <= n * 2 - 1; i++) {
  let str = "";

  if (i <= n) {
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
  } else {
    for (let k = i; k <= n * 2 - 1; k++) {
      str += "* ";
    }
  }

  console.log(str);
}
