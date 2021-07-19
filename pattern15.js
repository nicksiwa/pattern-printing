/*

1****
12***
123**
1234*
12345

*/

const n = 5;

for (i = 1; i <= n; i++) {
  let str = "";

  for (let j = 1; j <= n; j++) {
    if (j <= i) {
      str += j;
    } else {
      str += "*";
    }
  }

  console.log(str);
}
