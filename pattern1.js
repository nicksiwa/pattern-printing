/*

00 
00 01 
00 01 02 
00 01 02 03 
00 01 02 03 04

*/

const n = 5;

for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = 0; j <= i; j++) {
    str += `0${j} `;
  }

  console.log(str);
}
