// Traditional-Way
function walk() {
  console.log("Walking");
}
walk();

//Arrow-Function
const run = () => {
  console.log("Running Arrow Function");
};
run();

//Callback-Funtion
const learning = (a) => {
  a();
};
learning(() => console.log("CallBack-Function"));
