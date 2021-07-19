/*

1234554321
12344321
123321
1221
11

*/

const n = 5;

for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = 1; j <= n - i; j++) {
    str += j;
  }

  for (let k = n - i; k > 0; k--) {
    str += k;
  }

  console.log(str);
}
