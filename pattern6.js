/*

012
01
0

0
01
012

*/

const n = 3;

for (let i = 0; i < n * 2 + 1; i++) {
  let str = "";

  for (let j = 0; j < n; j++) {
    if (j < n - i || j < i - n) {
      str += j;
    }
  }

  console.log(str);
}
