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

for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = 0; j <= i; j++) {
    str += j;
  }

  console.log(str);
}

for (let i = n - 1; i > 0; i--) {
  let str = "";

  for (let j = 0; j < i; j++) {
    str += j;
  }

  console.log(str);
}
