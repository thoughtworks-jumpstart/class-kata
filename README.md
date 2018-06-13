# A kata on javascript classes

### Getting started
- Fork and clone repo
- cd into project directory: `cd class-kata`
- Note: do not peek at files in `solutions/`!

### Tasks

#### Part 1: model a Waiter

1. create a Waiter class, that has a name (that's passed in during object instantiation)
2. create a method `.welcomeGuests()`, which `console.log` a string: 'welcome! what can i do for you today?'
3. create a method `takeOrder(orders)` that receives and stores an array of orders (strings) provided by customers
4. create a method `repeatOrder()` that `console.log` each order in a single string: "you have ordered: some item, another item, ..., last item"


#### Part 2: extend Waiter to create a VIPWaiter

- extend `Waiter` class to create a `VIPWaiter` class
- instantiate an instance of VIPWaiter
- call all of the Waiter's methods and see what happens (e.g. `vipWaiter.welcomeGuests()`)
- override VIPWaiter's `welcomeGuests()` method to `console.log` a VIP greeting: "welcome to the VIP lounge!"
- in VIPWaiter's `welcomeGuests()` method, call `super()` before console.logging the VIP greeting in the previous step

#### Concepts covered in this kata
- classes
- methods
- creating a subclass by extending from a class (the parent class is also known as the super class)
- what `super()` and `super.someMethod()` does