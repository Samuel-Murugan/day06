// Q 3.Write a “person” class to hold all the details.
// Ans:
class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Country: ${this.country}`);
    }
  }
  
  
  var person1 = new Person('Francisca Rohan', 25, 'USA');
  var person2 = new Person('Raimond Aruna', 30, 'Netherlands');
  
  
  console.log('Person-1 Details:');
  person1.displayDetails();
  

  console.log('\nPerson-2 Details:');
  person2.displayDetails();
  