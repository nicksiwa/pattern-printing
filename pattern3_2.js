/*

         *
        **
       ***
      ****
     *****
    ******
   *******
  ********
 *********
**********

*/

const n = 10;

for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = i; j < n - 1; j++) {
    str += " ";
  }

  for (let k = 0; k <= i; k++) {
    str += "*";
  }

  console.log(str);
}
