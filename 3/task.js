function Accumulator(num) {
  this.value = num;

  this.read = function () {
    this.value += +prompt('', 0);
  };

}

const accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert(accumulator.value); // выведет текущее значение
