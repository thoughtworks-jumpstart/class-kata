class Waiter {
  constructor(name) {
    console.log("inside Waiter constructor");
    this.name = name;
    this.orders = [];
  }

  welcomeGuests() {
    console.log("welcome! what can i do for you today?");
  }

  takeOrder(orders) {
    this.orders = orders;
  }

  repeatOrder() {
    console.log("you have ordered: ", this.orders);
  }
}

class VIPWaiter extends Waiter {
  welcomeGuests() {
    super.welcomeGuests();
    console.log("you're in the vip lounge!!");
  }
}

const wilson = new Waiter("wilson");
wilson.welcomeGuests();
wilson.takeOrder(["chicken rice", "papaya"]);
console.log(wilson);

const vipWaiter = new VIPWaiter("alfred");
console.log(vipWaiter);
vipWaiter.welcomeGuests();
