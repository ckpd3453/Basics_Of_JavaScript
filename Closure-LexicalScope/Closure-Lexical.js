//Closure
let b = "Global Lexical-Scope";
function parent() {
  let a = "Parent Lexical-Scope";
  function child() {
    console.log("In Child -", a);
  }
  console.log("In Parent -", b);
  child();
}
parent();
