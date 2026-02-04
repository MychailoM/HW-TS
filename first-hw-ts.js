function converting(a) {
    return a.toString();
}
console.log(converting(12));
var shopping;
shopping = ['laptop', 25000];
shopping = ['phone', 15000];
shopping = ['tablet', 10000];
var tasks = [
    { id: 1, title: "Зробити домашнє", status: "todo" },
    { id: 2, title: "Прочитати книгу", status: "done" },
    { id: 3, title: "Прибрати кімнату", status: "todo" }
];
var numbers = [1, 2, 3];
function sumNumbers(numbers) {
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
var result = sumNumbers(numbers);
console.log(result);
var items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
];
function findById(items, id) {
    return items.find(function (item) { return item.id === id; });
}
console.log(findById(items, 2));
