function formatValue(
  params: String | Number | Boolean
): String | Number | Boolean {
  if (typeof params === "string") {
    return params.toUpperCase();
  }

  if (typeof params === "number") {
    return params * 10;
  }

  return !params;
}

const res = formatValue(10);

function getLength(value: String | any[]): number {
  if (typeof value === "string") return value.length;
  if (Array.isArray(value)) return value.length;
  return 0;
}

const res2 = getLength("hasan");

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name:${this.name}, Age:${this.age}'`;
  }
}

const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);

const books = [
  { title: "Book A", rating: 6.0 },
  { title: "Book B", rating: 4.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 0.0 },
];

type Books = {
  title: string;
  rating: number;
};

function filterByRating(books: Books[]): Books[] {
  const getBook = books.filter((book) => book.rating >= 4 && book.rating <= 5);
  return getBook;
}
const ratingBook = filterByRating(books);

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
function filterActiveUsers(users: Users[]): Users[] {
  const getActiveUser = users.filter((user) => user.isActive === true);
  return getActiveUser;
}

const activeUser = filterActiveUsers(users);

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

function printBookDetails(book: Book) {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${
    book.publishedYear
  }, Available: ${book.isAvailable ? "Yes" : "N0"}`;
}

const printBook = printBookDetails(myBook);

const array1 = [1, 2, 3, 4, 5, 7];
const array2 = [3, 4, 5, 6, 7];

function getUniqueValues(array1: number[], array2: number[]) {
  const newArr = Array.from(new Set(array1.concat(array2)));
  return newArr;
}

const uniqValue = getUniqueValues(array1, array2);

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

interface Products {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Products[]) {
  const totalPrice = products.reduce((acc, item) => {
    const isDiscount = item.discount ? item.discount : 0;
    const initialDiscount = (item.price * isDiscount) / 100;
    const initialPrice =
      item.price * item.quantity - initialDiscount * item.quantity;
    return acc + initialPrice;
  }, 0);
  return totalPrice;
}
const totalPrice = calculateTotalPrice(products);
