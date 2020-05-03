//============================================|ES 6|===================================================
class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
// Greeting prototype method of person constructor
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer2 extends Person2 {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer2('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());

console.log(Customer2.getMembershipCost());