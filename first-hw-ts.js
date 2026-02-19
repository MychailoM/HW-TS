var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//============== №1 ===========
console.log('-=-=+=-=- №1 -=-=+=-=-');
var Car = /** @class */ (function () {
    function Car(car) {
        this.brand = car;
    }
    Car.prototype.showBrand = function () {
        console.log("Brand: ".concat(this.brand));
    };
    return Car;
}());
var car = new Car("Audi");
car.showBrand();
//============== №2 ===========
console.log('-=-=+=-=- №2 -=-=+=-=-');
var User = /** @class */ (function () {
    function User(name, pass) {
        this.name = name;
        this.password = pass;
    }
    User.prototype.checkPassword = function (pass) {
        return this.password === pass;
    };
    return User;
}());
var user = new User("Ivan", "12345");
console.log(user.checkPassword("12345"));
console.log(user.checkPassword("54321"));
//============== №3 ===========
console.log('-=-=+=-=- №3 -=-=+=-=-');
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("Meow");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        _super.prototype.makeSound.call(this); //Функція Super потрібна для того щоб викликати методи класу Animal
        console.log("Woof");
    };
    return Dog;
}(Animal));
var dog = new Dog("Berta");
dog.makeSound();
//============== №4 ===========
console.log('-=-=+=-=- №4 -=-=+=-=-');
var Person = /** @class */ (function () {
    function Person(age) {
        this._age = 0;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0) {
                console.log('Error');
                return;
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person(25);
console.log(person.age);
person.age = -5;
console.log(person.age);
person.age = 30;
console.log(person.age);
//============== №5 ===========
console.log('-=-=+=-=- №5 -=-=+=-=-');
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        Student.count++;
    }
    Student.showCount = function () {
        console.log("\u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0456\u0432: ".concat(Student.count));
    };
    Student.count = 0;
    return Student;
}());
var s1 = new Student("Ivan");
var s2 = new Student("Olena");
var s3 = new Student("Dmytro");
Student.showCount();
console.log(Student.count);
//============== №6 ===========
console.log('-=-=+=-=- №6 -=-=+=-=-');
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.describe = function () {
        console.log('Геометрична фігура');
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return parseFloat((Math.PI * Math.pow(this.radius, 2)).toFixed(1));
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var circle = new Circle(4);
circle.describe();
console.log("Площа кола:", circle.getArea());
var rectangle = new Rectangle(4, 6);
rectangle.describe();
console.log("Площа прямокутника:", rectangle.getArea());
