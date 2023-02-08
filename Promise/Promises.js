/**Example-1**/

let myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("I love You !!");
  }, 3000);
});

myPromise.then((value) => {
  //.then method
  console.log(value);
});

/**Example-2**/
const sum = (a) => {
  return a + 6;
};
const start = () => {
  new Promise((resolve, reject) => {
    // Producing Code
    let flag = false;
    if (flag == true) {
      setTimeout(() => {
        resolve(sum(4));
      }, 3000);
    } else {
      reject("rejected");
    }
  })
    .then((value) => {
      // Consuming Code
      console.log(value); //.then method
    })
    .catch((value) => {
      // .catch method
      console.log(value);
    });
};
start();

/**Example-3**/
const square = (a) => {
  console.log("Square of ", a, " : ", a * a);
  return a * a;
};

const initiate = () => {
  //Producing Code
  new Promise((resolve, reject) => {
    let flag = true;
    if (flag === true) {
      setTimeout(() => {
        resolve(square(5));
      }, 3000);
    } else {
      reject("Rejected Promise");
    }
  })
    // Consuming Code
    .then((val) => {
      //.then
      const cube = val * val;
      console.log("Square of ", val, " : ", cube);
    })
    .then(console.log("Succesfull")) //.then
    .catch((val) => console.log(val)); //.catch
};

initiate();
