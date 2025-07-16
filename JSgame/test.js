let flag = 0;
let iD = setInterval(() => {
  console.log("Hello");
  flag = flag + 1;
  if (flag == 5) {
    clearInterval(iD);
  }
}, 1000);
