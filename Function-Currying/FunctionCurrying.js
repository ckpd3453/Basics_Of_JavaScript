// Way -1
const mult = (x, y) => {
  console.log(x * y);
};

const multiplyByTwo = mult.bind(this, 2);
multiplyByTwo(5);

const multiplyByThree = mult.bind(this, 3);
multiplyByThree(5);

//Way - 2

function add(x) {
  return function (y) {
    console.log(x + y);
  };
}

const addByTen = add(10);
addByTen(9);
addByTen(10);
