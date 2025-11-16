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
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 4.0 },
];

type Books = {
  title: string;
  rating: number;
};

function filterByRating(books: Books[]): Books[] {
  const getBook = books.filter((book) => book.rating >= 4);
  return getBook;
}
// console.log(filterByRating(books));

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

// console.log(filterActiveUsers(users));

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  return console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "N0"}`
  );
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
