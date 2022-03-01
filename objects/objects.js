(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var Person = {
        firstName: 'Destiney',
        lastName: 'Rodney'
    };
    console.log(Person.firstName);
    console.log(Person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper){
        if(shopper.amount > 200){
            var discount = shopper.amount * .12;
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let songs = [
        {
            title: 'Hello',
            artist: {
                firstName: 'Adele',
                lastName: 'Adkins'
            }
        },
        {
            title: 'Passenger',
            artist: {
                firstName: 'Maroon',
                lastName: '5'
            }
        },
        {
            title: 'Stay With Me',
            artist: {
                firstName: 'Sam',
                lastName: 'Smith'
            }
        },
        {
            title: 'Ordinary People',
            artist: {
                firstName: 'Jhon',
                lastName: 'Legend'
            }
        }
    ]
console.log(songs[0].title);
    console.log(songs[3].artist.firstName);

    songs.forEach(function (song, index){
        console.log('Song #' + index + ' ' +  'song title: ' + song.title +  ' ' + 'artist first name: ' + song.artist.firstName);

    })
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createSong (title, firstName, lastName){
        var newSong = {
            title: title,
            artist:{
                firstName: firstName,
                lastName: lastName
            }
        };
        songs.unshift(newSong);
    }
    createSong('am i wrong', 'sean', 'garret');
    console.log(songs);

    function showBookInfo (object){
        console.log('Book title ' + object.title + ' ' + 'Book author ' + object.author)
    }

    var book1 = {
        title: 'elmo loves shapes',
        author: 'elmo'
    }

    var book2 = {
        title: 'cat and the hat',
        author: 'cat'
    }
    console.log(showBookInfo(book1));
})();
