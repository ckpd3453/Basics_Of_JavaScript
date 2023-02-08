/**Example - 1**/

const start = () => {
  console.log("Stop");
};
setTimeout(start, 5000);
console.log("Start");

/**Example - 2**/

const getTime = () => {
  let d = new Date();
  console.log(d.getHours(), ":", d.getMinutes(), ":", d.getSeconds());
};
setInterval(getTime, 1000);
