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
  let str = ""

  for (let j = 0; j < n; j++) {
    if (i + j >= n - 1) {
      str += "*"
    } else {
      str += " "
    }
  }

  console.log(str)
}
