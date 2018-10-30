const sum = (arg) => {
  let plus = arg;

  const getSum = (arg2) => {
    plus += arg2;
    return getSum;
  };

  getSum.toString = () => plus;

  return getSum;
};

console.log(sum(0)(1)(2)(3)(4)(5));//  == 15
