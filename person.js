/*jshint esversion: 6*/

class Person {
  constructor (name, age){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    return 'Hello!';
  }

  sayName(){
    return  'My name is ' + this.name;
  }

  sayAge(){
    return 'I am ' + this.age + ' years old.';
  }

}