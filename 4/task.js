function Calculator() {
  this['+'] = (a, b) => a + b;
  this['-'] = (a, b) => a - b;
  this.calculate = function (argStr) {
    const str = argStr.split(' ');
    return this[str[1]](+str[0], +str[2]);
  };
  this.addMethod = (argName, argFunc) => {
    return this[argName] = argFunc;
  };
}

const calc = new Calculator();

console.log(calc.calculate('3 + 7'));
console.log(calc.calculate('7 - 2'));
console.log('\n\n\n\n\n');

const powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => Math.pow(a, b));

const result = powerCalc.calculate('2 ** 3');
console.log(result);

