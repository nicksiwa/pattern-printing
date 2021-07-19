/*

1
23
456
78910
1112131415

*/

const n = 5;
let count = 0;

for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = 0; j <= i; j++) {
    count += 1
    str += count
  }

  console.log(str);
}
