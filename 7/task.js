function User(fullName) {
  this.fullName = fullName;

  Object.defineProperty(this, 'firstName', {
    get() {
      const split = this.fullName.split(' ');
      return split[0];
    },
    set(arg) {
      this.fullName = `${arg} ${this.lastName}`;
    },
  });
  Object.defineProperty(this, 'lastName', {
    get() {
      const split = this.fullName.split(' ');
      return split[1];
    },
    set(arg) {
      this.fullName = `${this.firstName} ${arg}`;
    },
  });
}

const vasya = new User('Василий tttt');

// чтение firstName/lastName
console.log(`${vasya.firstName}\n`); // Василий
console.log(vasya.lastName); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';
console.log(vasya.fullName); // Василий Сидоров
