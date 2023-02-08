/**Example-1**/
// const distance = async () => {
//   const myPromise = new Promise(() => {
//     setTimeout(() => {
//       console.log("Distance : ", 5);
//     }, 3000);
//   });
//   console.log(await myPromise);
// };

// distance();

/**Example-2**/

// Async Function
async function weather() {
  //Promise-1
  let bokaroWeather = new Promise((Resolve, reject) => {
    setTimeout(() => {
      Resolve("27 Deg");
    }, 3000);
  });

  //Promise-2
  let ranchiWeather = new Promise((Resolve, reject) => {
    setTimeout(() => {
      Resolve("21 Deg");
    }, 6000);
  });

  console.log("Fetching boakro weather, Please Wait...");
  let bokaroW = await bokaroWeather; // Waiting for completion of this promise
  console.log("Fetched bokaro weather : ", bokaroW);

  console.log("Fetching ranchi weather, Please Wait...");
  let ranchiW = await ranchiWeather; // Waiting for completion of this promise
  console.log("Fetched ranchi weather : ", ranchiW);
}

//Async Function
async function time() {
  setTimeout(() => {
    console.log("Good Time!!");
  }, 3000);
}

const main = async () => {
  console.log("Welcome to Weather Control Room:");
  let w = await weather(); // Waiting for completion of this promise
  let d = await time(); // Waiting for completion of this promise
};

main();
