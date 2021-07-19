/*

    *    
   ***   
  *****  
 ******* 
*********

*/

const n = 5;

for (let i = 1; i <= n; i++) {
  let str = "";

  for (let j = 1; j <= n * 2 - 1; j++) {
    if (!(j <= n - i || j >= i + n)) {
      str += "*";
    } else {
      str += " ";
    }
  }

  console.log(str);
}
