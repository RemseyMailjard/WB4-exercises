let firstname = 'Remsey';
let lastname = 'Mailjard';
let firstname2 = 'Abdikadir';
let firstname20 = 'Jesus';

//student1 = The name of the object
//firstname = property (describe the object);
let student1 = {
    firstname: 'Abdikadir',
    lastname: '' ,
    adress: '',
    emailadres: '',
}

let student2 = {
    firstname: 'Abdikadir',
    lastname: '' ,
    adress: '',
    emailadres: '',
}

let book = {
    title: "Getting Things Done",
    pages: 200, //Data type number
    author: 'David Allen',
    genre: ['Productivity','Time management'],
    isbn: '12312312'
}
let bookBrettSpokes = {
    title: 'The Thief Lord',
    pages: 345,
    author: 'Cornelia Funke',
    genre: ['Fantasy','Adventure'],
    isbn: '978-0545227704'
}

let bookAbdikadir = {
    title: "The go- giver",
    pages: 123,
    author: "Bob Burg"
};
let book= {
    title: "The Power of Now",
    pages : 236,
    author:"Eckhart Tolle ",
    genre: ['Productivity','Self Help', 'Fiction','NonFiction'] // Array

   
}

console.log(book.genre[1]);
console.log(book.genre[0]);




let myObject = {
    firstname: "Remsey",
    lastname: "Mailjard",
    age: 35,
    githubprofileURL: "https://github.com/RemseyMailjard",
    fullName: function() {
        return this.firstname + " " + this.lastname;
    }
}



//accesing a property
console.log(myObject.fullName());

