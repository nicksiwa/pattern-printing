/*

0
01
012
0123
01234
0123
012
01
0

*/

const n = 5;

for (let i = 0; i < n * 2 - 1; i++) {
  let str = "";

  for (let j = 0; j < n; j++) {
    if (j <= i && i + j < n * 2 - 1) {
      str += j;
    }
  }

  console.log(str);
}
