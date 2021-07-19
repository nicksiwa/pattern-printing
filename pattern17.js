/*

    *    
   ***   
  *****  
 ******* 
*********
 ******* 
  *****  
   ***   
    *    

*/

const n = 5;

for (let i = 1; i <= n * 2 - 1; i++) {
  let str = "";

  if (i <= n) {
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (!(j <= n - i || j >= i + n)) {
        str += "*";
      } else {
        str += " ";
      }
    }
  } else {
    for (let k = 1; k <= n * 2 - 1; k++) {
      if (i - k < n && k + i < n + n * 2) {
        str += "*";
      } else {
        str += " ";
      }
    }
  }

  console.log(str);
}
