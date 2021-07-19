/*

0 1 2 3 4 
1 2 3 4 
2 3 4 
3 4 
4

*/

const n = 5;

for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = i; j < n; j++) {
    str += `${j} `;
  }

  console.log(str);
}
