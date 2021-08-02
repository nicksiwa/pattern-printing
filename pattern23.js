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

for (let i = n; i > 0; i--) {
  let str = "";

  for (let j = n; j > 0; j--) {
    if (j > i) {
      str += j;
    } else {
      str += i;
    }
  }

  for (let k = 2; k <= n; k++) {
    if (k > i) {
      str += k;
    } else {
      str += i;
    }
  }

  console.log(str);
}

for (let i = 2; i <= n; i++) {
  let str = "";

  for (let j = n; j > 0; j--) {
    if (j > i) {
      str += j;
    } else {
      str += i;
    }
  }

  for (let k = 2; k <= n; k++) {
    if (k > i) {
      str += k;
    } else {
      str += i;
    }
  }

  console.log(str);
}
