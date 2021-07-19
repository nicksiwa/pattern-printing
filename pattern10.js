/*

555555555
544444445
543333345
543222345
543212345
543222345
543333345
544444445
555555555

*/

const n = 5;

for (let i = 1; i <= n * 2 - 1; i++) {
  let str = "";

  if (i <= n) {
    for (let j = n; j > 1; j--) {
      if (i + j > n) {
        str += j;
      } else {
        str += n - i + 1;
      }
    }

    for (let k = 1; k <= n; k++) {
      if (i + k > n) {
        str += k;
      } else {
        str += n - i + 1;
      }
    }
  } else {
    for (let l = n; l > 1; l--) {
      if (i - l < n) {
        str += l;
      } else {
        str += i - n + 1;
      }
    }

    for (let m = 1; m <= n; m++) {
      if (i - m < n) {
        str += m;
      } else {
        str += i - n + 1;
      }
    }
  }

  console.log(str);
}
