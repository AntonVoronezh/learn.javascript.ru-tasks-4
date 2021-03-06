function applyAll() {
  const [func, ...rest] = arguments;
  return func(...rest);
}

function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, (a, b) => a + b);
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, (a, b) => a * b);
}

console.log(applyAll(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
console.log(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24
