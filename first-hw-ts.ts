//============== №1 ===========
console.log('-=-=+=-=- №1 -=-=+=-=-')
class Car{
  brand: string;

  constructor(car: string){
    this.brand = car
  }
  showBrand(){
    console.log(`Brand: ${this.brand}`)
  }
}

const car = new Car("Audi")
car.showBrand();


//============== №2 ===========
console.log('-=-=+=-=- №2 -=-=+=-=-')
class User{
  public name: string;
  private password: string;

  constructor(name: string, pass: string){
    this.name = name;
    this.password = pass;
  }

  checkPassword(pass: string): boolean{
    return this.password === pass
  }
}

const user = new User("Ivan", "12345");
console.log(user.checkPassword("12345"));
console.log(user.checkPassword("54321"));


//============== №3 ===========
console.log('-=-=+=-=- №3 -=-=+=-=-')
class Animal{
  protected name: string;

  constructor(name: string){
    this.name = name
  }

    makeSound(){
    console.log("Meow")
  }
}

class Dog extends Animal{
  makeSound(){
    super.makeSound();//Функція Super потрібна для того щоб викликати методи класу Animal
    console.log("Woof");
  }
}

const dog = new Dog("Berta");
dog.makeSound();


//============== №4 ===========
console.log('-=-=+=-=- №4 -=-=+=-=-')
class Person{
  private _age: number = 0;

  constructor(age: number){
    this.age = age
  }

  set age(value: number){
    if(value < 0){
      console.log('Error');
      return
    }
    this._age = value;
  }

  get age(): number{
    return this._age;
  }
}

const person = new Person(25);
console.log(person.age); 
person.age = -5;
console.log(person.age); 
person.age = 30;
console.log(person.age); 

//============== №5 ===========
console.log('-=-=+=-=- №5 -=-=+=-=-')
class Student{
  static count: number = 0;

  constructor(public name: string){
    Student.count++
  }

  static showCount(){
    console.log(`кількість студентів: ${Student.count}`)
  }
}

const s1 = new Student("Ivan");
const s2 = new Student("Olena");
const s3 = new Student("Dmytro");

Student.showCount();

console.log(Student.count);

//============== №6 ===========
console.log('-=-=+=-=- №6 -=-=+=-=-')
abstract class Shape {
  abstract getArea(): number;
  describe(){
    console.log('Геометрична фігура')
  }
  constructor() {
    
  }
}

class Circle extends Shape{
  constructor(public radius: number){
    super()
  }

  getArea(): number{
    return parseFloat((Math.PI * this.radius ** 2).toFixed(1));
  }
}

class Rectangle extends Shape{
  constructor(public width: number, public height: number){
    super()
  }

  getArea(): number{
    return this.width * this.height;
  }
}

const circle = new Circle(4);
circle.describe();
console.log("Площа кола:", circle.getArea());

const rectangle = new Rectangle(4, 6);
rectangle.describe();
console.log("Площа прямокутника:", rectangle.getArea());