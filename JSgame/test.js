function evenLogic(num) {
  let count = 0;
  for (let index = 2; index <= num / 2; index++) {
    let result = num % index;
    if (result === 0) {
      count++;
    }
  }
  if (count === 0) {
    console.log("PRIME");
  } else {
    console.log("Not PRIME");
  }
}

evenLogic(33333333);

// for (let j = 0; j <= 50; j++) {
//   console.log(j);

//   evenLogic(j);
// }
