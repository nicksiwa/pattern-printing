/*

1****
12***
123**
1234*
12345

*/

const n = 5;

for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = 0; j <= i; j++) {
    str += j + 1;
  }

  for (let k = i; k < n - 1; k++) {
    str += "*";
  }

  console.log(str);
}
