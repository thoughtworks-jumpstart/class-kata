class Coffee {
  constructor(intensity) {
    this.intensity = intensity;
    this.volume = 100;
  }

  sip() {
    this.volume = this.volume - 10;
  }
}

const colinsCoffee = new Coffee(10);
const mayurisCoffee = new Coffee(10);

colinsCoffee.sip()
colinsCoffee.sip()
colinsCoffee.sip()

console.log(colinsCoffee);
console.log(mayurisCoffee);
