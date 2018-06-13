class Cat {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  sayAge() {
    console.log(`i am ${this.age} years old`);
    return this;
  }

  sayName() {
    console.log(`i am ${this.name}`);
    return this;
  }

  meow() {
    console.log("meow!!!");
    return this;
  }
}

const bigMac = new Cat("big mac", "brown", 3);
bigMac
  .sayName()
  .sayAge()
  .meow()
  .meow()
  .meow()
  .meow();
