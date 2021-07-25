/*

012
01
0

0
01
012

*/

const n = 3;

for (let i = n; i > 0; i--) {
  let str = "";

  for (let j = 0; j < i; j++) {
    str += j;
  }

  console.log(str);
}

for (let i = 0; i <= n; i++) {
  let str = "";

  for (let j = 0; j < i; j++) {
    str += j;
  }

  console.log(str);
}
