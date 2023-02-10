const arr = [1, 5, 2, 8, 4, 0];

const arr1 = arr.forEach((x, i) => {
  console.log(x, i);
});
console.log(arr1);

const map1 = arr.map(
  (x, i) => x * 2
  //   console.log("Value ", x., " Index ", i);
);
console.log(map1);

const even = arr.filter((x) => x % 2 == 0);
console.log(even);

const sum = arr.reduce((x, y) => (x += y));
console.log(sum);
