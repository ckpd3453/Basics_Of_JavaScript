// /************************************  Let ************************************************/
console.log(
  "*****************************Let***********************************"
);
let a = "Global";
function let() {
  let a = "Function";
  console.log(a, "Scope");
  {
    let a = "Block";
    console.log(a, "Scope");
  }
}
console.log(a, "Scope");
let();

/************************************  Var ************************************************/
console.log(
  "*****************************Var***********************************"
);
var b = "Global";
function fun() {
  var b = "Func";
  var b = "Function";
  console.log(b, "Scope");
  {
    var b = "Block";
    console.log(b, "Scope");
  }
}
console.log(b, "Scope");
fun();
c = "Hoisting";
console.log(c, "done");
var c;

/************************************  Const ************************************************/
console.log(
  "*****************************Const***********************************"
);
const d = "Global";
function run() {
  const d = "Function";
  console.log(d, "Scope");
  {
    const d = "Block";
    console.log(d, "Scope");
  }
}
console.log(d, "Scope");
run();
