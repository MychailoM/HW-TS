function converting(a: number): string {
  return a.toString();
}
console.log(converting(12));

let shopping: [string, number];
shopping = ['laptop', 25000];
shopping = ['phone', 15000];
shopping = ['tablet', 10000];

type Status = "todo" | "done";
type Task = {
  id: number;
  title: string;
  status: Status;
};
const tasks: Task[] = [
  { id: 1, title: "Зробити домашнє", status: "todo" },
  { id: 2, title: "Прочитати книгу", status: "done" },
  { id: 3, title: "Прибрати кімнату", status: "todo" }
];

const numbers: number[] = [1, 2, 3];
function sumNumbers(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
const result = sumNumbers(numbers);
console.log(result);


type Item = {
  id: number;
  name: string;
};
const items: Item[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
];
function findById(items: Item[], id: number): Item | undefined{
  return items.find(item => item.id === id);
}

console.log(findById(items, 2))