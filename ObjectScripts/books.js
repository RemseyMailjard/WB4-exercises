//Array of Objects
//To grab a specific book We call the index of the book
//console.log(books[0].title); // the firstbook title
//books[1].author; // the secondbook author
//the secondbook, second genre;

console.log(books[0].price.toFixed(2))
let books = [
    {
        title: 'The Thief Lord',
        pages: 345,
        author: 'Cornelia Funke',
        genre: ['Fantasy', 'Adventure'],
        isbn: '978-0545227704',
        suggestedBy: 'Brett Spokes',
        price: 21.90 //Number
    },
    {
        title: "The Go-Giver",
        pages: 123,
        author: "Bob Burg",
        genre: [],
        isbn: '',
        suggestedBy: 'abdikadir'
    },
    {
        title: "The Power of Now",
        pages: 236,
        author: "Eckhart Tolle",
        genre: ['Productivity', 'Self Help', 'Fiction', 'NonFiction'],
        isbn: '',
        suggestedBy: 'Kaaliyah Gray'
    },
    {
        title: "Pride and Prejudice",
        pages: 400,
        author: "Jane Austen",
        genre: ['Non-Fiction', 'Romance', 'Drama', 'Classic Literature'],
        isbn: '',
        suggestedBy: 'Moncerrat (Monce) Lua Salas'
    },
    {
        title: "Atomic Habits",
        pages: 320,
        author: "James Clear",
        genre: ["Productivity", "Self-help"],
        isbn: '',
        suggestedBy: 'leslie alvarado'
    },
    {
        title: "The Mountain is You",
        pages: 248,
        author: "Brianna Wiest",
        genre: ["Self-Help", "Productivity"],
        isbn: '',
        suggestedBy: 'Daniel Solar'
    },
    {
        title: "Diary of a Wimpy Kid: Rodrick Rules",
        pages: 150,
        author: "Jeff Kinney",
        genre: ['Kids', 'Comedy'],
        isbn: '000-0000000000',
        suggestedBy: 'Jaranesca Braker'
    },
    {
        title: "The Hawthorne Legacy",
        pages: 358,
        author: 'Jennifer Barnes',
        genre: ["Adventure", 'Thriller'],
        isbn: '836372',
        suggestedBy: 'kadiatou (kadi) barry'
    },
    {
        title: 'The Tao of Pooh',
        pages: 158,
        author: 'Benjamin Hoff',
        genre: ['Philosophy'],
        isbn: '9783922026303',
        suggestedBy: 'Jesus Mimila Hurtado'
    },
    {
        title: "The Circuit",
        pages: 150,
        author: "Francisco Jimenez",
        genre: ['Autobiography', 'Short Story'],
        isbn: '123837',
        suggestedBy: 'Rene Banuelos'
    },
    {
        title: "Silence of the Lambs",
        pages: 380,
        author: 'Thomas Harris',
        genre: ['Thriller', 'Horror'],
        isbn: '978-0-312-34986-5',
        suggestedBy: 'Guadalupe (Lupe) Argumedo Saucedo'
    },
    {
        title: "One Piece",
        pages: 250,
        author: "Eiichiro Oda",
        genre: ["Shonen", 'Adventure', 'Action'],
        isbn: '',
        suggestedBy: 'Uriel Delgado He/Him AZ'
    },
    {
        title: "The Seven Habits of Highly Effective People",
        pages: 381,
        author: "Stephen Covey",
        genre: ["Self Help", "Business", "Psychology"],
        isbn: '',
        suggestedBy: 'Alfi Ali'
    },
    {
        title: "A Thousand Splendid Suns",
        pages: 86,
        author: "Khaled Hosseini",
        genre: ["Novel", "Domestic Fiction"],
        isbn: '',
        suggestedBy: 'Maximo Mayo'
    },
    {
        title: "Eat That Frog!",
        pages: 117,
        author: 'Brian Tracy',
        genre: ['Self Challenging', 'Lessons'],
        isbn: '',
        suggestedBy: 'Sabrina Robles'
    }
];
console.log("Genre of the first book:" + books[0].title + "is: " + books[0].genre[1]);

//Temperal literal string `
console.log(`Genre of the first book: "${books[0].title}" is ${books[0].genre[1]}`);

// Example of accessing a specific book's title and the suggester's name using console.log


