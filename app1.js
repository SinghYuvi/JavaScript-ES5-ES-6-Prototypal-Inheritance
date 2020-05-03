//============================================|ES 6 Class|===================================================
class Person1 {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person1('Mary', 'Williams', '11-13-1980');
console.log(mary);

//calling static method
console.log(Person1.addNumbers(1,2));