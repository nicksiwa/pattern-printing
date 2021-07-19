/*

*****
****
***
**
*

*/

const n = 5;

for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = i; j < n; j++) {
    str += "*";
  }

  console.log(str);
}
