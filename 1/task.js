const ladder = {
    step: 0,
    up() { // вверх по лестнице
      this.step++;
      return this;
    },
    down() { // вниз по лестнице
      this.step--;
      return this;
    },
    showStep() { // вывести текущую ступеньку
      console.log(this.step);
      return this;
    },
  };
  
  ladder.up();
  ladder.up();
  ladder.down();
  ladder.showStep(); // 1
  
  ladder.up().up().down().up().down().showStep(); // 1
  