/*

5
54
543
5432
54321

*/

const n = 5;

for (let i = n; i > 0; i--) {
  let str = "";

  for (let j = n; j >= i; j--) {
    str += j;
  }

  console.log(str);
}
