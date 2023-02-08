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
  a("CallBack-Function");
};
learning((string) => console.log(string));
